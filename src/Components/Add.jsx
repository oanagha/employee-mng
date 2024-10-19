import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addEmployeeApi } from '../Services/allApis';
function Add() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [employee, setEmployee] = useState({
        firstname: "", lastname: "", age: "", qualification: "", email: ""
    })
    const handleaddEmployee = async () => {
        console.log(employee);
        const { firstname, lastname, age, qualification, email } = employee
        if (!firstname || !lastname || !age || !qualification || !email) {
            toast.warning("Enter valid inputs")
        }
        else {
            const res = await addEmployeeApi(employee)
            console.log(res);
            if (res.status == 200) {
                toast.success('Employee Addedd')
                handleClose()
                setEmployee({
                    firstname: "", lastname: "", age: "", qualification: "", email: ""
                })
            } else {
                toast.error("Adding Failed")
            }
        }
    }

    return (
        <>
            <button className='btn btn-danger text-light px-5 p-3 my-3' onClick={handleShow} >Add{' '} <i className="fa-solid fa-employee-plus" /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employees</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="floatingInput" label="FirstName" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="name" onChange={(e) => { setEmployee({ ...employee, firstname: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="LastName" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="name" onChange={(e) => { setEmployee({ ...employee, lastname: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Age" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="age" onChange={(e) => { setEmployee({ ...employee, age: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Qualification" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="qualification" onChange={(e) => { setEmployee({ ...employee, qualification: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="email" onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} />
                    </FloatingLabel>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleaddEmployee}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add