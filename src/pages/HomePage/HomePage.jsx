import "./HomePage.css";
import { motion,useTime,useTransform } from 'framer-motion';
import Swal from "sweetalert2";
import 'animate.css';

function HomePage() {
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
