import { useTime, useTransform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import '../HomePage/HomePage.css'
import 'animate.css';

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

  function acerca() {
    Swal.fire({
      html: ' <h1>Acerca de Mi.</h1>' +
        '<div style="height:20rem; text-align:justify; overflow: scroll;">' +
        ' <p>¡Hola! Mi nombre es Rodrigo Gutierrez Pacheco y soy un apasionado desarrollador web front-end junior. Mi habilidad principal es el desarrollo con HTML, CSS, JavaScript y React.js, además de tener conocimientos en diversas librerías para estilos de CSS.Soy una persona proactiva, creativa y altamente motivada. Me encanta trabajar en equipo y aprender cosas nuevas, siempre estoy buscando maneras de mejorar y crecer profesionalmente. Mi mayor satisfacción es ver los proyectos en los que trabajo cobrar vida y lograr los objetivos que se han propuesto.Me considero un desarrollador detallista y apasionado por las nuevas tecnologías, lo que me permite estar al día en las últimas tendencias y novedades en el mundo del desarrollo web. Además, tengo una gran capacidad de adaptación y resolución de problemas, lo que me permite enfrentar nuevos desafíos con entusiasmo y confianza.</p>' +
        '<h1>Tecnologias</h1>' +
        '<div style="margin-bottom:1rem;">' +
        '<img style="height:4rem" src="images/html.png" alt="" />' +
        '<img style="height:4rem" src="images/css.png" alt="" />' +
        '<img style="height:4rem" src="images/js.png" alt="" />' +
        '<img style="height:4rem" src="images/react.png" alt="" />' +
        '<img style="height:4rem" src="images/git.png" alt="" />' +
        '<img style="height:4rem" src="images/github.png" alt="" />' +
        '</div>' +
        '</div>',
      confirmButtonColor: "black",
      confirmButtonText: "X",
      height: "50vh",
      background: '#fff',
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
		<h1 className="animate__animated animate__backInUp title">
			<AnimacionDeEscritura key={"hola"} texto="Hola, mi nombre es Rodrigo." />
		</h1>
		<br />	
			<div className="flex2">
				<motion.button onClick={acerca} whileTap={{scale:1.2}} className="animate__animated animate__bounceInLeft texto1 marginl marginr">Acerca de mi</motion.button>
				<motion.button onClick={proyectos} whileTap={{scale:1.2}} className="animate__animated animate__zoomIn  texto1 marginl marginr">Proyectos</motion.button>
				<motion.button onClick={contact} whileTap={{scale:1.2}} className="animate__animated animate__bounceInRight texto1 marginr marginl">Contacto</motion.button>
			</div>
			<div className="footer">
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginl' alt="" />
			<h1 className="b">Bienvenido a mi espacio.</h1>
			<motion.img style={{rotate}} src="images/code1.png" className='png1 marginr' alt="" />
			</div>

    </div>
  );
}

export default HomePage;
