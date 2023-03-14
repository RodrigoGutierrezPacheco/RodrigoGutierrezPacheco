import "./HomePage.css";
import { motion,useTime,useTransform } from 'framer-motion';

function HomePage() {
	const time = useTime()
	const rotate = useTransform(
		time,
		[0,4000],
		[0,360],
		{clamp: false}
	)
  return (
    <div className="body">
			<img className="avatar" src="images/guiño.gif" alt="" />
      <h1 className="title">Hola, mi nombre es <h1 className="a">Rodrigo.</h1></h1>
			<div className="flex2">
				<motion.h2 whileTap={{scale:1.2}} className="texto1 marginl marginr">Acerca de mi</motion.h2>
				<motion.h2 whileTap={{scale:1.2}} className="texto1 marginr marginl">Contacto</motion.h2>
				<motion.h2 whileTap={{scale:1.2}} className="texto1 marginl marginr">Proyectos</motion.h2>
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
