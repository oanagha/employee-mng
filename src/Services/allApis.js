import axios from "axios";

const baseUrl="https://employee-server-dhea.onrender.com"
export const addEmployeeApi=async(data)=>{
    return await axios.post(`${baseUrl}/addemp`,data) 
}
export const getEmployeelistApi=async()=>{
    return await axios.get(`${baseUrl}/getemp`)
}
export const deleteEmployeeApi=async(id)=>{
    return await axios.delete(`${baseUrl}/deleteemp/${id}`)
}
export const updateEmployeeApi=async(id,data)=>{
    return await axios.put(`${baseUrl}/updateemp/${id}`,data)
}