import React, { useState, useEffect } from 'react';
import type { FunctionComponent } from 'react';

import '../css/mainarea.css';
import '../css/catalogue.css';

import { Inventory } from '../components/inventory';

//The catalogue is quite simple: getData is defined as an async function that
//retrieves results of a postgresql query performed by the nodejs backend.

const options = {
    method: 'GET',
    mode: 'cors' as RequestMode,
    headers: {'Content-Type': 'application/json'},
};

const getData = async () => {
    try {
        const res = await fetch('/api/catalogue', options);
        return res.json();
    } catch {
        console.log("error fetching cat");
    }
}

const Catalogue: FunctionComponent = () => {
    
    const [Data, setData] = useState<any>(); // The query result-request is made upon visiting the page.
    
        useEffect(() => {
        const run = async () => {
        const fetchedData = await getData();
        setData(fetchedData);
    }
    run();
}, [])

    if(Data == null) {
        return (
            <div className='paragraph'>Loading...</div> // As long as Data == null, "Loading ... " will appear at the top left of the page.
        )
    } else {
        const Layout = [];
        for(let i = 0; i < Data.length; i++) { //Since Data.length = number of items in the inventory, the for loop won't run more times than needed. 
            Layout.push(<Inventory Data={Data[i]} />); //The Inventory component is invoked, with the corresponding Data passed along as a prop.
        }

        return ( //A table of the (fictional) currently-offered titles is presented as clickable items, with the bookcovers being the item images.
            <React.Fragment>
                <div className='invArea'> 
                    {Layout}
                </div>
                <div className="disclaimer">These items are not real. This is a proof of concept; the descriptions were AI-generated. We'd never permit such poorly-written summaries to be read by an interested public. The cover "art" was "designed" by a non-professional.</div>
            </React.Fragment>
        )
    }
}

export {
    Catalogue,
}