import { onValue, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { setTasksInDB } from "../utils/dbFunction";
export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  // ! it's very important to keep the variable names is small letters because we gonna call it from other components depending on string props

  const [iu, setiu] = useState([]);
  const [inu, setinu] = useState([]);
  const [niu, setniu] = useState([]);
  const [ninu, setninu] = useState([]);

  // ^ this will get the info for first time and listen to any change in the db to render it on the screen.
  useEffect(() => {
    const userId = auth?.currentUser?.uid;
    const iuRef = ref(db, `${userId}/iu`);
    const inuRef = ref(db, `${userId}/inu`);
    const niuRef = ref(db, `${userId}/niu`);
    const ninuRef = ref(db, `${userId}/ninu`);

    onValue(iuRef, (snapshot) => {
      if (snapshot.exists()) {
        setiu(snapshot.val());
        return;
      }
      setiu([]);
    });
    onValue(inuRef, (snapshot) => {
      if (snapshot.exists()) {
        setinu(snapshot.val());
        return;
      }
      setinu([]);
    });
    onValue(niuRef, (snapshot) => {
      if (snapshot.exists()) {
        setniu(snapshot.val());
        return;
      }
      setniu([]);
    });
    onValue(ninuRef, (snapshot) => {
      if (snapshot.exists()) {
        setninu(snapshot.val());
        return;
      }
      setninu([]);
    });
  }, []);
  // ^ ________________________________________________________________________________________

  useEffect(() => {
    console.log("✅✅", iu);
  }, [iu]);
  useEffect(() => {
    console.log("✅❌", inu);
  }, [inu]);
  useEffect(() => {
    console.log("❌✅", niu);
  }, [niu]);
  useEffect(() => {
    console.log("❌❌", ninu);
  }, [ninu]);
  const sharedValues = {
    iu,
    setiu,
    inu,
    setinu,
    niu,
    setniu,
    ninu,
    setninu,
  };
  return (
    <TasksContext.Provider value={sharedValues}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
