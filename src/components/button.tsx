import * as React from 'react';
import '../css/login.css'

//A very basic button used in the login form.

const BButton = (props: any) => {
    return (
        <React.Fragment>
            <div className = "lButton" onClick={props.handleAction}>Go</div>
        </React.Fragment>
    )
}

export {
    BButton,
}