import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl text-white">Login</h2>
      <input className="w-full p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 px-4 py-2 text-white">Login</button>
    </form>
  )
}