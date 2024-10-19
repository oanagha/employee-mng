import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
      <div className='container-fluid bg-white text-primary d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <Row className='p-4  align-items-center'>
          <Col sm={12} md={3} className='mb-4'>
            <img src=" https://cdn3d.iconscout.com/3d/premium/thumb/staff-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--employee-human-resource-team-corporate-business-pack-icons-4755478.png?f=webp"
              alt="can't load" className='img-fluid rounded' />
          </Col>
          <Col sm={12} md={9} className='d-flex justify-content-center flex-column'>
            <h3 id='h1' className='text-dark text-center mb-4 '>Employee Management</h3>
            <p id='p1' style={{ textAlign: 'justify' }} className='text-dark'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit modi blanditiis nobis ad perferendis autem dolor, voluptatum molestiae, omnis sint reprehenderit itaque earum excepturi eligendi.
              Ullam minus minima aut . Esse suscipit modi blanditiis nobis ad perferendis autem dolor, voluptatum molestiae!
            </p>
            <div className='d-grid'>
              <Link className='btn btn-dark' to={'/landing'}>Let's Start</Link>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Home