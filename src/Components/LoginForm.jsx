import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, Stack, Button, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { apiLoginClasses } from '../Api/apiLoginClasses'; 
import LoginPic from '../Assets/LoginPic.jpg';
import { setToken } from '../Slice/loginSlice';
import '../Components/Style/Login.css';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  username: yup.string().min(4, "UserName must be at least 4 characters long").required("Enter Username is obligatory"),
  password: yup.string().min(4,"Password must be at least 4 characters long").max(10, "Password must be a maximum of 10 characters").matches(/[a-z]/).matches(/[A-Z]/).matches(/\d/).required("Enter password is obligatory"),
  email: yup.string().email("The email field is invalid").required("Enter email is obligatory"),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const[action , setAction] = useState("Login")
  const onFormSubmit = async(data) => {
    console.log("the form is submited");
    console.log(data);
    try {
      const token = await apiLoginClasses({ username: data.username, password: data.password  })
      if(token){
        console.log(token);
        dispatch(setToken(token))
        navigate('/');
      }
     
      
      
    } catch (error) {
      console.error( error);
      
    }
   
  };

  return (
    <div className='testdiv'>
      <div className='right'>
        <img className='piclog' src={LoginPic} alt="Login pic not found" />
      </div>
      <div className='left'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h1 className='hf'>Welcome!</h1>
          <span className='hf'>Please, Login to continue</span>
          <div className="underline"></div>
          <div className='form-container'>
            <FormControl sx={{ m: 1, width: '25ch', display: "block", margin: "auto", marginTop: "20px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type="text"
                {...register("username")}
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                label="Username"
              />
            </FormControl>
            {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                {...register("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
            <FormControl sx={{ m: 1, width: '25ch', display: "block", margin: "auto" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="text"
                {...register("email")}
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                label="Email"
              />
            </FormControl>
            {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
          </div>
          <Stack style={{display: "flex", justifyContent: "center", marginTop: "28px", fontWeight: "25px"}} spacing={2} direction="row">
            <FormControlLabel control={<Checkbox color='primary' />} label="Remember me" />
            <p style={{marginTop: "15px", cursor: "pointer"}}>Forgot Password?</p>
          </Stack>
          <Stack style={{alignItems: "center", display: "flex", justifyContent: "center"}} spacing={2} direction="row">
            <Button type="submit" className="submit" variant="contained" >Login</Button>
            <Button type="button" className="submit" onClick={() => {setAction("Sign Up")}} variant="contained">Sign Up</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
