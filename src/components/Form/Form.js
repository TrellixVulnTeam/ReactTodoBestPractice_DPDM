import React, {useEffect} from "react";
import logo from '../../img/logo.svg'
import { useNavigate } from "react-router-dom";
import "./Form.scss";
function Form({people,setpeople, personDetails, setpersonDetails}) {
  let navigate = useNavigate()
    const onSubmitForm = (e) => {
        e.preventDefault();
        setpeople([ {ID:new Date(), ...personDetails}, ...people])
   
        setpersonDetails({
            username:'',
            email:'',
            password:''
        })
        navigate("/list")
    }
    useEffect(() =>{
      console.log(people);
    },[people])
   

    // useEffect(() =>{
    //     console.log(people)
    // }, [people])
  
  return (
    <div className="form-box">
      <form onSubmit={onSubmitForm}>
        <h1>SIGN UP</h1>
        <div className="icon">
        <img src={logo} alt="logo-svg"/>
      </div>
        <div className="formcontainer">
          <div className="container">
            <label htmlFor="uname">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={personDetails.username}
              onChange={(e) =>{setpersonDetails({
                  ...personDetails,
                  username:e.target.value
              })
            }}
              required
            />
            <label htmlFor="mail">
              <strong>E-mail</strong>
            </label>
            <input
              type="text"
              placeholder="Enter E-mail"
              name="mail"
              value={personDetails.email}
              onChange={(e) =>{setpersonDetails({
                ...personDetails,
                email:e.target.value
            })}}
              required
            />
            <label htmlFor="psw">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={personDetails.password}
              onChange={(e) =>{setpersonDetails({
                ...personDetails,
                password:e.target.value
            })}}
              required
            />
          </div>
          <button type="submit">
            <strong>SIGN UP</strong>
          </button>
          <div className="container">
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
