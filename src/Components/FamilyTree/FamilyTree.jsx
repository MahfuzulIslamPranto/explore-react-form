import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import '../FamilyTree/FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext('');
export const SalamiContext = createContext('');

const FamilyTree = () => {
    const [money,setMoney] = useState(0);
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className='familyTree'>
            <h4>Total Family Money: {money}</h4>
            <SalamiContext value={[money,setMoney]}>
                <MoneyContext value={asset}>
                    <AssetContext value={newAsset}>
                        <Grandpa></Grandpa>
                    </AssetContext>
                </MoneyContext>
            </SalamiContext>
        </div>
    );
};

export default FamilyTree;