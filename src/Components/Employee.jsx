import React, { useEffect, useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { toast } from 'react-toastify';
import { getEmployeelistApi, deleteEmployeeApi } from '../Services/allApis';
function Employee() {
  const [ employeeList, setemployeeList ] = useState([])

  useEffect(() => {
    getEmployees()
  }, [employeeList])

  const getEmployees = async () => {

    const res = await getEmployeelistApi()
    console.log(res);
    if (res.status == 200) {
      setemployeeList(res.data)
    } else {
      console.log(res);
    }
  }

  const handledelete = async (id) => {

    const res = await deleteEmployeeApi(id)
    if (res.status == 200) {
      toast.success("Employee Deleted")
      getEmployees()
    } else {
      toast.warning("Something Went Wrong")
    }
  }
  return (
    <>
      {
        employeeList.length > 0 ?
          <>
            {
              employeeList.map(item => (
                <Card style={{ width: '18rem' }} className='m-2'>
                  <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" className='img-fluid mt-3' />

                  <Card.Body>
                    <Card.Title className='text-center d-flex justify-content-center '>{item.firstname} {""} {item.lastname}
                    </Card.Title>
                    <Card.Text>
                      <div className='text-center'>
                        <h6>Age: {item.age}</h6>
                        <h6>Qualification: {item.qualification}</h6>
                        <h6>Email: {item.email}</h6>
                      </div>
                      <div className='d-flex justify-content-between mt-3'>
                        <Edit data={item} />
                        <button className='btn py-2 px-3' onClick={() => handledelete(item._id)}><i className="fa-solid fa-trash-can fs-4" style={{ color: "red" }} /></button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            }
          </>
          :
          <h3 className='text-light'>No Employees Listed</h3>
      }
    </>
  )
}
export default Employee