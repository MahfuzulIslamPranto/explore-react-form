import React, { useState } from 'react';

const ControlledField = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,email,password);
    }
    const handleName =(e)=>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
        if (password.length< 6) {
            console.log(password.length)
            setError("6 characters or longer password needed.")
        }
        else {
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleName} defaultValue={name} name="name" id="" placeholder='Enter name' /> <br />
                <input type="email" onChange={handleEmail} defaultValue={email} name="email" placeholder='email' id="" /> <br />
                <input type="password" onChange={handlePassword} defaultValue={password} name="password" id="" placeholder='Enter Password' required /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;