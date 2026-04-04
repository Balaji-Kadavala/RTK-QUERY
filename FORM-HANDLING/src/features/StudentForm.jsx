import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
function StudentForm() {
    const studentForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            age: "",
            gender: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .min(3, "Name must be atleast 3 characters")
                .matches(/^[a-zA-Z]+$/, "Name should contain only alphabets"),
            email: Yup.string()
                .required("Email is required")
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
            age: Yup.number()
                .test((val, ctx) => {
                    if ((studentForm.values.gender === "m" && studentForm.values.age >= 18) || (studentForm.values.gender === "f" && studentForm.values.age >= 21))
                        return true;
                    else if(studentForm.values.age==="")
                        return ctx.createError({message:"Please enter valid age!"})
                    else if (studentForm.values.gender === "m" && studentForm.values.age < 18)
                        return ctx.createError({ message: "Wait you haven't turned 18 yet!!" })
                    else if (studentForm.values.gender === "f" && studentForm.values.age < 21)
                        return ctx.createError({ message: "Wait you still under 21! Not allowed!!" })    
                })
        }),
        onSubmit: (values) => {
            console.log(values);
            alert("Data submitted!")
        }
    });
    return (
        <div>
            <h1>Student Form</h1>
            <form onSubmit={studentForm.handleSubmit}>
                <span>{JSON.stringify(studentForm)}</span>
                <div className="input-group"><input type="text" placeholder='Name' {...studentForm.getFieldProps("name")} className={studentForm.touched.name && !studentForm.errors.name ? 'green-input' : 'red-input'}/>{studentForm.touched.name && !studentForm.errors.name ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-x-circle-fill"></i>}</div><br />
                {(studentForm.touched.name && studentForm.errors.name) ?  (<><b className='red-msg'>{studentForm.errors.name}</b><br/></>):(studentForm.touched.name && !studentForm.errors.name) && (<><b className='green-msg'>Name is Valid</b><br/></>)}
                <div className="input-group"><input type="email" placeholder='Email'  {...studentForm.getFieldProps("email")} className={studentForm.touched.email && !studentForm.errors.email ? 'green-input' : 'red-input'}/>{studentForm.touched.email && !studentForm.errors.email ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-x-circle-fill"></i>}</div><br />
                {(studentForm.touched.email && studentForm.errors.email) ? (<><b className='red-msg'>{studentForm.errors.email}</b><br/></>):(studentForm.touched.email && !studentForm.errors.email) && (<><b className='green-msg'>Email is Valid</b><br/></>)}
                <div className="input-group"><input type="number" placeholder='Age'  {...studentForm.getFieldProps("age")} className={studentForm.touched.age && !studentForm.errors.age ? 'green-input' : 'red-input'}/>{studentForm.touched.age && !studentForm.errors.age ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-x-circle-fill"></i>}</div><br />
                {(studentForm.touched.age && studentForm.errors.age) ?  (<><b className='red-msg'>{studentForm.errors.age}</b><br/></>):(studentForm.touched.age && !studentForm.errors.age) && (<><b className='green-msg'>Age is Valid</b><br/></>)}
                <input type="radio" name="gender" {...studentForm.getFieldProps("gender")} value="m" /><label>Male</label>
                <input type="radio" name="gender"  {...studentForm.getFieldProps("gender")} value="f" /><label>Female</label><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentForm
