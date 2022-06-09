import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../css/catalogue.css';

//The redirect from catalogue.tsx arrives here with the appropriate data, and a page with
//all of the book information is rendered.

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    instock: number;
    description: string;
    digital_only: boolean;
    digital_price: number;
    dl_link_epub: string;
    dl_link_mobi: string;
    dl_link_pdf: string;
}

const BookPage = (props: any) => {

    const location = useLocation();
    const navigate = useNavigate();
        if(location.state == null) {
            console.log("Navigating ...")
            navigate('/catalogue');
        }
      //@ts-ignore
    const BookItem = location.state.BookItem;

    let dOnlyLine;
    if(BookItem.digital_only == true) {
        dOnlyLine = <div className='digitalOnly'>This work is currently only offered in digital formats.</div>;
    } else {
        dOnlyLine = <div className='digitalOnly'>This work is offered in print and digital formats.</div>;
    }

  return (
    <React.Fragment>
        <div className = 'productWrapper'>
                <img className='productImage' key={BookItem.id} src={require('../media/covers/' + BookItem.id.toString() +'.jpg')}/>
                <div className='subFrame'>
                    <div className='authorPresents'>{BookItem.author} PRESENTS</div>
                    <div className='titleCard'>{BookItem.title}</div>
                    <div className='productInfo'>{BookItem.description}</div>
                    {dOnlyLine}
                    <div className='subGrid'>
                        <div className='boxItem'>Genre: {BookItem.genre}</div>
                        <div className='boxItem'>ISBN-13: {BookItem.isbn}</div>
                        <div className='boxItem'>In stock: {BookItem.instock}</div>
                        <div className='boxItem'>Print price: ${BookItem.print_price}</div>
                        <div className='boxItem'>Digital price: ${BookItem.digital_price}</div>
                        <div className='boxItem'>Formats: <b>PDF</b>, <b>.epub</b>, <b>.mobi</b></div>
                    </div>
                </div>
        </div>
    </React.Fragment>
)
}


export {
    BookPage,
}