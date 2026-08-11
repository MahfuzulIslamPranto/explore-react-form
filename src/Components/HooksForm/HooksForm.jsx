import React from 'react';
import useInputField from '../hooks/useInputField';

const HooksForm = () => {
    const [name,nameOnChange] = useInputField('');
    const [email,emailOnChange] = useInputField('');
    const [password,passwordOnChange] = useInputField('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit", name,email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} name="name" placeholder='Name' id="" /> <br />
                <input placeholder='Email' type="email" name="email" onChange={emailOnChange} id="" /> <br />
                <input placeholder='Password' type="password" name="password" onChange={passwordOnChange} id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;