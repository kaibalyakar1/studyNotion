import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"  
import { useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const[formData,setFormData] =  useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )

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
        if(formData.password != formData.confirmPassword)
        {
            toast.error("You are fucked up")
            return
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        

        navigate("/dashboard");
    }
  return (
<div>
    <div>
        Student
    </div>
    <div>
        Instructor
    </div>

    <form onSubmit={submitHandler}>
    <div>
        <label>
        
            <p>FirstName<sup>*</sup></p>
            <input
            required
             type="text"
             name='firstName'
             onChange={changeHandler} 
                placeholder='Enter First Name'
                value={formData.firstName}
             />
        </label>

        <label>
            <p>Last Name<sup>*</sup></p>
            <input
            required
             type="text"
             name='lastName'
             onChange={changeHandler} 
                placeholder='Enter last Name'
                value={formData.lastName}
             />
        </label>

</div>
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

    <div>
    <label>
        <p>Create Password<sup>*</sup>  </p>
        <input
        required
         type= {showPassword ? ("text") : ("password")}
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
    </label>



    <label>
        <p>Confirm Password<sup>*</sup>  </p>
        <input
        required
         type= {showPassword ? ("text") : ("password")}
        value={formData.confirmPassword}
        onChange={changeHandler}
        placeholder='Confirm Password'
        name='confirmPassword'
         />
           <span onClick={()=>
         setShowPassword((prev)=> !prev)
         }>
            {
                showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
            }
         </span>
    </label>
    </div>
    <button>Create Account</button>
    </form>
</div>
  )
}

export default SignupForm
