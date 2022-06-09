import React from 'react';

import '../css/mainarea.css';

import introImage from '../images/logo_black_CROPPED.png';

const About = (props : any) => {

    //This description won't change any time soon; for now, it'll be hardcoded.
    //Nonetheless, it'll be wise to create a basic page editor that runs
    //in the manager's page, alongside the inventory editor.

    const pOne = <div className='paragraph'>As the new decade opens, the ever-shifting landscape begins to resemble a vast ocean. The flora and fauna below are seldom encountered, but when undercurrents natural or supernatural draw them to the surface — even if for a moment — our understanding of a world in flux is deepened, and questions about the human condition begin to find answers among the noise. At Three Aces Press, we seek to find the hidden voices waiting to be heard by audiences seeking novel truths that, perhaps, in our nearsightedness, aren’t as novel as we’d like to believe.</div>;
    const pTwo = <div className='paragraph'>We look forward to receiving material that paints surreal scenes with well-defined brushstrokes, scenes where the strange and mysterious are set beside the common and conventional in narratives propelled by believable characters. Kōbō Abe’s <i>Secret Rendevous,</i>, Phillip K. Dick’s <i>Radio Free Albemuth</i> and <i>Flow My Tears, the Policeman Said</i>, Shusaku Endo’s <i>Scandal</i>, Selma Lagerlöf’s <i>The Emperor of Portugallia</i>, Mark Danielewski’s <i>House of Leaves</i>, Haruki Murakami’s “Kino”, and Joseph Conrad’s <i>Heart of Darkness</i> are among the staff’s long list of favorites.</div>;
    const pThree = <div className='paragraph'>In terms of non-fiction, we await submissions involving Politics and Current Events. History is currently welcome, provided the subject material is modern (20th/21st Century). Particularly welcome are investigative works, provided they’re provocative and well-paced.</div>;

    return (
        <React.Fragment>
            <img className='logo' src={introImage} />
            <div className='divider'/>
            {pOne}
            {pTwo}
            {pThree}
        </React.Fragment>);
};

export {
    About,
};