import React,{useState}from 'react'
import {Menu} from "antd"
import { AppstoreOutlined, SettingOutlined,UserAddOutlined,UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
const { SubMenu,Item } = Menu;

const Header =()=>{
  
 const [current, setCurrent] = useState('Home')
 const handleClick =(e)=>{
     //
     setCurrent(e.key);
 }
 
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
    </SubMenu>
  </Menu>

);

}

export default Header;