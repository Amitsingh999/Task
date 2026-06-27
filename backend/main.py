from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import crud
from schemas import UserCreate, UserUpdate, UserResponse

app = FastAPI(title="Form API", version="1.0.0")

# Next.js frontend ke liye CORS — zaroori hai
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "FastAPI backend is running"}


# CREATE
@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate):
    return crud.create_user(user.model_dump())


# READ ALL
@app.get("/users")
def get_users():
    return crud.get_all_users()


# READ ONE
@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: str):
    user = crud.get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


# UPDATE
@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: str, user: UserUpdate):
    updated = crud.update_user(user_id, user.model_dump(exclude_unset=True))
    if not updated:
        raise HTTPException(status_code=404, detail="User not found")
    return updated


# DELETE (optional)
@app.delete("/users/{user_id}")
def delete_user(user_id: str):
    deleted = crud.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}