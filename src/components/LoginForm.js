import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] =  useState(
        {
            email:"", password:""
        }
    )
const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event)
    {
        setFormData((prevData) => 
        (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event)
    {
event.preventDefault();
setIsLoggedIn(true);
toast.success("Logged In successfully")
navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler}>
    <label>
        <p>Email<sup>*</sup>  </p>
        <input
        required
         type="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter Email id'
        name='email'
         />
    </label>
    <label>
        <p>Password<sup>*</sup>  </p>
        <input
        required
         type={showPassword ? ("text") : ("password")}
        value={formData.password}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
         />
         <span onClick={()=>
         setShowPassword((prev)=> !prev)
         }>
            {
                showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
            }
         </span>
         <Link to="#">
            <p>Forgot Password</p>
         </Link>
    </label>
    <button >Sign in</button>
      </form>
  )
}

export default LoginForm
