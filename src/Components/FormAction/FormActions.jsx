import React from 'react';

const FormActions = () => {
    const handleAction = (formData) =>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        console.log(formData.get('password'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" id="" placeholder='Enter name' /> <br />
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="password" name="password" id="" placeholder='Enter Password' required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormActions;