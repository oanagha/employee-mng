import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>

      <MDBFooter className='text-center mt-4' color='' bgColor='dark' >
        <MDBContainer className='p-4' >
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          <section className=''>
            <form action='' >
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong className='text-light'>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' placeholder='Enter your Email' className='mb-4  ' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

        </MDBContainer>

        <div className='text-center text-dark p-3' style={{ backgroundColor: 'gray' }}>
          © 2020 Copyright:
          <a className='text-dark' href='https://employeemng.com/'>
            employeemng.com
          </a>
        </div>
      </MDBFooter>


    </>
  )
}

export default Footer