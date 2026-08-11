import React from 'react';
import Brother from './Brother';
import Sister from './Sister';
import Myself from './Myself';

const Dad = () => {
    return (
        <div className='familyTree'>
            <h3 className='familyTree'>Dad</h3>
            <div className='flex'>
                <Brother></Brother>
                <Sister></Sister>
                <Myself></Myself>
            </div>
        </div>
    );
};

export default Dad;