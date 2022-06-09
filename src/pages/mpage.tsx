import React, {useEffect} from 'react';
import { Routes, Route, useNavigate,} from "react-router-dom";

import '../css/mpage.css'

import { MSidebar } from '../components/msidebar';
import { MPageSplash } from '../components/mpageSplash';
import { MPageSales } from '../components/mpageSales';
import { MPageInv } from '../components/mpageInv'

const MPage = (props: any) => {

    const navigate = useNavigate(); //If something happens where the Auth token isn't present,
                                    //the user will be redirected back to the login page
    useEffect(() => {
        const authToken = sessionStorage.getItem('Auth Token');
        if(authToken) {
            navigate('/mpage');
        }
        if(!authToken) {
            navigate('/LR');
        }
    }, [])

    //Routes are set up for the manager page.
    //mpageInv is an inventory editor that allows one to edit inventory items.
    //mpagesales will display sales data visualized as charts and graphs.

    return (
        <React.Fragment>
            <div className='wrapper'>
                <MSidebar />
                    <Routes>
                        <Route path='/' element={<MPageSplash />} />
                    </Routes>
                    <Routes>
                        <Route path='/mpageInv' element={<MPageInv />} />
                    </Routes>
                    <Routes>
                        <Route path='/mpagesales' element={<MPageSales />} />
                    </Routes>
            </div>
        </React.Fragment>
    )
}

export {
    MPage,
}