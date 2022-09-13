import Link from "next/link";
import { useState, useCallback } from "react";
import MovieMain from "../public/assets/MovieMain";
import StAuth from "../styles/stComponents/StAuth";

const Auth = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [match, setMatch] = useState(true);

  const onChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (type !== "login" && formData.password !== formData.passwordRepeat) {
        setMatch(false);
        setTimeout(() => {
          setMatch(true);
        }, 2000);
      } else {
        setMatch(true);
        console.log(formData);

        e.target.reset();
      }
    },
    [formData, type]
  );

  return (
    <StAuth onSubmit={submitHandler}>
      <MovieMain />

      <div className="card">
        <h2>{type === "signup" ? "Sign Up" : "Login"}</h2>

        <input
          type="email"
          placeholder="Email address"
          id="email"
          onChange={onChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={onChange}
          required
          // minLength="6"
        />

        {type === "signup" && (
          <input
            type="password"
            placeholder="Repeat Password"
            id="passwordRepeat"
            onChange={onChange}
            required
            // minLength="6"
          />
        )}

        {!match && <p>passwords must match</p>}

        <button>
          {type === "signup" ? "Create an account" : "Login to your account"}
        </button>

        <aside>
          {type === "signup" ? (
            <span>
              Already have an account? <Link href="login">Login</Link>
            </span>
          ) : (
            <span>
              Don&apos;t have an account? <Link href="signup">Sign up</Link>
            </span>
          )}
        </aside>
      </div>
    </StAuth>
  );
};

export default Auth;
