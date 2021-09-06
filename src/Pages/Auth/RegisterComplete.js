import React,{useEffect, useState} from 'react'
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../../firebase';

const RegisterComplete = ({history}) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('')

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"));
        console.log(window.location.href);
    }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email && !password) {
            toast.error("Email and Password is required");
            return
        }

        if (password.length < 6) {
            toast.error("Password must be 6 characters long");
            return            
        }

        try {
            const result = await auth.signInWithEmailLink(email, window.location.href);
            if (result.user.emailVerified) {
                // remove user from local storage
                window.localStorage.removeItem('emailForRegistration');
                // get user Id tooken
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                console.log('user',user,'tokenId',idTokenResult );
                // redux store

                // redirect
                history.push("/");
            }

        } catch (error) {
            
        }
        
    }

   const CompleteRegistrationForm = ()=>(
       <form onSubmit={handleSubmit}>
        <input type="email" className="form-control" value={email} disabled/>
        <input type="password" className="form-control my-2" value={password} onChange={(e)=>setPassword(e.target.value)}
        autoFocus
        placeholder="Enter your password" />

        <button type="submit" className=" my-3 btn btn-success">Complete Registration</button>
       </form>
   );
    return (
        <div className="container p-5">
        <div className="row">
        <div className="col-md-6  offset-md-3">
        <h4>Register</h4>
        <ToastContainer/>   
        {CompleteRegistrationForm()}
        </div>
        </div>
        </div>
    )
}

export default RegisterComplete
