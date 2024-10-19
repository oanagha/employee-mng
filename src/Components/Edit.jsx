import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { updateEmployeeApi } from '../Services/allApis';
function Edit({ data }) {

    const [show, setShow] = useState(false);

    const [edit, setEdit] = useState(data)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


    const handleUpdate = async () => {
        const res = await updateEmployeeApi(edit._id, edit)
        console.log(res)
        if (res.status == 200) {
            toast.success("Employee updated!")
            handleClose()
        }
    }
    return (
        <>
            <button className="btn" onClick={handleShow}><i className="fa-solid fa-pen-to-square fs-4" style={{ color: "#961d70", }} />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="FirstName" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="name" value={edit?.firstname} onChange={(e) => setEdit({ ...edit, firstname: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="LastName" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="name" value={edit?.lastname} onChange={(e) => setEdit({ ...edit, lastname: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Age" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="age" value={edit?.age} onChange={(e) => setEdit({ ...edit, age: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Qualification" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="qualification" value={edit?.qualification} onChange={(e) => setEdit({ ...edit, qualification: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="email" value={edit?.email} onChange={(e) => setEdit({ ...edit, email: e.target.value })} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>UPDATE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit