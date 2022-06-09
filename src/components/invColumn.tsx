import React from 'react';
import { useState } from 'react';
import { InvArea } from './invArea'

import '../css/mpageInv.css';

const InvColumn = (props: any) => {

    const [Action, setAction] = useState(null);

    const Data = props.data;

    const itemTitles = Data.map((data) => (
        <div className='itemTitle' onClick={() => setAction(data.id)}>{data.title}</div> //a clickable title card is generated ->
    )) //which grabs the data from the corresponding id via setAction(data.id).

    return (
        <React.Fragment>
            <div className='titleColumn'>
                {itemTitles}
            </div>
            <InvArea set={Action} dataset={Data[Action-1]}/>
        </React.Fragment>
    ) //dataset is {Data[Action-1]} due to the fact that array indices begin at [0], but the inventory IDs begin at 1 in the database; this corrects the discrepency
}

export {
    InvColumn,
}