import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='familyTree'>
            <h3 className='familyTree'>Uncle</h3>
            <div className='flex'>
                <Cousin name='Sabit'></Cousin>
                <Cousin name='Sinthia'></Cousin>
            </div>
        </div>
    );
};

export default Uncle;