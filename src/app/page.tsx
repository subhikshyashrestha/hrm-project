"use client";
import { useContext } from "react";

import ThemeToggle from "./component/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function Home() {
 const {darkMode} =useContext(ThemeContext);
 const router = useRouter();
 const logout= async () => {
   await  signOut(auth);
    router.push('/pages/login')
  }
  

  return (
     <div
       className={`min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >

     
      <ThemeToggle/>

      
      <main className="flex flex-col items-center gap-6 text-center">
        <h1  className="text-1xl font-bold">Welcome, {auth.currentUser?.displayName || "User"}! </h1>
      
        <p >Email:{auth.currentUser?.email}</p>

          <button  onClick={logout} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"> Logout</button>
          

      </main> 
      
      <footer>
       
      </footer>
      
    </div>
  );
}
