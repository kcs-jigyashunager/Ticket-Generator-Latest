import React, { useState } from 'react';
import "./signup.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/actions/authActions';


function Signup () {

  const initialValues = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialValues);
  const dispatch = useDispatch();

  const {name, email, password} = user;

  const noName = () => {if(name === "" && findErrors?.error?.data?.msg === undefined){    
    return <><span className='validation'>Please Enter Your Name</span></>;
  }};

  
  const noEmail = () => {if(email === "" && findErrors?.error?.data?.msg === undefined){    
    return <><span className='validation'>Please Enter Your Email</span></>;
  }};

  
  const noPassword = () => {if(password === "" && findErrors?.error?.data?.msg === undefined){    
    return <><span className='validation'>Please Enter Your Password</span></>;
  }};

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
    setUser(initialValues)
  };


  const userDetail = useSelector(state => state.signup)
  const { isAuthenticated } = userDetail;
  const findErrors = useSelector(state => state.signup)

  const message = () => {if(isAuthenticated === true){    
    
    return <div> <p className='para'> User account created. Please click to <Link to="/login">Login</Link></p></div>;

  }};

  return (
    <div className='mainContent' onSubmit={onSubmit}>
      <h1>Generate Your Ticket</h1>
      <form className='form-login'> 
        <div className='form-inner'>
          <h2>Register</h2>
          {message()}
          <br/>
         {findErrors?.error?.data && <><span style={{"color": "red"}}>{findErrors?.error?.data?.msg}</span></>}
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type="name" name="name" id="name" value={user.name} onChange={handleChange }/>
            {noName()}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type="email" name="email" id="email" value={user.email} onChange={handleChange }/>
            {noEmail()}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id="password" value={user.password} onChange={handleChange }/>
            {noPassword()}
          </div> 
            <input className='signup' type="submit" value="SIGNUP" />      
            <p> or </p>            
            <Link to="/login"><input className='login' type="submit" value="LOGIN"/></Link>             
        </div>
      </form>
    </div>
  )
}

export default Signup; 