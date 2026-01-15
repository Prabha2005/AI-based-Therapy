from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from utils.auth import get_current_user
from models.user import User
from models.journal import Journal
from schemas.journal import JournalCreate, JournalOut

router = APIRouter(prefix="/journal", tags=["Journal"])

@router.post("/", response_model=JournalOut)
def create_journal(
    data: JournalCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    journal = Journal(
        user_id=current_user.id,
        content=data.content
    )
    db.add(journal)
    db.commit()
    db.refresh(journal)
    return journal

@router.get("/", response_model=list[JournalOut])
def get_journals(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return (
        db.query(Journal)
        .filter(Journal.user_id == current_user.id)
        .order_by(Journal.created_at.desc())
        .all()
    )

@router.put("/{journal_id}", response_model=JournalOut)
def update_journal(
    journal_id: int,
    data: JournalCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    journal = (
        db.query(Journal)
        .filter(Journal.id == journal_id, Journal.user_id == current_user.id)
        .first()
    )
    if not journal:
        raise HTTPException(status_code=404, detail="Journal not found")

    journal.content = data.content
    db.commit()
    db.refresh(journal)
    return journal

@router.delete("/{journal_id}")
def delete_journal(
    journal_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    journal = (
        db.query(Journal)
        .filter(Journal.id == journal_id, Journal.user_id == current_user.id)
        .first()
    )
    if not journal:
        raise HTTPException(status_code=404, detail="Journal not found")

    db.delete(journal)
    db.commit()
    return {"message": "Journal deleted"}
