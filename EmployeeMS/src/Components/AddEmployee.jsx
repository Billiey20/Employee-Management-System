import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        category_id: '',
        image: ''
    })

    const [category, setCategory] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);

                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))

    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', employee.name);
        formData.append('email', employee.email);
        formData.append('password', employee.password);
        formData.append('address', employee.address);
        formData.append('salary', employee.salary);
        formData.append('image', employee.image);
        formData.append('category_id', employee.category_id);
        axios.post('http://localhost:5000/auth/add_employee', formData)
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/employee')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 rounded w-25 border'>
                <h3 className='text-center'> Add Employee</h3>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label for='inputName' className='form-label'><strong> Name</strong></label>
                        <input type='text' className='form-control rounded-0'
                            id='inputName'
                            placeholder='Enter Your Employee Name'
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
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        >
                        </input>

                    </div>

                    <div className='col-12'>
                        <label for='inputPassword' className='form-label'>
                            <strong> Password</strong></label>
                        <input type='password' className='form-control rounded-0'
                            id='inputPassword'
                            autoComplete='off'
                            placeholder='Enter Your Employee Password'
                            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
                        >
                        </input>


                        <label for='inputSalary' className='form-label'>
                            <strong> Salary</strong></label>
                        <input type='text' className='form-control rounded-0'
                            id='inputSalary'
                            autoComplete='off'
                            placeholder='Enter Your Employee Salary'
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
                        <label className='form-label' for='inputGroupFile01'>
                            <strong> Select Image </strong></label>
                        <input type='file' className='form-control rounded-0'
                            id='inputGroupFile01'
                            name='image'
                            autoComplete='off'
                            onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
                        >
                        </input>

                    </div>
                    <div className='col-12'>
                        <button type="submit" className='btn btn-primary w-100 m-3'>
                            Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee