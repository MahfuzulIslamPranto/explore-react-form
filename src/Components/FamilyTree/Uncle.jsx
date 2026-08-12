import React from 'react';
import Cousin from './Cousin';
import Special from './Special';


const Uncle = () => {
    return (
        <div className='familyTree'>
            <h3>Uncle</h3>
            <div className='flex'>
                <div>
                    <Cousin name='Sabit'></Cousin>
                    <Special></Special>
                </div>
                <Cousin name='Sinthia'></Cousin>
            </div>
        </div>
    );
};

export default Uncle;