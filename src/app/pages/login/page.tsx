"use client";

import InputLabel from "@/app/component/Input/InputLabel";
import InputText from "@/app/component/Input/InputText";
import React, { useState } from "react";
import Button from "@/app/component/Input/Button";
import { auth, googleAuth, provider } from "@/app/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // store errors separately
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Enter a valid email!";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    // form is valid if no errors
    return Object.keys(newErrors).length === 0;
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email, password);
      alert("Form Submitted");
    }
  };

  const router = useRouter()

  const handleGoogleLogin = () => {
    signInWithPopup(auth,googleAuth)
    router.push('/')
  }

  const handleGithubLogin = () => {
    signInWithPopup(auth,provider)
    router.push('/')

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-7 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form  className="space-y-3"
        onSubmit={onFormSubmit}>
          {/* Email */}
          <div className="mb-4">
            <InputLabel label="Email" />
            <InputText
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <InputLabel label="Password" />
            <InputText
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            name="login"
            id="login-button"
            value="submit"
            type="submit" //triggers form onsubmit
            buttonType="primary"
            
          />
          <div className="flex justify-center mt-2">
          <button  
          type = "button"
          className="w-full py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition" 
          onClick={handleGoogleLogin}>Login from google 
            </button> 
            </div>


           <div className="flex justify-center mt-2">
            <button  
          type = "button"
          className="w-full py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition" 
          onClick={handleGithubLogin}>Login from github
            </button> 
            </div>



        </form>
      </div>
    </div>
  );
}
