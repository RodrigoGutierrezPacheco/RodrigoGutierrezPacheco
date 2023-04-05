import React from 'react'
import { Modal, Button } from 'react-bootstrap';


const Modal2 = () => {
	return (
		<div>
					{/* Modal grande */}
					<Modal size="lg">
						<Modal.Header closeButton>
							<Modal.Title>Modal grande</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Este es un modal de tamaño grande.
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary">Cerrar</Button>
							<Button variant="primary">Guardar cambios</Button>
						</Modal.Footer>
					</Modal>
		
					{/* Modal pequeño */}
					<Modal size="sm">
						<Modal.Header closeButton>
							<Modal.Title>Modal pequeño</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Este es un modal de tamaño pequeño.
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary">Cerrar</Button>
							<Button variant="primary">Guardar cambios</Button>
						</Modal.Footer>
					</Modal>
		
					{/* Modal centrado */}
					<Modal centered>
						<Modal.Header closeButton>
							<Modal.Title>Modal centrado</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Este es un modal centrado en la pantalla.
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary">Cerrar</Button>
							<Button variant="primary">Guardar cambios</Button>
						</Modal.Footer>
					</Modal>
					<h1>Hola</h1>
				</div>
		
	)
}

export default Modal2