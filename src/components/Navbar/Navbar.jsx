import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function OffcanvasExample() {
	function menu (){
		Swal.fire({
			width: 600,
			html:'<h1 href=/aboutme></h1>'+ '',
			buttonsStyling:'yes',
			padding: '3em',
			color: '#716add',
			background: '#fff url(/images/trees.png)',
			backdrop: `
				rgba(0,0,123,0.4)
				url("/images/nyan-cat.gif")
				left top
				no-repeat
			`
		})	}
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} style={{}} bg="white" expand={expand} className="mb-3">
					<div className='flex'>
					<img src="images/code.png" className='code' alt="" />
					<img onClick={menu} className='menu' src="images/menu.png" alt="" />
					</div>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;