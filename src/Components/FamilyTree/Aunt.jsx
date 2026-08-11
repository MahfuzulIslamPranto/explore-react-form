import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div className='familyTree'>
            <h3>Aunt</h3>
            <div className='flex'>
                <Cousin name='Mamun'></Cousin>
                <Cousin name='Sathi'></Cousin>
            </div>
        </div>
    );
};

export default Aunt;