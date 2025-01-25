import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
            name: '',
            email: '',
            salary: '',
            address: '',
            category_id: '',
           
        });

        const [category, setCategory] = useState([]);
        const navigate = useNavigate();

        useEffect(()=>{
            axios.get('http://localhost:5000/auth/category')
            .then(result =>{
                if (result.data.Status){
                    setCategory(result.data.Result);
    
                } else {
                    alert(result.data.Error)
                }
            }).catch(err=> console.log(err))

            axios.get('http://localhost:5000/auth/employee/' + id)
            .then(result => {
                setEmployee({
                    ...employee,
                    name: result.data.Result[0].name,
                    email: result.data.Result[0].email,
                    address: result.data.Result[0].address,
                    salary: result.data.Result[0].salary,
                    category_id: result.data.Result[0].category_id,
                })
            }).catch(err => console.log(err))
    
        }, [])
    const handleSubmit = ((e) =>{
        e.preventDefault();
        axios.put('http://localhost:5000/auth/edit_employee/'+id, employee)
        .then(result =>{
            if (result.data.Status){
                navigate('/dashboard/employee')
            } else{
                alert (result.data.Error)
            }
        }).catch(err => console.log(err))
    })

  return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 rounded w-25 border'>
                <h3 className='text-center'> Edit Employee</h3>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label for='inputName' className='form-label'><strong> Name</strong></label>
                        <input type='text' className='form-control rounded-0'
                            id='inputName'
                            placeholder='Enter Your Employee Name'
                            value={employee.name}
                            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                        >
                        </input>

                    </div>

                    <div className='col-12'>
                        <label for='inputEmail' className='form-label'>
                            <strong> Email</strong></label>
                        <input type='email' className='form-control rounded-0'
                            id='inputEmail'
                            autoComplete='off'
                            placeholder='Enter Your Employee Email'
                            value={employee.email}
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        >
                        </input>

                    </div>

                    <div className='col-12'>
                        <label for='inputSalary' className='form-label'>
                            <strong> Salary</strong></label>
                        <input type='text' className='form-control rounded-0'
                            id='inputSalary'
                            autoComplete='off'
                            placeholder='Enter Your Employee Salary'
                            value={employee.salary}
                            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                        >
                        </input>

                    </div>

                    <div className='col-12'>
                        <label for='inputAddress' className='form-label'>
                            <strong> Address</strong></label>
                        <input type='text' className='form-control rounded-0'
                            id='inputAddress'
                            autoComplete='off'
                            placeholder='0608 6th Street, Sunton'
                            value={employee.address}
                            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                        >
                        </input>

                    </div>

                    <div className='col-12'>
                        <label for='category' className='form-label'>
                            <strong> Category</strong></label>
                        <select name="category" id="category" className='form-select'
                            onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
                        >
                            {category.map((c) => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>

                    </div>
                    <div className='col-12'>
                        <button type="submit" className='btn btn-primary w-100 m-3'>
                            Edit Employee</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditEmployee;