import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
    const handlePassword = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Enter name' /> <br />
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="password" onChange={handlePassword} defaultValue={password} name="password" id="" placeholder='Enter Password' required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;