import {useState} from 'react';
import { useEffect } from 'react';
import type { FunctionComponent } from 'react';
import { Charts } from './charts'

import '../css/mpageSales.css';

//ChartJS was chosen for this project due to it being lightweight, easy to implement,
//and overall pleasing to look at without looking like charts from a downmarket, beaten-up math textbook
//from rural Oklahoma circa 1991.

//Only one chart is shown here. In the future, more charts (for example, a line graph showing sales and/or 
//downloads per title over time) will be added, once we begin to carry actual works

const options = {
    method: 'GET',
    mode: 'cors' as RequestMode,
    headers: {'Content-Type': 'application/json'},
};

const getData = async () => {
    try {
        const res = await fetch('/api/all', options);
        return res.json();
    } catch {
        console.log("error fetching cat")
    }
}

const MPageSales: FunctionComponent = () => {

    const [Data, setData] = useState<any>(null);

    useEffect(() => {
        const run = async () => {
        const fetchedData = await getData();
        setData(fetchedData);
    }
    run();
    }, [])

    if(Data == null) {
        return (<p>Loading ... </p>);
    } else {
        const titles = [];
        const digitalSales = [];
        const graphName = "YTD # of Digital Sales";
        for(let i = 0; i < Data.length; i++) {
            titles.push(Data[i].title);
            digitalSales.push(Data[i].total_downloads); //A method outside of .map is used.
        }
        return (
            <div className='salesPageWrapper'>
                <p>Below is one example of charts and/or graphs that would track various metrics.</p>
                <div className='chartWrapper'>
                    <Charts title={graphName} labels={titles} values={digitalSales} />
                </div>
            </div>
        )
    }

}

export {
    MPageSales,
}