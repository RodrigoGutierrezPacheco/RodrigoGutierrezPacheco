import React from 'react'
import './HomePage.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const HomePage = () => {

  //email js
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, form.current, process.env.REACT_APP_EMAILJS_PUBLICKEY)
      .then((result) => {
          console.log(result.text);
					Swal.fire({
						title: 'Gracias!',
						text: 'En breve nos comunicaremos contigo!',
						icon: 'success',
						confirmButtonColor: 'black', // Cambia el color del botón
						color:"black",
						background: 'rgba(255, 255, 255, 1)', // Cambia el color de fondo de la alerta
						customClass: {
							title: 'my-title-class', // Cambia el estilo del título
							confirmButton: 'my-button-class', // Cambia el estilo del botón,
						},
						willClose: () => {
							window.location.reload();
						}
					});
      }, (error) => {
          console.log(error.text);
      });
  };


  const proyectos = [
		{
			nombre: "Beautyy-MX",
			descripcion: "Ecommerce para la venta de maquillaje, cuidado de la piel y accesesorios",
			tipo: "Ecommerce",
			logo:"beautyLogo",
			github:"https://github.com/RodrigoGutierrezPacheco/BeautyyMx-Client",
			href : "https://beautyymx-rodrigogutierrezpacheco.vercel.app/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js",
			tecnologia4: "react",
			tecnologia5: "git",
			tecnologia6: "bootstrap",
			tecnologia7: "node",
		},
		{
			nombre: "Agropecuaria - La Isla",
			tipo: "Ecommerce",
			descripcion: "Ecommerce para la venta de miel y productos naturales.",
			logo:"abeja",
			github:"https://github.com/RodrigoGutierrezPacheco/LaIsla",
			href:"https://laisla.vercel.app/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js",
			tecnologia4: "react",
			tecnologia5: "git",
			tecnologia6: "bootstrap",
			tecnologia7: "node",
		},
		{
			nombre:"Vengeance Wars",
			tipo: "Juego retro",
			descripcion: "Juego tipo retro de naves espaciales para computadora y celular",
			logo: "nave",
			github:"https://github.com/RodrigoGutierrezPacheco/WarOfVengeance",
			href:"https://rodrigogutierrezpacheco.github.io/WarOfVengeance/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js"
		}
	]

	return (
		<div className='body'>
		<nav className='nav'>
			<a href='' className='blanco1 start'>&lt;Acerca de mi/&gt;</a>
			<a href='' className='blanco1 start'>&lt;Proyectos/&gt;</a>
			<a href='' className='blanco1 start'>&lt;Contacto/&gt;</a>
		</nav>
		<header className='header'>
			<div className='header1'>
			<div>
				<h1 className='header-text'>Hola, mi nombre es <h1 className='header-text-1 text-shadow'>Rodrigo.</h1></h1>
				<div className='header-png'>
					<a href=""><img className='png-header' src="images/linkedin.png" alt=""/></a>
					<a href=''><img className='png-header' src="images/github.png" alt=""/></a>
					<a href=''><img className='png-header' src="images/gmail.png" alt=""/></a>
					<a href=''><img className='png-header' src="images/whatsapp.png" alt=""/></a>
				</div>
				<button className='btn-header'>Contactame</button>
			</div>
			<div>
				<img className='guiño' src="images/guiño.gif" alt="" />
			</div>
			</div>
			<div className='header2'>
				<div className='width'>
					<h1 className='header-text-2 text-shadow'>Acerca de mi :</h1>
					<button className='btn-header1'>CV <img className='png-header1' src="images/documento.png" alt="" /></button>
				</div>
				<div className='scroll'>
					<section className='header-text'>Soy un desarrollador fronten Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, et! Dolores quod fuga fugit voluptatum, saepe impedit, nam magni corrupti est nihil deserunt nulla, rem exercitationem earum! Atque, explicabo voluptatem!</section>
				</div>
			</div>
		</header>
		<skills className="header">
			<div className='header1'>
				<div className='width'>
					<h1 className='olivo start hard'>&lt;Hard <br /><span className='blanco'>Skills&gt;</span></h1>
					<img className='codigoPng' src="images/codigo.png" alt="" />
				</div>
				<div className='scroll1'>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/html.png" alt="" />
						<h1 className='blanco fontSize1'>HTML</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/css.png" alt="" />
						<h1 className='blanco fontSize1'>CSS</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/js.png" alt="" />
						<h1 className='blanco fontSize1'>JavaScript</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/react.png" alt="" />
						<h1 className='blanco fontSize1'>React.JS</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/git.png" alt="" />
						<h1 className='blanco fontSize1'>GIT</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/bootstrap.png" alt="" />
						<h1 className='blanco fontSize1'>Bootstrap</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/github.png" alt="" />
						<h1 className='blanco fontSize1'>GitHub</h1>
					</div>
					<div className='header1 width line'>
						<img className='png marginr marginb' src="images/figma.png" alt="" />
						<h1 className='blanco fontSize1'>Figma</h1>
					</div>
				</div>
			</div>
			<h1 className='olivo1 start'>&lt;/Hard<span className='blanco1'>Skills&gt;</span></h1>
		</skills>
			<div className='header'>
			<h1 className='olivo start hard'>&lt;Soft<span className='blanco'>Skills&gt;</span></h1>
			<div className='wrap1'>
				<h1 className='soft'>&lt;Comunicacion/&gt;</h1>
				<h1 className='soft'>&lt;Liderazgo/&gt;</h1>
				<h1 className='soft'>&lt;Trabajo en equipo/&gt;</h1>
				<h1 className='soft'>&lt;Creatividad/&gt;</h1>
				<h1 className='soft'>&lt;Adaptabilidad/&gt;</h1>
				<h1 className='soft'>&lt;Resolucion de problemas/&gt;</h1>
				<h1 className='soft'>&lt;Autodisciplina/&gt;</h1>
				<h1 className='soft'>&lt;Autodidacta/&gt;</h1>
			</div>
			<h1 className='olivo1 start'>&lt;/Soft<span className='blanco1'>Skills&gt;</span></h1>
			</div>
		<proyectos className="header">
		<h1 className='olivo start hard'>&lt;Proye<span className='blanco'>ctos&gt;</span></h1>
		{proyectos.map((proyecto)=>{
			return(
				<div key={proyecto.nombre} className='container1'>
				<div className='space'>
					<img className='png1' src={`images/${proyecto.logo}.png`} alt="" />
					<a href={proyecto.github}><img className='png1' src="images/github.png" alt="" /></a>
				</div>
				<h1 className='blanco start line-height'>{proyecto.nombre}</h1>
				<h1 className='blanco start line-height'>{proyecto.tipo}</h1>
				<h1 className='blanco1 start marginb'>{proyecto.descripcion}</h1>
			<div className='row'>
				<img className='png' src={`images/${proyecto.tecnologia1}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia2}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia3}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia4}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia5}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia6}.png`} alt="" />
				<img className='png' src={`images/${proyecto.tecnologia7}.png`} alt="" />
				<img className='png' src="images/npm.png" alt="" />
			</div>
			<button hre className='btnVisitar'><a className='href blanco' href={proyecto.href}>Visitar</a></button>
			</div>
			)
		})}
			<h1 className='olivo1 start'>&lt;/Proye<span className='blanco1'>ctos&gt;</span></h1>
		</proyectos>
		<contacto className="header">
		<h1 className='olivo start hard'>&lt;Cont<span className='blanco'>acto&gt;</span></h1>
		<div>
			<div className='flex container2'>
			 <h1 className='blanco start hard1'>&lt;LinkedIn/&gt;</h1>
			 <img className='png2' src="images/linkedin.png" alt="" />
			</div>
			<div className='flex container2'>
			 <h1 className='blanco start hard1'>&lt;Github/&gt;</h1>
			 <img className='png2' src="images/github.png" alt="" />
			</div>
			<div className='flex container2'>
			 <h1 className='blanco start hard1'>&lt;Gmail/&gt;</h1>
			 <img className='png2' src="images/gmail.png" alt="" />
			</div>
			<div className='flex container2'>
			 <h1 className='blanco start hard1'>&lt;Whatsapp/&gt;</h1>
			 <img className='png2' src="images/whatsapp.png" alt="" />
			</div>
		</div>
		<h1 className='olivo1 start'>&lt;/Cont<span className='blanco1'>acto&gt;</span></h1>
		</contacto>
		<cotizacion className="header">
		<h1 className='olivo start hard'>&lt;Coti<span className='blanco'>zaciones&gt;</span></h1>
		<div className='container1'>
		<form className='cotizaciones' ref={form} onSubmit={sendEmail}>
			<div className='flex2'>
       <label className='blanco text'>Nombre:</label>
       <input required placeholder='Ingresa tu Nombre completo' className='input' type="text" name="user_name" />
			</div>
			<div className='flex2'>
       <label className='blanco text'>Correo Electronico:</label>
       <input required placeholder='correo@correo.com' className='input' type="email" name="user_email" />
			</div>
			<div className='flex2'>
       <label className='blanco text'>Mensaje:</label>
       <textarea required placeholder='¿Tienes algun proyecto en mente? !Escribenos¡' className='input' name="message" />
			</div>
			<div className='flex2'>
       <label className='blanco text'>Presupuesto:</label>
       <select required className='input' name="presupuesto" id="">
				<option value=""></option>
			 <option value="1k-5k">1k-5k</option>
			 <option value="5k-10k">5k-10k</option>
			 <option value="mas de 10k">Mas de 10k</option>
			 </select>
			</div>
      <input className='btn-header margint' type="submit" value="Enviar" />
    </form>
		</div>
		<h1 className='olivo1 start'>&lt;/Coti<span className='blanco1'>zaciones&gt;</span></h1>
		</cotizacion>
		<hr className='footer' />
		<div className='flex1'>
			<h1 className='blanco1'>2023©</h1>
			<a className='href' href=""><h1 className='blanco1'>Volver Arriba</h1></a>
		</div>
		</div>
	)
}

export default HomePage