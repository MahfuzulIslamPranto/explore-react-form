import React, { useContext } from 'react';
import Cousin from './Cousin';
import { SalamiContext } from './FamilyTree';

const Aunt = () => {
    const [money,setMoney] = useContext(SalamiContext);
    return (
        <div className='familyTree'>
            <h3>Aunt</h3>
            <div className='flex'>
                <Cousin name='Mamun'></Cousin>
                <Cousin name='Sathi'></Cousin>
            </div>
            <button onClick={()=>setMoney(money+1000)}>Salami 1000tk</button>
        </div>
    );
};

export default Aunt;