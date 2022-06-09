import React from 'react';

import '../css/mainarea.css';

import topImage from "../images/image.jpg";

//This page is straightforward enough without any commentary.

const Contact = () => {
    return (
        <React.Fragment>
            <img className='photo' src={topImage} />
            <div className='paragraph2'>Email all inquiries to <a href = "mailto: inquiries@threeacespress.com">inquiries@threeacespress.com</a>. In the subject line of your email, use "GENERAL", "MEDIA", "LICENSING", or "OTHER".</div>
            <div className='paragraph2'>We look forward to hearing from you.</div>
        </React.Fragment>
    );
}

export {
    Contact,
}