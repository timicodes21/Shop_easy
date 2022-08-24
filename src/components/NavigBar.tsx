import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/Navbar.module.css";
import { BiCart, BiHelpCircle, BiUser, BiHomeAlt } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";

const NavigBar: React.FC = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-white shadow-sm py-md-2 ">
        <Container>
          <Navbar.Brand className="d-flex align-items-center pointer">
            <Link href="/">
              <div>
                <span className="font-700 me-2 font-22"> ShopEasy</span>
                <FaShoppingBasket className="font-24" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link href="/">
                  <div className="d-flex align-items-center">
                    <BiHomeAlt className="font-24 font-700" />
                    <span className="font-14 ms-2 font-500">Home</span>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <div className="d-flex align-items-center">
                  <BiUser className="font-24 font-700" />
                  <span className="font-14 ms-2 font-500">Profile</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="d-flex align-items-center">
                  <BiHelpCircle className="font-24 font-700" />
                  <span className="font-14 ms-2 font-500">Help</span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <Link href="/cart">
                  <div className="d-flex align-items-center">
                    <BiCart className="font-24 font-700" />
                    <span className="font-14 ms-2 font-500">Cart</span>
                  </div>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigBar;
