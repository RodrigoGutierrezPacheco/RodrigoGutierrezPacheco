import { useTime, useTransform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import '../HomePage/HomePage.css'
import 'animate.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AnimacionDeEscritura = ({ texto }) => {
  const [textoActual, setTextoActual] = useState(" ");

  useEffect(() => {
    let i = -1;
    const timer = setInterval(() => {
      if (i < texto.length) {
        setTextoActual(texto.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
	
    return () => clearInterval(timer);
  }, [texto]);
	
  const palabras = textoActual.split(" ");
  const rojoIndex = palabras.findIndex((palabra) => palabra === "Rodrigo.");
	
  return (
		<span>
			{palabras.slice(0, rojoIndex).join(" ")}{" "}
			<span className="rojo">{palabras[rojoIndex]}</span>{" "}
			{palabras.slice(rojoIndex +  palabras.length + ".").join(" ")}		
			</span>
  );
};

function HomePage() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });	

  // function acerca() {
  //   Swal.fire({
  //     html: 
  //     confirmButtonColor: "black",
  //     confirmButtonText: "X",
  //     height: "50vh",
  //     background: '#fff',
  //     showClass: {
  //       popup: 'animate__animated animate__backInLeft'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     }
  //   })
  // }

	function proyectos(){
		Swal.fire({
			html:
			'<div class="box2">' +
			'<h1>Juego Retro para Computadora</h1>' +
			'<div class="box1">' +
			'<img class="imgPortada" src="images/vengeanceWars.jpg" alt="" />' +
			'<div class="flex">' +
			'<img class="imagen img1" src="images/html.png" alt="" />' +
			'<img class="imagen img1" src="images/js.png" alt="" />' +
			'<img class="imagen img1" src="images/css.png" alt="" />' +
			'<img class="imagen img1" src="images/git.png" alt="" />' +
			'</div>' +
			'</div>' +
			'</div>',
			title: 'Proyectos',
			confirmButtonColor:"black",
			confirmButtonText:"Ok",
			showClass: {
				popup: 'animate__animated animate__backInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__bounceOut'
			}
		})
	}

	function contact(){
		Swal.fire({
			title: 'Contacto',
			confirmButtonColor:"black",
			confirmButtonText:"Ok",
			showClass: {
				popup: 'animate__animated animate__backInRight'
			},
			hideClass: {
				popup: 'animate__animated animate__backOutDown'
			}
		})
	}



  const [modalAbierto, setModalAbierto] = useState(false);
	const [animacionSalida, setAnimacionSalida] = useState("");

	const customStyles = {
    content: {
      animation: 'slideInLeft 1s ease',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '999',
    },
  };

	const abrirModal = () => {
    setModalAbierto(true);
    setAnimacionSalida("");
  };

	const cerrarModal = () => {
    setModalAbierto(false);
    setAnimacionSalida("slideOutLeft");
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

	const values = ['xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

	const handleClose = () => {
		const modalElement = document.querySelector('.modal-dialog');
		modalElement.classList.add('slide-out-left');
		setTimeout(() => {
			setShow(false);
		}, 1000); // el tiempo de espera debe ser igual al tiempo de la animación
	};
	
	

  return (
		<div className="body">
		<img className="avatar animate__animated animate__backInDown" src="images/guiño.gif" alt="" />
		<h1 className=" title">
			<AnimacionDeEscritura key={"hola"} texto="Hola, mi nombre es Rodrigo." />
		</h1>
		<br />	
			<div className="flex2">
			{values.map((v, idx) => (
        <motion.button key={idx} className="me-2 mb-2 button marginr marginl" onClick={() => handleShow(v)}>
          Acerca de mi
        </motion.button>
      ))}
      <Modal onExit={handleClose} className='animate__animated animate__bounceInLeft slide-out-left' show={show} fullscreen={fullscreen} onHide={() => setShow(false)} animation={false} fade={"flip"}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
				<motion.button onClick={proyectos} whileTap={{scale:1.2}} className="button animate__animated animate__zoomIn  texto1 marginl marginr">Proyectos</motion.button>
				<motion.button onClick={contact} whileTap={{scale:1.2}} className="button animate__animated animate__bounceInRight texto1 marginr marginl">Contacto</motion.button>
			</div>
			<div className="footer">
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginl' alt="" />
			<div className='bienvenido'>
			 <AnimacionDeEscritura key={"hola"} texto="Bienvenido a mi espacio." />
			</div>
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginr' alt="" />
			</div>
			<div>
			
			</div>

    </div>
  );
}

export default HomePage;
