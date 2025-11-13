"use client";

import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import Link from "next/link";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) {
        alert("Invalid username or password");
        return;
      }
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error: any) {
      console.error("Signin error:", error);
      if (error.response?.status === 401) {
        alert(error.response.data?.message || "Invalid username or password");
      } else if (error.response?.status) {
        alert(`Error: ${error.response.data?.message || "An error occurred during sign in"}`);
      } else if (error.request) {
        alert("Unable to connect to server. Please check if the server is running.");
      } else {
        alert("An error occurred during sign in");
      }
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <br />
      <Button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Button>
      <br />
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}