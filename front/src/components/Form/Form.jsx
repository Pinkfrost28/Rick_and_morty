import { useState } from "react"
import validation from "../validation";

import style from "./Form.module.css";
export default function Form({login}){
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    function handleInputChange(event){
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({
            ...userData,
            [property]: value,
        })
       
        setErrors(validation({
            ...userData,
            [property]: value,
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData)
    }
    return(
        <div className={style.login_box}>
            <form onSubmit={handleSubmit} >
            <div>
            <label>User name</label>
            <input className ={style.user_box} key='userName' name='username' type='text' value={userData.username} onChange={handleInputChange}></input>
            {errors.username && <p style ={{color: 'red'}}> {errors.username}</p>}
            </div>
            <br/>
            <div>
            <label>Password</label>
            <input className ={style.user_box} key='password' name='password' type='password' value={userData.password}onChange={handleInputChange}></input>
            {errors.password && <p style ={{color: 'red'}}> {errors.password}</p>}
            </div>

            <button>Login</button>
        </form>
        </div>
        
    )
}