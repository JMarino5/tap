import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/catalogue.css';

//inventory.tsx
//This generates both the catalogue view and the modal-esque window that displays the book details when a book is clicked on.
//For each book, there is a jpg file named after the corresponding ID number. For example, "The Valley of a Desert Heart" is
//id # 2, so the cover image is at ./media/covers/2.jpg.

const Inventory = (props: any) => {

    const navigate = useNavigate();

    const BookItem = {...props.Data};

    return (
        <React.Fragment>
            <div>
                <img className='coverFrame' key={BookItem.id} src={require('../media/covers/' + BookItem.id.toString() +'.jpg')} onClick={() => navigate("/bookpage", {state: {BookItem}})} />
            </div>
        </React.Fragment>
    )
}

export {
    Inventory,
}