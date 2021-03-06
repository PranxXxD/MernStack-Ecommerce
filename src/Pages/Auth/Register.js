import React,{useState} from 'react'
import {auth} from '../../firebase';
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
 const [email, setEmail] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL);
        const config = {
            // url : process.env.REACT_APP_REGISTER_REDIRECT_URL,
            url : "http://localhost:3000/register/complete",
            handleCodeInApp : true,
        }

        await auth.sendSignInLinkToEmail(email,config);
        toast.success(`Email is sent to ${email}.Click the link to complete your registration.`);

        //save user email to local storage
        window.localStorage.setItem('emailForRegistration',email)

        //clear state
        setEmail('');
    }

   const registerForm = ()=>(
       <form onSubmit={handleSubmit}>
        <input type="email" className="form-control" value={email} 
        onChange={(e)=>setEmail(e.target.value)}
            autoFocus
        />
        <button type="submit" className=" my-3 btn btn-success">Register</button>
       </form>
   );
    return (
        <div className="container p-5">
        <div className="row">
        <div className="col-md-6  offset-md-3">
        <h4>Register</h4>
        <ToastContainer/>   
        {registerForm()}
        </div>
        </div>
        </div>
    )
}

export default Register
