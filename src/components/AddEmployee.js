import { error } from 'logrocket';
import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {

        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });

    }

    const saveEmployee = (e) => {

        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        onChange={(e) => handleChange(e)}
                        value={employee.firstName} 
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                        value={employee.lastName}  
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input 
                        type="email"
                        name="emailId"
                        onChange={(e) => handleChange(e)}
                        value={employee.emailId}  
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                   <button
                   onClick={saveEmployee} 
                    className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">Save</button>
                   <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
