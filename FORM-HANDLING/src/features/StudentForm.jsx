import { useFormik } from 'formik'
import React from 'react'

function StudentForm() {
    const studentForm= useFormik({
        initialValues:{
            name:"",
            email:"",
            age:"",
            gender:""
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <div>
      <h1>Student Form</h1>
      <form>
        <input type="text" placeholder='Name' {...studentForm.getFieldProps("name")}/><br/>
        <input type="email" placeholder='Email'  {...studentForm.getFieldProps("email")}/><br/>
        <input type="number" placeholder='Age'  {...studentForm.getFieldProps("age")}/><br/>
        <input type="radio" name="gender" value="m" id="male"  {...studentForm.getFieldProps("gender")}/><label for="male">Male</label>
        <input type="radio" name="gender" value="f" id="female"  {...studentForm.getFieldProps("gender")}/><label for="female">Female</label><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
