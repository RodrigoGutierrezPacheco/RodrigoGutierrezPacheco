import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { motion,useTime,useTransform } from 'framer-motion';

function OffcanvasExample() {
	
	const time = useTime()
	const rotate = useTransform(
		time,
		[0,4000],
		[0,360],
		{clamp: false}
	)

	const customStyles = {
		content: {
			top: '0%',
			height:'100%',
			width:'50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
		},
	};

	let subtitle;
	const[modalIsOpen,setIsOpen] = React.useState(false);

	function openModal(){
		setIsOpen(true);
	}

	function afterOpenModal(){
		subtitle.style.color = '#f00';
	}

	function closeModal(){
		setIsOpen(false);
	}

	function goHome(){
		window.location.href="/"
	}

	function aboutMe(){
		window.location.href="/aboutMe"
	}

	
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} style={{}} bg="white" expand={expand} className="mb-3">
					<div className='flex'>
					<motion.img style={{rotate}} onClick={goHome}  src="images/code1.png" className='code' alt="" />
					<img onClick={openModal}  className='menu' src="images/menu.png" alt="" />
					<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
					>
						<p onClick={closeModal}>X</p>
             <img onClick={goHome} className='avatar1' src="images/avatar2.png" alt="" />
						<div className='flex-column'>
						 <a className='a' href="/aboutMe">About Me</a>
						 <a className='a' href="
						 /work">Work</a>
						 <a className='a' href="/contact">Contact</a>
						 </div>
					</Modal>
					</div>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;