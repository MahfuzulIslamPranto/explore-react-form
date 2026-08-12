import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {
    const asset = useContext(MoneyContext);
    return (
        <div className='familyTree'>
            <h3>Sister</h3>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Sister;