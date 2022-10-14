import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <h1>TMS Lite</h1>
      {showLogin ? (
        <Container>
          <LoginForm onLogin={onLogin}></LoginForm>
          <hr></hr>
          <p>
            Don't have an account? Sign up instead{" "}
            <Button onClick={() => setShowLogin(false)}>Sign up instead</Button>
          </p>
        </Container>
      ) : (
        <Container>
          <SignUpForm onLogin={onLogin} />
          <hr></hr>
          <p>
            Already have an account? Sign in instead{" "}
            <Button onClick={() => setShowLogin(true)}>Sign in instead</Button>
          </p>
        </Container>
      )}
    </>
  );
}
