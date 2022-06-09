import React from 'react';
import '../css/mainarea.css';

import introImage from '../images/logo_black_CROPPED.png';

//This page is straightforward enough as presented.
//At some point, an editor accessible by the manager will be able to modify this page's contents. 

const Submissions = () => {
    return (
        <React.Fragment>
                <img className='logo' src={introImage} />
                <div className='divider'/>
                <div className='paragraph'>Fiction: We are currently open to receiving manuscripts no longer than ninety-thousand words; exceptions can be made, assuming we find the content agreeable. We believe in the impact of shorter works like <i>The Old Man and the Sea</i>, <i>A Farewell to Arms</i>, and <i>Fahrenheit 451</i> which defined the literary generation of yesteryear. As we are constantly searching for new voices, first time authors are encouraged to submit their work to us. We expect the first ten pages of your manuscript single-spaced and typed with 12-pt font; nothing more, nothing less. While we prefer Times New Roman or Bell MT, feel free to use any font available to you that's appropriate for professional communication, <b>except Arial</b>, a horrid creation which the Senior Editor is fatally allergic to. In a separate file, we'd like a two-page synopsis of the work you're submitting. This should follow the same formatting standards as your manuscript submission. Any submission that does not meet these guidelines will not be reviewed, and the sender should not expect any kind of written response.</div>
                <div className='paragraph'>Non-fiction: We're open to a wide array of submissions as outlined on the main page. While there isn't exactly a word-count limit, we'd appreciate works that don't travel north of two-hundred thousand words. Follow the same formatting guidelines as a fiction manuscript submission. We'd like to receive the first forty pages of your work. In a separate file, include with the synopsis about five-hundred words describing your background, as well as your education and/or experience with the subject matter.</div>
                <div className='paragraph'>Keep your query letters short, personal, and human.</div>
                <div className='paragraph'>Send everything you've got to <a href = "mailto: submissions@threeacespress.com">submissions@threeacespress.com</a>. We look forward to reviewing your material. You should hear back from us within two weeks.</div>
                <div className='paragraph-end'>Thank you for your time.</div>
        </React.Fragment>
    )
}

export {
    Submissions,
}