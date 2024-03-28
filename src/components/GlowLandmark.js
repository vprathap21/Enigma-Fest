import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const GlowLandmark = ({ style, setGlow, setShowIndex, show, item }) => {
  const ocean = new Audio("/open-chest.mp3");
  const [user, setUser] = useState([]);
  const [next, setNext] = useState(false);
  const [message, setMessage] = useState("");
  const [isclicked, setIsclicked] = useState(false);
  const usercollection = collection(db, "users");
  const currentUser = useSelector((state) => state.user);

  const getusers = async () => {
    const data = await getDocs(usercollection);
    const u = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUser(u);
  };

  useEffect(() => {
    getusers();
  }, []);

  const handleonclick = () => {
    ocean.play();
    setShowIndex();
  };

  const handle = () => {
    setIsclicked(true);
    if (message === item.answer) {
      setMessage("");
      setNext(true);
    }
  };

  const updateuser = async (id, completedTask) => {
    console.log(completedTask);
    const userDoc = doc(db, "users", id);
    let arr = completedTask;
    arr.push(item.id);
    await updateDoc(userDoc, {
      completedTask: arr,
    });
  };

  const handlenext = () => {
    for (let i = 0; i < user.length; i++) {
      if (user[i].TeamName === currentUser.TeamName) {
        updateuser(user[i].id, user[i].completedTask);
        break;
      }
    }
    setGlow();
    setNext(false);
    setIsclicked(false);
  };

  return (
    <div>
      {show ? (
        <div
          className="absolute bg-opacity-70 ml-8 bg-blue-500 rounded-md w-1/4 p-4 animate__animated animate__zoomIn animate__slow"
          style={item.style}
        >
          <p className="text-white font-bold">Question : </p>
          <p className="font-bold text-white text-justify font-serif text-lg mb-4">
            {item?.question}
          </p>
          <input
            className="rounded-md h-8 pl-4"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button
            onClick={handle}
            className="p-1 ml-2 rounded-md bg-yellow-200"
          >
            check
          </button>
          {isclicked &&
            (next ? (
              <button
                onClick={handlenext}
                className="p-1 ml-2 rounded-md bg-green-800 text-white"
              >
                next
              </button>
            ) : (
              <button className="p-1 ml-2 rounded-md">{"❌️"}</button>
            ))}
        </div>
      ) : null}
      <button
        onClick={handleonclick}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
        style={style}
      >
        {item.id}
      </button>
    </div>
  );
};

export default GlowLandmark;
