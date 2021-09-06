import React,{useState}from 'react'
import {Menu} from "antd"
import { AppstoreOutlined, LogoutOutlined, SettingOutlined,UserAddOutlined,UserOutlined } from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
import firebase from 'firebase';
import {useDispatch} from 'react-redux'

const { SubMenu,Item } = Menu;

const Header =()=>{
  
 const [current, setCurrent] = useState('Home')
 const dispatch = useDispatch();
 const history = useHistory();
 
 const handleClick =(e)=>{
     //
     setCurrent(e.key);
 }

 const logout = ()=>{
     firebase.auth().signOut()
     dispatch({
         type : "LOGOUT",
         payload : null,
     });
     history.push('/login')
 };
 
return(
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    <Item key="Home" icon={<AppstoreOutlined/>}>
    <Link to="/">Home</Link>
    </Item>
    <Item key="Register" icon={<UserAddOutlined/>} className="float-end">
    <Link to="/Register">Register</Link>
    </Item>
    <Item key="Login" icon={<UserOutlined/>} className="float-end">
    <Link to="/Login">Login</Link>

    </Item>
    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item icon={<LogoutOutlined/>} onClick={logout}>Logout</Item>
    </SubMenu>
  </Menu>

);

}

export default Header;