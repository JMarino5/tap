//App.tsx.
//I (try to always) follow this import pattern:
//first, components/objects/functions from dependencies;
//second, the relevant css files; and
//third, components made within the project

import React from 'react';
import { Route, Routes} from 'react-router-dom';
import type { FunctionComponent } from 'react';
import {app, firebaseConfig} from './components/firebase';
import { initializeApp } from 'firebase/app';

import './css/App.css';
import './css/header.css';

import { Header } from './components/header';
import { BookPage } from './components/bookpage'
import { About } from './pages/about';
import { Submissions } from './pages/submissions';
import { Contact } from './pages/contact';
import { Catalogue } from './pages/catalogue';
import { LR } from './pages/lr';
import { MPage } from './pages/mpage';

const App: FunctionComponent = () => {

    initializeApp(firebaseConfig); //This initializes the firebase configuration used for the MLogin
    return (
        <React.Fragment>
            <main>
            <Header />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                    <Route path='/submissions' element={<Submissions />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/lr' element={<LR />} />
                    <Route path='/mpage/*' element={<MPage />} />
                    <Route path='/bookpage' element={<BookPage />} />
                </Routes>
            </main>
        </React.Fragment>
);
}

export {
    App,
};
