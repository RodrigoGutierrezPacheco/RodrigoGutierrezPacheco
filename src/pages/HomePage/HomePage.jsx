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

 //Modal 1
 const values1 = ['xxl-down'];
 const [fullscreen1, setFullscreen1] = useState(true);
 const [show1, setShow1] = useState(false);
 function handleShow1(breakpoint) {
	setFullscreen1(breakpoint);
	setShow1(true);
}

 //Modal 2
 const values2 = ['xxl-down'];
 const [fullscreen2, setFullscreen2] = useState(true);
 const [show2, setShow2] = useState(false);
 function handleShow2(breakpoint) {
	setFullscreen2(breakpoint);
	setShow2(true);
}

 //Modal 3
 const values3 = ['xxl-down'];
 const [fullscreen3, setFullscreen3] = useState(true);
 const [show3, setShow3] = useState(false);
 function handleShow3(breakpoint) {
	setFullscreen3(breakpoint);
	setShow3(true);
}


  return (
		<div className="body">
		<img className="avatar animate__animated animate__backInDown" src="images/guiño.gif" alt="" />
		<h1 className=" title">
			<AnimacionDeEscritura key={"hola"} texto="Hola, mi nombre es Rodrigo." />
		</h1>
		<br />	
			<div className="flex2">
			 {values1.map((v, idx) => (
        <motion.button key={idx} className="me-2 mb-2 button marginr marginl animate__animated animate__bounceInLeft" onClick={() => handleShow1(v)}>
          Acerca de mi
        </motion.button>
      ))}
      <Modal className='animate__animated animate__bounceInLeft slide-out-left' show={show1} fullscreen={fullscreen1} onHide={() => setShow1(false)} animation={false} fade={"flip"}>
        <Modal.Header closeButton>
          <Modal.Title>Acerca de mi</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Hola! Mi nombre es Rodrigo Gutierrez Pacheco y soy un apasionado desarrollador web front-end junior. Mi habilidad principal es el desarrollo con HTML, CSS, JavaScript y React.js, además de tener conocimientos en diversas librerías para estilos de CSS.

         Soy una persona proactiva, creativa y altamente motivada. Me encanta trabajar en equipo y aprender cosas nuevas, siempre estoy buscando maneras de mejorar y crecer profesionalmente. Mi mayor satisfacción es ver los proyectos en los que trabajo cobrar vida y lograr los objetivos que se han propuesto.

        Me considero un desarrollador detallista y apasionado por las nuevas tecnologías, lo que me permite estar al día en las últimas tendencias y novedades en el mundo del desarrollo web. Además, tengo una gran capacidad de adaptación y resolución de problemas, lo que me permite enfrentar nuevos desafíos con entusiasmo y confianza.
				<h1>Tecnologias</h1>
				<div className='flex2'>
					<img className='png' src="images/html.png" alt="" />
					<img className='png' src="images/css.png" alt="" />
					<img className='png' src="images/js.png" alt="" />
					<img className='png' src="images/react.png" alt="" />
					<img className='png' src="images/git.png" alt="" />
					<img className='png' src="images/github.png" alt="" />

				</div>
				</Modal.Body>
      </Modal> 
			  {values2.map((v, idx) => (
        <motion.button key={idx} className="button animate__animated animate__zoomIn  texto1 marginl marginr" onClick={() => handleShow2(v)}>
          Proyectos
        </motion.button>
      ))}
      <Modal className='animate__animated animate__zoomIn' show={show2} fullscreen={fullscreen2} onHide={() => setShow2(false)} animation={false} fade={"flip"}>
        <Modal.Header closeButton>
          <Modal.Title>Proyectos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
       {values3.map((v, idx) => (
        <motion.button key={idx} className="button animate__animated animate__bounceInRight texto1 marginr marginl" onClick={() => handleShow3(v)}>
					Contacto
        </motion.button>
      ))}
      <Modal className='animate__animated animate__bounceInRight' show={show3} fullscreen={fullscreen3} onHide={() => setShow3(false)} animation={false} fade={"flip"}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>  

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

{/* <motion.button onClick={contact} whileTap={{scale:1.2}} className="button animate__animated animate__bounceInRight texto1 marginr marginl">Contacto</motion.button> */}
export default HomePage;