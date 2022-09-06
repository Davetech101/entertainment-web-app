import Link from "next/link";
import MovieMain from "../public/assets/MovieMain";
import StAuth from "../styles/stComponents/StAuth";

const Auth = ({ type }) => {
  return (
    <StAuth>
      <MovieMain />

      <div className="card">
        <h2>{type === "signup" ? "Sign Up" : "Login"}</h2>

        <input type="email" placeholder="Email address" />

        <input type="password" placeholder="Password" />

        {type === "signup" && (
          <input type="password" placeholder="Repeat Password" />
        )}

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
