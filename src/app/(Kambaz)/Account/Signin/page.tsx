"use client";

import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import Link from "next/link";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: { username: string; password: string }) =>
        u.username === credentials.username && u.password === credentials.password
    );
    
    if (user) {
      dispatch(setCurrentUser(user));
      router.push("/Account/Profile");
    } else {
      alert("Invalid username or password");
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