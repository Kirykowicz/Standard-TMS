import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <>
      <Nav className="justify-content-center mb-3 mt-4" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Load Board</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="customers">
            <Nav.Link>Customers</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="carriers">
            <Nav.Link>Carriers</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="loads">
            <Nav.Link>Loads</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="sites">
            <Nav.Link>Sites</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        {/* <Nav.Item>
          <LinkContainer to="history">
            <Nav.Link>History</Nav.Link>
          </LinkContainer>
        </Nav.Item> */}

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={handleLogoutClick}>
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
