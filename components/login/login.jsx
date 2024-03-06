"use client"
import './login.css';
export default function Login(){
    return <div className="login-container">
        <form className='login-form'>
            <h2>Customer Application</h2>
            <input className='add-input-form' type='text' name='email' placeholder='Username' />
            <input className='add-input-form' type='password' name='password' placeholder='Password' />
            <input className='add-input-form login-button' type='submit' name='login' value='Login' />
        </form>
    </div>;
}