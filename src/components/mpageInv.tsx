import '../css/mpageInv.css'
import { useEffect, useState } from 'react';
import { InvColumn } from './invColumn';

const getOptions = {
    method: 'GET',
    mode: 'cors' as RequestMode,
    headers: {'Content-Type': 'application/json'},
};

const getData = async () => {
    try {
        const res = await fetch('/api/invdata', getOptions);
        return res.json();
    } catch {
        console.log("error fetching titles")
    }
}

const MPageInv = () => {

    const [Data, setData] = useState<any>(); // without <any>, line 40 would throw error (Property 'length' does not exist on type 'never'.) Why? Why would it never get evaluated without <any>? 
    
    //When the user clicks "Inventory Editor" on the sidebar, immediately a request is made for titles in the
    //inventory database. The "InvColumn" component is invoked and a secondary sidebar is generated, one
    //with clickable titles. Once clicked, a data table will appear that allows a user to edit the information of
    //various books listed in the DB
    
    useEffect(() => {
        const run = async () => {
            const fetchedData = await getData();
            setData(fetchedData);
        }
        run();
    }, [])

    if(Data == null) {
        return (
            <div className='paragraph'>Loading...</div>
        )
    } else {
        return (
            <div className='invPageWrapper'>
                <InvColumn data={Data} />
            </div>
        )
    }
}

export {
    MPageInv,
}