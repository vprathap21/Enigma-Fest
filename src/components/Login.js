import { db } from "../utils/firebase";
import { logo } from "../utils/links";
import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Login = () => {
  
  const dispatch = useDispatch();
  const usercollection = collection(db, "users");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [logindiv, setLogindiv] = useState(false);
  const [errormessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const msg =
      teamName.length < 6 ? "Team name must be at least 6 characters!" : "";
    if (msg) {
      setErrorMessage(msg);
      return;
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].TeamName === teamName) {
        setErrorMessage("Team name already exists!");
        return;
      }
    }
    setIslogin(true);
    dispatch(addUser({ TeamName: teamName }));
    await addDoc(usercollection, { TeamName: teamName, completedTask: [] });
    navigate("/home");
    
  };

  const onClickHandler = () => {
    setLogindiv(!logindiv);
  };

  const getusers = async () => {
    const data = await getDocs(usercollection);
    const u = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUsers(u);
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div>
      <div className="sticky top-0 text-purple-500 shadow-lg m-4 flex justify-between items-center">
        <img className="ml-4" src={logo} alt="logo" />
        <button
          onClick={onClickHandler}
          className="flex items-center text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
        >
          {islogin ? (
            <FaUserCircle className="text-4xl" />
          ) : (
            <div className="flex items-center justify-center">
              <p>LogIn</p>
              <FiLogIn className="text-4xl" />
            </div>
          )}
        </button>
      </div>

      <div
        className="flex justify-center items-center h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/WWpPpmP/Screenshot-from-2024-03-26-22-02-52.png')",
        }}
      >
        {logindiv && (
          <div className="absolute sticky top-0 bg-opacity-80 bg-gray-100 rounded-lg p-8 shadow-lg mt-96">
            <h1 className="text-4xl mb-4 text-center text-gray-800">
              Welcome to Enigmafest
            </h1>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              placeholder="Enter team name"
            />
            <p className="text-red-500 text-lg font-bold mb-4">
              {errormessage}
            </p>
            <button
              onClick={handleLogin}
              className="text-xl w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              LogIn
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
