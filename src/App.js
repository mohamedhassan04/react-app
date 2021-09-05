import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import "./App.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
function App() {
  return (
    <div className="background">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Forms-REACT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <span className="slogan">
        <h1>
          Welcome to my first <br /> REACT application{" "}
        </h1>
      </span>
      <div className="login-forms">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <div className="text-center pt-3">
            Or continue with your social account{" "}
          </div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <GoogleLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <a href="/Sign-up">Sign Up</a>
            <span className="p-2">|</span>
            <a href="forget-password">Forget password</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
