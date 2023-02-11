import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffcanvasExample() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} style={{}} bg="white" expand={expand} className="mb-3">
					<div className='flex'>
          <img src="images/code.png" className='code' alt="" />
					<img className='menu' src="images/menu.png" alt="" />
					</div>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;