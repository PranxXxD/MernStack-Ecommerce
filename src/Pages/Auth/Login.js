import React,{useState} from 'react'
import {auth} from '../../firebase';
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Button} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Login = () => {
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const [loading, setLoading] = useState(false);
 let dispatch = useDispatch();
 let history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
    //    console.table(email,password);
        setLoading(true)
    try {
        const result = await auth.signInWithEmailAndPassword(email,password);
        // console.log(result);
        const {user} = result
        const idTokenResult = await user.auth.getIdTokenResult();
        dispatch({
            type: 'LOGGED_IN_USER',
            payload : {
               email : user.email,
               token : idTokenResult.token,
            },
          });
        history.push("/");    
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        setLoading(false)
    }
    };

   const LoginForm = ()=>(
       <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="email" className="form-control" value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
            autoFocus
        />
        </div>
        <div className="form-group my-2">
        <input type="password" className="form-control" value={[password]} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password"
        />
        </div>
        <Button onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined/>}
        size="large"
        // disabled={!email || password.length < 6}
        disabled={ !email || password.lenght < 6}
        >Login with Email/Password</Button>
       </form>
   );
    return (
        <div className="container p-5">
        <div className="row">
        <div className="col-md-6  offset-md-3">
        <h4>Login</h4>
        <ToastContainer/>   
        {LoginForm()}
        </div>
        </div>
        </div>
    )
}

export default Login
