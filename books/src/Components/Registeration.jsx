import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Registeration() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [submit, setSubmit] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    if (isChecked) {
      setFormData(data); 
      setSubmit(true);
      setTimeout(() => {
        setSubmit(false);
        window.location.href = "/";
      }, 2000);
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div>
      <h1 className='md:text-3xl text-2xl text-red-500 font-bold font-serif mt-20 md:m-2 text-center'>
        {!submit ? <span >Register to Kalvium Now</span> : <span className='text-green-500 '>Registration Successfully done !</span>}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-3/4 md:w-fit m-auto px-6 py-10 bg-gray-300 my-10 shadow-lg rounded-lg border'>
        <div className='md:block flex flex-col'>
          <input type="text"
            placeholder='Enter your name'
            className='rounded border-2 border-gray-400 md:text-base block md:w-[340px] mb-3 md:h-11 h-5 p-3.5 mt-2 text-[12px]'
            {...register("name", {
              required: "Your name is required",
              minLength: { value: 3, message: "Name cannot be less than 3 characters." },
              maxLength: { value: 30, message: "Name should not be more than 30 characters" }
            })}
          />
          <div className='text-red-500'>{errors.name?.message}</div>

          <input type="email"
            required
            placeholder='Enter your Mail'
            className='rounded border-2 border-gray-400 md:text-base block md:w-[340px] mb-3 md:h-11 h-5 p-3.5 text-[12px]'
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
              }
            })}
          />
          <div className='text-red-500'>{errors.email?.message}</div>

          <input type="password"
            placeholder='Enter your password'
            className='rounded border-2 border-gray-400 md:text-base block md:w-[340px] mb-3 md:h-11 h-5 p-3.5 text-[12px]'
            {...register("password", {
              required: "Password must be entered",
              minLength: {
                value: 10,
                message: "Password should be at least 10 characters long",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: "Password must contain atleast one special character"
              }
            })}
          />
          <div className='text-red-500'>{errors.password?.message}</div>

          <input type="password"
            placeholder='Re-Enter your Password'
            className='rounded border-2 border-gray-400 md:text-base block md:w-[340px] mb-3 md:h-11 h-5 p-3.5 text-[12px]'
            {...register("repeated-pass", {
              required: "Re-entering your password is required",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
          <div className='text-red-500'>{errors['repeated-pass']?.message}</div>

          <div className='flex flex-col items-center justify-center'>
            <div className='m-2'>
              <input type="checkbox" id="check" required onChange={(e) => setIsChecked(e.target.checked)} />
              <label htmlFor="check" className='md:text-base text-xs'> I agree to all the given terms and conditions.</label>
            </div>

            <button type='submit' className='bg-blue-500 rounded text-white mt-4 font-semibold md:text-base block md:w-[340px] flex justify-center items-center h-5 mb-3 md:h-10 p-3.5 text-[12px]'
              >Register</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Registeration