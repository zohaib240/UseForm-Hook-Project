import React from 'react'
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data);
    alert('Login Successfully!');
    navigate ('/home')

  };

  return (
    <>
        <h1 className='text-center m-3'>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
   <div className="d-flex justify-content-center">
      <Form.Control
        type="email" placeholder='Enter Email'
        aria-describedby="passwordHelpBlock" className='w-50 m-4'
        {...register("email", { required: true })}/>
        </div>
        <div className="d-flex justify-content-center">
      <Form.Control
        type="password" placeholder='Enter Password'
        aria-describedby="passwordHelpBlock" className='w-50 m-'
        {...register("password", { required: true })}/>
        </div>
        <div className='d-flex justify-content-center m-5' >
        <Button type='submit' variant="primary">Submit</Button>{' '}
        </div>
        
        </form>
    </>
  )
}

export default Login