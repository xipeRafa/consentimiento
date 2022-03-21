import { Button, Form, Modal, Alert } from 'react-bootstrap';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const RegisterComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

 /*  const nameRef = useRef(); */
  const emailRef = useRef();
  const passwordRef = useRef();
  const cmfPasswordRef = useRef();


  const { register } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  
  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordRef.current.value !== cmfPasswordRef.current.value) {
      return setError('Passwords does not match');
    } 

    try {
      await register( emailRef.current.value + '@gmail.com', passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div onClick={openForm} className="btn btn-outline-success mx-2">
        Ver Consentimiento
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
         {/*  <Modal.Header>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" required ref={emailRef} />
            </Form.Group>
             <Form.Group className="d-none">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} value='123456' />
            </Form.Group>
            <Form.Group className="d-none">
              <Form.Label>Confirmar Password</Form.Label>
              <Form.Control type="password" required ref={cmfPasswordRef} value='123456' />
            </Form.Group> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Leer Consentimiento
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
