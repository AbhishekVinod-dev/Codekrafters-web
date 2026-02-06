import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCred.user.uid), { email });
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl text-white">Register</h2>
      <input className="w-full p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 px-4 py-2 text-white">Register</button>
    </form>
  )
}