import { child, get, push, ref, set, update } from "firebase/database";
import { auth, db } from "../firebase/config";

export const setTasksInDB = (tasks, priority) => {
  const userId = auth.currentUser.uid;
  const path = `${userId}/${priority}`;
  const dbRef = ref(db, path);
  set(dbRef, tasks);
};

export const getTasks = async (priority) => {
  const dbRef = ref(db);
  const userId = auth.currentUser.uid;
  const path = `${userId}/${priority}`;
  const snapshot = await get(child(dbRef, path));
  return snapshot.exists() ? snapshot.val() : [];
};

export const getNewId = (priority) => {
  const userId = auth.currentUser.uid;
  const path = `${userId}/${priority}`;
  return push(child(ref(db), path)).key;
};

export const changeTaskDetails = (index, priority, details) => {
  const userId = auth.currentUser.uid;
  const path = `${userId}/${priority}/${index}`;
  const dbRef = ref(db, path);
  update(dbRef, details);
};
