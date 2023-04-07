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
			<div className='header1'>
				<div className='width'>
					<h1 className='header-text-2 text-shadow'>Acerca de mi :</h1>
					<button className='btn-header'>CV <img className='png-header1' src="images/documento.png" alt="" /></button>
				</div>
				<div className='scroll'>
					<section className='header-text'>Soy un desarrollador fronten Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, et! Dolores quod fuga fugit voluptatum, saepe impedit, nam magni corrupti est nihil deserunt nulla, rem exercitationem earum! Atque, explicabo voluptatem!</section>
				</div>
			</div>
		</header>
		</div>
	)
}

export default HomePage