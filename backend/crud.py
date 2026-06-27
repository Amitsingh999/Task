import json
import uuid
from datetime import datetime
from pathlib import Path

DATA_FILE = Path(__file__).parent / "data" / "users.json"


def read_users():
    if not DATA_FILE.exists():
        DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
        DATA_FILE.write_text("[]", encoding="utf-8")
        return []

    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def write_users(users):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(users, f, indent=2, ensure_ascii=False)


def create_user(user_data: dict):
    users = read_users()

    now = datetime.utcnow().isoformat()
    new_user = {
        "id": str(uuid.uuid4()),
        **user_data,
        "createdAt": now,
        "updatedAt": now,
    }

    users.append(new_user)
    write_users(users)
    return new_user


def get_all_users():
    return read_users()


def get_user_by_id(user_id: str):
    users = read_users()
    for user in users:
        if user["id"] == user_id:
            return user
    return None


def update_user(user_id: str, update_data: dict):
    users = read_users()
    index = None

    for i, user in enumerate(users):
        if user["id"] == user_id:
            index = i
            break

    if index is None:
        return None

    updated = {
        **users[index],
        **{k: v for k, v in update_data.items() if v is not None},
        "id": user_id,
        "updatedAt": datetime.utcnow().isoformat(),
    }

    users[index] = updated
    write_users(users)
    return updated


def delete_user(user_id: str):
    users = read_users()
    filtered = [u for u in users if u["id"] != user_id]

    if len(filtered) == len(users):
        return False

    write_users(filtered)
    return True