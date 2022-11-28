import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <h1>Bienvenidos</h1>
			<img className="imgPortada" src="images/rgp.jpg" alt="" />
			<h2>Acerca de mi</h2>
			<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugit possimus laboriosam aut assumenda quidem, voluptates et sequi consequatur rerum quae mollitia ea explicabo, accusamus similique. Sed maxime eaque animi!</h4>
			<h1>Estudios</h1>
			<div>
				<h4>Web Development Bootcamp</h4>
				<img src="images/ironHackLogo.png" alt="" />
			</div>
			<div>
				<h4>Certificaciones</h4>
				<div className="flex">
				<p>Web Development Full time Bootcamp in Mexico City</p>
				<img src="images/ironHackLogo.png" alt="" />
				<a href="https://www.credential.net/5d083bae-5297-4abb-88af-553fbbcc5e70">Mostrar Credencial</a>
				<p>CSS and JavaScript Course</p>
				<img src="images/udemyLogo.png" alt="" />
				<a href="https://www.udemy.com/certificate/UC-bcfd708c-3b7a-49fd-830a-91ffbdd3d58a/">Mostrar Credencial</a>
				<p>Build Responsive Real-World Websties with HTML and CSS</p>
				<img src="images/udemyLogo.png" alt="" />
				<a href="https://www.udemy.com/certificate/UC-9487e580-411f-4c07-9ec7-26428c76f8b1/">Mostras Credenciales</a>
				</div>
				<div className="flex">
					<h1>Proyectos</h1>
					<p>Beauty Mx</p>
					<p>App Diseñada para la compra de maquillaje</p>
					<img className="imagen" src="images/beautyLogo.png" alt="" />
					<a href="https://beautyymx.vercel.app/">Visitar</a>
					<p>Keto Challenge</p>
					<p>App diseñada para la venta de retos keto</p>
					<img className="imagen" src="images/ketoLogo.png" alt="" />
					<a href="https://ketochallenge.vercel.app/">Visitar</a>
					<p>Vengeance Wars</p>
					<p>Juego tipo RGP para computadora y celular</p>
					<img src="images/warLogo.jpeg" alt="" />
					<a href="https://rodrigogutierrezpacheco.github.io/WarOfVengeance/">Visitar</a>
				</div>
			</div>
    </div>
  );
}

export default HomePage;
