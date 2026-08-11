import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div >
            <h1 className='familyTree'>Grandpa</h1>
            <div className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </div>
        </div>
    );
};

export default Grandpa;