import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./login.css";
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../redux/actions/authActions';
import { getTickets } from '../../redux/actions/ticketAction';


function Login() {

  const initialValues = { email: "", password: ""};
  const [users, setUsers] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name] : e.target.value})
  };

  const storeToken = useSelector(state => state?.user?.user?.data?.token)
  const token = storeToken;
  console.log(token, "tokenlogin")

  if(token !== undefined || token!== null) {
    localStorage.setItem("token", token);
  }

  const userToken = localStorage.getItem("token")

  const onSubmit = (e) => {
    e.preventDefault();
    setUsers(initialValues)
    dispatch(login(users))
    dispatch(getTickets(userToken))    
  };

  const userDetail = useSelector(state => state.user)
  const { isAuthenticated } = userDetail;
  const findErrors = useSelector(state => state.user)
  

  const { email, password} = users;

  const noEmail = () => {if(email === "" && findErrors?.error?.data?.msg === undefined){    
    return <><span className='validation'>Please Enter Your Email</span></>;
  }};

  
  const noPassword = () => {if(password === "" && findErrors?.error?.data?.msg === undefined){    
    return <><span className='validation'>Please Enter Your Password</span></>;
  }};

  if(isAuthenticated === true){
    return <Navigate to="/tickets"/>
  }


  return (
    <div className='mainContent' onSubmit={onSubmit}>
      <h1>Generate Your Ticket</h1>
      <form className='form-login'> 
        <div className='form-inner'>
          <h2>Login</h2>
          <br/>
         {findErrors && <><span style={{"color": "red"}}>{findErrors?.error?.data?.msg}</span></>}
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type="email" name="email" id="email" value={users.email} onChange={handleChange }/>
            {noEmail()}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id="password" value={users.password} onChange={handleChange}/>
            {noPassword()}
          </div> 
            <input className='login' type="submit" value="LOGIN" />
            <p> or </p>    
            <Link to="/signup"><input className='signup' type="submit" value="SIGNUP" /></Link>    
        </div>
      </form>
    </div>
  )
}

export default Login;