import React from 'react'
import Add from '../Components/Add'
import Employee from '../Components/Employee'
function Landing() {
  return (
    <>
      <div className="container-fluid p-2 ">
        <Add />
        <div className="d-flex flex-wrap bg-dark border-dark border border-1 p-md-5 p-5 border shadow">
          <Employee />
        </div>
      </div>
    </>
  )
}

export default Landing