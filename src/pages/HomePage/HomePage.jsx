import React, { useState } from 'react'
import './HomePage.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import { register } from 'swiper/element/bundle';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet } from 'react-helmet';


const HomePage = () => {
	const [loading, setLoading] = useState(false)

	//email js
	const form = useRef();
	console.log(loading)
	const sendEmail = (e) => {
		setLoading(true)
		e.preventDefault();
		emailjs.sendForm('service_a3iwfaq', 'template_nq34ag7', form.current, 'Q-9E7qPt5U-kBqC9P')
			.then((result) => {
				setLoading(false)
				Swal.fire({
					title: 'Gracias!',
					text: 'En breve nos comunicaremos contigo!',
					icon: 'success',
					confirmButtonColor: 'black', // Cambia el color del botón
					color: "black",
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
				setLoading(false)
				console.log(error.text);
			});
	};


	const proyectos = [
		{
			nombre: "Beautyy-MX",
			descripcion: "Ecommerce para la venta de maquillaje, cuidado de la piel y accesorios",
			tipo: "Ecommerce",
			logo: "beautyLogo",
			github: "https://github.com/RodrigoGutierrezPacheco/BeautyyMx-Client",
			href: "https://beautyymx-rodrigogutierrezpacheco.vercel.app/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js",
			tecnologia4: "react",
			tecnologia5: "git",
			tecnologia6: "bootstrap",
			tecnologia7: "node",
		},
		// {
		// 	nombre: "Agropecuaria - La Isla",
		// 	tipo: "Ecommerce",
		// 	descripcion: "Ecommerce para la venta de miel y productos naturales.",
		// 	logo:"abeja",
		// 	github:"https://github.com/RodrigoGutierrezPacheco/LaIsla",
		// 	href:"https://laisla.vercel.app/",
		// 	tecnologia1: "html",
		// 	tecnologia2: "css",
		// 	tecnologia3: "js",
		// 	tecnologia4: "react",
		// 	tecnologia5: "git",
		// 	tecnologia6: "bootstrap",
		// 	tecnologia7: "node",
		// },
		{
			nombre: "Blxck-Training",
			tipo: "App",
			descripcion: "App movil de rutinas para gimnasio y casa",
			logo: "pesoa",
			github: "https://github.com/RodrigoGutierrezPacheco/BlxckTraining",
			href: "https://blxck-training.vercel.app/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js",
			tecnologia4: "react",
			tecnologia5: "git",
			tecnologia6: "bootstrap",
			tecnologia7: "node",
		},
		{
			nombre: "Vengeance Wars",
			tipo: "Juego retro",
			descripcion: "Juego tipo retro de naves espaciales para computadora y celular",
			logo: "nave",
			github: "https://github.com/RodrigoGutierrezPacheco/WarOfVengeance",
			href: "https://rodrigogutierrezpacheco.github.io/WarOfVengeance/",
			tecnologia1: "html",
			tecnologia2: "css",
			tecnologia3: "js"
		}
	]

	const certificaciones = [
		{
			nombre: "Web Development Full time Bootcamp in México City",
			escuela: "Ironhack",
			id: "61169226",
			img: "images/ironHackLogo.png",
			credencial: "https://www.credential.net/5d083bae-5297-4abb-88af-553fbbcc5e70"
		},
		{
			nombre: "Aspectos básicos del diseño de la experiencia del usuario",
			escuela: "Coursera",
			id: "TXTE9MRV5YHH",
			img: "images/coursera.png",
			credencial: "https://www.coursera.org/account/accomplishments/certificate/TXTE9MRV5YHH"
		},
		{
			nombre: "Build Responsive Real-World  Websites with HTML and CSS",
			escuela: "Udemy",
			id: "UC-9487e580-411f-4c07-9ec7-26428c76f8b1",
			img: "images/udemy.png",
			credencial: "ude.my/UC-9487e580-411f-4c07-9ec7-26428c76f8b1"
		},
		{
			nombre: "Programación FullStack",
			escuela: "Udemy",
			id: "UC-63a18f26-ba33-4ecd-8dd9-3426fb55f6d8",
			img: "images/udemy.png",
			credencial: "https://www.udemy.com/certificate/UC-63a18f26-ba33-4ecd-8dd9-3426fb55f6d8/"
		},

	]

	const visitarProyecto = (href) => {
		window.location.href = href
	}



	return (
		<div className='body' id='inicio'>
			<Helmet>
				<meta charSet="utf-8" />
				<link rel="icon" href="/public/images/guiño1.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Soy un apasionado desarrollador web junior. Mi habilidad principal es el desarrollo con HTML, CSS, JavaScript y React.js. Estoy comprometido en crear proyectos web increíbles y brindar soluciones a medida para mis clientes."
				/>
				<meta property="og:image" content="/images/guiño.gif" />
				<title>Desarrollador Web - Proyectos, Redes, Contacto</title>
			</Helmet>


			<nav className='nav'>
				<a href='#proyectos' className='blanco2 start href'>&lt;Proyectos/&gt;</a>
				<a href='#contacto' className='blanco2 start href'>&lt;Redes/&gt;</a>
				<a href='#cotizaciones' className='blanco2 start href'>&lt;Contacto/&gt;</a>
			</nav>
			<header className='header'>
				<div className='header1'>
					<div>
						<h1 className='header-text'>Hola, mi nombre es <h1 className='header-text-1 text-shadow'>Rodrigo.</h1></h1>
						<div className='header-png'>
							<a href="https://www.linkedin.com/in/rodrigogutierrezpacheco/"><img className='png-header' src="images/linkedin.png" alt="" /></a>
							<a href='https://github.com/RodrigoGutierrezPacheco'><img className='png-header' src="images/github.png" alt="" /></a>
							<a href='mailto:rodrigogutierrezpacheco@gmail.com?subject=Cotizaciones&body=¡Hola!%20me%20gustaria%20una%20cotizacion%20para%20una%20pagina%20web'><img className='png-header' src="images/gmail.png" alt="" /></a>
							<a href='https://api.whatsapp.com/send?phone=525638686467'><img className='png-header' src="images/whatsapp.png" alt="" /></a>
						</div>
						<button className='btn-header'><a href="https://api.whatsapp.com/send?phone=525638686467" className='href blanco'>Contactame</a></button>
					</div>
					<div>
						<img className='guiño' src="images/guiño.gif" alt="" />
					</div>
				</div>
				<div className='header2'>
					<div className='width1 acerca-mi'>
						<h1 className='header-text-2 text-shadow'>Acerca de mi :</h1>
						<a href="images/cv.pdf" download className='href'><button className='btn-header1 center'>CV<img className='png-header1' src="images/documento.png" alt="" /></button></a>
					</div>
					<div className='scroll'>
						<section className='header-text'>¡Hola! Mi nombre es <a className='olivo href'>Rodrigo Gutiérrez Pacheco</a> y soy un apasionado desarrollador web front-end junior. Mi habilidad principal es el desarrollo con HTML, CSS, JavaScript y React.js, además de tener conocimientos en diversas librerías para estilos de CSS.

							Soy una persona proactiva, creativa y altamente motivada. Me encanta trabajar en equipo y aprender cosas nuevas, siempre estoy buscando maneras de mejorar y crecer profesionalmente. Mi mayor satisfacción es ver los proyectos en los que trabajo cobrar vida y lograr los objetivos que se han propuesto.

							Me considero un desarrollador detallista y apasionado por las nuevas tecnologías, lo que me permite estar al día en las últimas tendencias y novedades en el mundo del desarrollo web. Además, tengo una gran capacidad de adaptación y resolución de problemas, lo que me permite enfrentar nuevos desafíos con entusiasmo y confianza.</section>
					</div>
				</div>
			</header>
			<div className="header">
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
			</div>

			{/* Certificaciones */}
			{/* <div className='header'>
		<h1 className='olivo start hard'>&lt;Certificaciones-<br /><span className='blanco'>Cursos&gt;</span></h1>
		<div className='wrap scroll2'>
		{certificaciones.map((certificacion)=>{
			return(
				<div key={certificacion.nombre} className='container1'>
				<div className='space'>
					<img className='img-curso' src={certificacion.img} alt="" />
				</div>
				<h1 className='blanco start'>{certificacion.escuela}</h1>
				<h1 className='blanco1 start marginb'>{certificacion.nombre}</h1>
			<button hre className='btnVisitar'><a className='href blanco' href={certificacion.credencial}>Visitar</a></button>
			</div>
			)
		})}
		</div>
		<h1 className='olivo1 start'>&lt;/Certificaciones-<span className='blanco1'>Cursos&gt;</span></h1>
		</div> */}

			{/* Softskills */}
			<div className='header'>
				<h1 className='olivo start hard'>&lt;Soft<span className='blanco'>Skills&gt;</span></h1>
				<div className='wrap1'>
					<h1 className='soft'>&lt;Comunicación/&gt;</h1>
					<h1 className='soft'>&lt;Liderazgo/&gt;</h1>
					<h1 className='soft'>&lt;Trabajo en equipo/&gt;</h1>
					<h1 className='soft'>&lt;Creatividad/&gt;</h1>
					<h1 className='soft'>&lt;Adaptabilidad/&gt;</h1>
					<h1 className='soft'>&lt;Resolución de problemas/&gt;</h1>
					<h1 className='soft'>&lt;Autodisciplina/&gt;</h1>
					<h1 className='soft'>&lt;Autodidacta/&gt;</h1>
					<h1 className='soft'>&lt;Pensamiento Lógico/&gt;</h1>
					<h1 className='soft'>&lt;Comprensión/&gt;</h1>
					<h1 className='soft'>&lt;Pensamiento Critico/&gt;</h1>
				</div>
				<h1 className='olivo1 start'>&lt;/Soft<span className='blanco1'>Skills&gt;</span></h1>
			</div>

			{/* Proyectos */}
			<div className="header" id="proyectos">
				<h1 className='olivo start hard'>&lt;Proye<span className='blanco'>ctos&gt;</span></h1>
				<div className='scroll-container'>
					<div className='wrap scroll2'>
						{proyectos.map((proyecto) => {
							return (
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
									<button onClick={() => { visitarProyecto(proyecto.href) }} className='btnVisitar'><a className='href blanco'>Visitar</a></button>
								</div>
							)
						})}
					</div>
				</div>
				<h1 className='olivo1 start'>&lt;/Proye<span className='blanco1'>ctos&gt;</span></h1>
			</div>


			{/* Contacto */}
			<contacto id='contacto' className="header">
				<h1 className='olivo start hard'>&lt;Re<span className='blanco'>des&gt;</span></h1>
				<div className='wrap'>
					<div className='flex container2'>
						<a href='https://www.linkedin.com/in/rodrigogutierrezpacheco/' className='blanco start hard1 href'>&lt;LinkedIn/&gt;</a>
						<a href="https://www.linkedin.com/in/rodrigogutierrezpacheco/"><img className='png2' src="images/linkedin.png" alt="" /></a>
					</div>
					<div className='flex container2'>
						<a href='https://github.com/RodrigoGutierrezPacheco' className='blanco start hard1 href'>&lt;Github/&gt;</a>
						<a href="https://github.com/RodrigoGutierrezPacheco"><img className='png2' src="images/github.png" alt="" /></a>
					</div>
					<div className='flex container2'>
						<a href="mailto:rodrigogutierrezpacheco@gmail.com?subject=Cotizaciones&body=¡Hola!%20me%20gustaria%20una%20cotizacion%20para%20una%20pagina%20web" className='href'><h1 className='blanco start hard1 href'>&lt;Gmail/&gt;</h1></a>
						<a href="mailto:rodrigogutierrezpacheco@gmail.com?subject=Cotizaciones&body=¡Hola!%20me%20gustaria%20una%20cotizacion%20para%20una%20pagina%20web"><img className='png2' src="images/gmail.png" alt="" /></a>
					</div>
					<div className='flex container2'>
						<a href='https://api.whatsapp.com/send?phone=525638686467' className='blanco start hard1 href'>&lt;Whatsapp/&gt;</a>
						<a href="https://api.whatsapp.com/send?phone=525638686467"><img className='png2' src="images/whatsapp.png" alt="" /></a>
					</div>
				</div>
				<h1 className='olivo1 start'>&lt;/Re<span className='blanco1'>des&gt;</span></h1>
			</contacto>

			{/* Cotizaciones */}
			<cotizacion id="cotizaciones" className="header">
				<h1 className='olivo start hard'>&lt;Cont<span className='blanco'>acto&gt;</span></h1>
				<div className='container3'>
					<form className='cotizaciones' ref={form} onSubmit={sendEmail}>
						<div className='flex2'>
							<label className='blanco text'>Nombre:</label>
							<input required placeholder='Ingresa tu Nombre completo' className='input' type="text" name="user_name" />
						</div>
						<div className='flex2'>
							<label className='blanco text'>Correo Electrónico:</label>
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
						<button className='btn-header margint' type='submit'>{loading ? <div className='loader' /> : "Enviar"}</button>
					</form>
				</div>
				<h1 className='olivo1 start'>&lt;/Cont<span className='blanco1'>acto&gt;</span></h1>
			</cotizacion>


			<hr className='footer' />
			<div className='flex1'>
				<h1 className='blanco1'>2024©</h1>
				<a className='href' href="#inicio"><h1 className='blanco1'>Volver Arriba</h1></a>
			</div>
		</div>
	)
}

export default HomePage