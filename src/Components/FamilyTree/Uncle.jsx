import React, { useContext } from 'react';
import Cousin from './Cousin';
import Special from './Special';
import { SalamiContext } from './FamilyTree';


const Uncle = () => {
    const [money,setMoney] = useContext(SalamiContext);
    return (
        <div className='familyTree'>
            <h3>Uncle</h3>
            <div className='flex'>
                <div>
                    <Cousin name='Sabit'></Cousin>
                    <h4>Salami: {money}</h4>
                    <Special></Special>
                </div>
                <Cousin name='Sinthia'></Cousin>
            </div>
        </div>
    );
};

export default Uncle;