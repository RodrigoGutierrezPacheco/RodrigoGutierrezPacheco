import "./HomePage.css";
import { motion,useTime,useTransform } from 'framer-motion';
import Swal from "sweetalert2";
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function HomePage() {
// Modal Acerda de mi---------------------------------------------------------------------------
	const customStyles = {
		// content: {
			// top: '80%',
		// 	left: '50%',
		// 	right: 'auto',
		// 	bottom: 'auto',
		// 	marginRight: '-50%',
		// 	transform: 'translate(-50%, -50%)',
		// },
	};

	let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

// ------------------------------------------------------------------------------------


	const time = useTime()
	const rotate = useTransform(
		time,
		[0,4000],
		[0,360],
		{clamp: false}
	)

	function acerca(){
		Swal.fire({
			title: 'Acerca de mi',
			confirmButtonColor:"black",
			confirmButtonText:"X",
			height:100,
			showClass: {
				popup: 'animate__animated animate__backInLeft'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
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

	function proyectos(){
		Swal.fire({
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

  return (
    <div className="body">
			<img className="avatar animate__animated animate__backInDown" src="images/guiño.gif" alt="" />
      <h1 class="animate__animated animate__backInUp title">Hola, mi nombre es <h1 className="a">Rodrigo.</h1></h1>
			<div className="footer">
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginl' alt="" />
			<h1 className="b">Bienvenido a mi espacio.</h1>
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginr' alt="" />
			</div>

			<div className="flex2">
				<motion.button onClick={openModal} whileTap={{scale:1.2}} className="animate__animated animate__bounceInLeft texto1 marginl marginr">Acerca de mi</motion.button>
				<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
				className={'animate__animated animate__zoomIn animate__bounceOut modalAcerca'}
      >
        <h1>Desarrollador Front End</h1>
				<p>Soy un Desarrollador Web Frontend Junior egresado de Ironhack con experiencia en HTML, CSS y JavaScript. Además, he estado trabajando en proyectos propios y adquiriendo nuevos conocimientos por mi cuenta. Aunque no tengo experiencia laboral, estoy muy motivado para aplicar mis conocimientos y habilidades para crear experiencias excepcionales para los usuarios. Estoy comprometido con el aprendizaje continuo y estoy ansioso por unirme a un equipo innovador y apasionado para llevar los proyectos al siguiente nivel. Si buscas a alguien que esté listo para enfrentar nuevos desafíos, no dudes en considerarme para cualquier oportunidad.</p>
      </Modal>



				<motion.button onClick={proyectos} whileTap={{scale:1.2}} className="animate__animated animate__zoomIn  texto1 marginl marginr">Proyectos</motion.button>
				<motion.button onClick={contact} whileTap={{scale:1.2}} className="animate__animated animate__bounceInRight texto1 marginr marginl">Contacto</motion.button>
			</div>

    </div>
  );
}

export default HomePage;
