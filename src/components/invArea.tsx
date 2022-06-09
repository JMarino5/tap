import React, {useCallback, useState, useEffect, useRef} from 'react';
import { useForm } from "react-hook-form";

import '../css/mpageInv.css';

//invArea.tsx, the inventory editor.

const InvArea = (props: any) => {

    const [isSending, setIsSending] = useState(false);
    const isMounted = useRef(true);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        return () => {
        isMounted.current = false;
        }
    }, []);

    //postData is the function that handles the database query that alters the inventory table.

    const postData = useCallback(async (data) => {

        const options = {
          method: 'POST',
          mode: 'cors' as RequestMode,
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({data})
        };
    
        if(isSending) return; //if isSending returns true, this prevents multiple POST requests from being sent. One, elegant line, syntactically sound.
        setIsSending(true); //sets isSending to true.
        const res = await fetch('/api/mpost', options);
        console.log("Posting the following data: ", data);
        if(isMounted.current) {
          setIsSending(false); //if the component is mounted, the POST request has been completed, and isSending can be set back to false
        }
        //unfortunately, Typescript threw a load of errors for the following line which works on all browsers.
        //@ts-ignore
        window.location.reload(false); //the page reloads upon submission of the data.
      }, [isSending])

    const Data = props.dataset;
    if(Data == null) {
        console.log("Loading ...")
    } else {
        //console.log(Object.entries(Data));
        const Layout = Object.entries(Data).map(([Key, value]) => { //The data from the DB separated by key and value, and a separate field generated for each.
            //The values for the corresponding DB column (key) are read into each field as placeholder text,
            //except id, which becomes the static value in the field.
            //This is to prevent accidentally modifying the id, which is crucial in various functions
            //such as loading the corresponding book cover image in the catalogue,
            //and for ensuring the correct corresponding rows in the DB are edited.
            if(Key == 'id') { //.filter() returns an array, which is resource-heavy. If statement suffices
                return (
                    <div key={Key} className='invCat'><b>{Key}:</b><input type="text" value={String(value)} {...register(Key.toString()) } /></div>
                )
            } else {
                return (<div key={Key} className='invCat'><b>{Key}:</b> <input type="text" placeholder={String(value)} {...register(Key.toString()) } /></div>)
    }})

        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(postData)} >
                <div className='tableArea'>
                        {Layout} 
                <input type="submit" className='sbutton' value="Submit" style={{marginTop: '.1vh'}} /> 
                </div> 
                </form>
            </React.Fragment> //all the fields are submitted with one button.
        );
    }
}

export {
    InvArea,
}