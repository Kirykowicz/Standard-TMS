import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Container fluid className="text-center">
        <h1 className="text-secondary">Standard TMS</h1>
      </Container>
      {showLogin ? (
        <Container>
          <LoginForm onLogin={onLogin}></LoginForm>
          <hr></hr>
          <p>
            Don't have an account?{" "}
            {
              <span
                style={{ cursor: "pointer" }}
                className="text-primary"
                onClick={() => setShowLogin(false)}
              >
                Sign up instead.
              </span>
            }
            {/* <Button onClick={() => setShowLogin(false)}>Sign up instead</Button> */}
          </p>
        </Container>
      ) : (
        <Container>
          <SignUpForm onLogin={onLogin} />
          <hr></hr>
          <p>
            Already have an account?{" "}
            {
              <span
                style={{ cursor: "pointer" }}
                className="text-primary"
                onClick={() => setShowLogin(true)}
              >
                Sign in instead
              </span>
            }{" "}
            {/* <Button onClick={() => setShowLogin(true)}>Sign in instead</Button> */}
          </p>
        </Container>
      )}
    </>
  );
}
