from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime


class UserCreate(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str = Field(..., pattern=r"^[6-9]\d{9}$")
    gender: str
    address: str
    companyName: str
    companyEmail: EmailStr
    companyPhone: str = Field(..., pattern=r"^[6-9]\d{9}$")
    website: Optional[str] = ""
    industry: str
    companyAddress: str


class UserUpdate(BaseModel):
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(default=None, pattern=r"^[6-9]\d{9}$")
    gender: Optional[str] = None
    address: Optional[str] = None
    companyName: Optional[str] = None
    companyEmail: Optional[EmailStr] = None
    companyPhone: Optional[str] = Field(default=None, pattern=r"^[6-9]\d{9}$")
    website: Optional[str] = None
    industry: Optional[str] = None
    companyAddress: Optional[str] = None


class UserResponse(UserCreate):
    id: str
    createdAt: str
    updatedAt: str