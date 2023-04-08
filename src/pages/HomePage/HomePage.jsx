import React from 'react'
import './HomePage.css'

const HomePage = () => {
	return (
		<div className='body'>
		<nav className='nav'>
			<h1 className='nav-text'>Acerca de mi</h1>
			<h1 className='nav-text'>Contacto</h1>
			<h1 className='nav-text'>Proyectos</h1>
		</nav>
		<header className='header'>
			<div className='header1'>
			<div>
				<h1 className='header-text'>Hola, mi nombre es <h1 className='header-text-1 text-shadow'>Rodrigo.</h1></h1>
				<div className='header-png'>
					<img className='png-header' src="images/linkedin.png" alt="" />
					<img className='png-header' src="images/github.png" alt="" />
					<img className='png-header' src="images/gmail.png" alt="" />
					<img className='png-header' src="images/whatsapp.png" alt="" />
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
			<div>
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
		</skills>
		<proyectos className="header">
		<h1 className='olivo start hard'>&lt;Proye<span className='blanco'>ctos&gt;</span></h1>
			<div className='container1'>
				<div className='space'>
					<img className='png1' src="images/beautyLogo.png" alt="" />
					<img className='png1' src="images/github.png" alt="" />
				</div>
				<h1 className='blanco start line-height'>Beautyy-Mx Ecommerce</h1>
				<h1 className='blanco1 start marginb'>Ecommerce para la venta de maquillaje, cuidado de la piel y accesorios.</h1>
			<div className='row'>
				<img className='png' src="images/html.png" alt="" />
				<img className='png' src="images/css.png" alt="" />
				<img className='png' src="images/js.png" alt="" />
				<img className='png' src="images/react.png" alt="" />
				<img className='png' src="images/git.png" alt="" />
				<img className='png' src="images/bootstrap.png" alt="" />
				<img className='png' src="images/node.png" alt="" />
				<img className='png' src="images/npm.png" alt="" />
			</div>
			<button className='btnVisitar'>Visitar</button>
			</div>
			<div className='container1'>
				<div className='space'>
					<img className='png1' src="images/abeja.png" alt="" />
					<img className='png1' src="images/github.png" alt="" />
				</div>
				<h1 className='blanco start line-height'>Agropecuaria-La Isla Ecommerce</h1>
				<h1 className='blanco1 start marginb'>Ecommerce para la venta de miel y productos naturales.</h1>
			<div className='row'>
				<img className='png' src="images/html.png" alt="" />
				<img className='png' src="images/css.png" alt="" />
				<img className='png' src="images/js.png" alt="" />
				<img className='png' src="images/react.png" alt="" />
				<img className='png' src="images/git.png" alt="" />
				<img className='png' src="images/bootstrap.png" alt="" />
				<img className='png' src="images/node.png" alt="" />
				<img className='png' src="images/npm.png" alt="" />
			</div>
			<button className='btnVisitar'>Visitar</button>
			</div>
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
		</div>
	)
}

export default HomePage