import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import '../FamilyTree/FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext('');

const FamilyTree = () => {
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className='familyTree'>
            <MoneyContext value={asset}>
                <AssetContext value={newAsset}>
                    <Grandpa></Grandpa>
                </AssetContext>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;