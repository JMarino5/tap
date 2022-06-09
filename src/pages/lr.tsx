import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { Form } from '../components/form';

import '../css/login.css';

//lr.tsx
//lr = "login/register"; in the future, there may be an ability for users to register,
//if Three Aces Press decides to carry inventory to sell directly to consumers.
//For now, only the "manager" can log in.

const LR = (props: any) => { 

    const navigate = useNavigate(); //If the auth token is present, the user will always be redirected immediately to the
    useEffect(() => { //manager page; if not, the login form will be presented via /lr
        let authToken = sessionStorage.getItem('Auth Token');
    
        if (authToken) {
          navigate('/mpage');
        }
        if (!authToken) {
            navigate('/lr');
          }

      }, [])

      //the Login process: email and password are states which, once set, are passed to handleAction().
      //After authentication, /mpage/ is navigated to.

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleAction = () => {
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            navigate('/mpage/');
            // @ts-ignore
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        });
    }

    return ( //The login form. 
        <React.Fragment> 
            <div className='login'>
                <Form title="Login" setEmail ={setEmail} setPassword={setPassword} handleAction={() => handleAction()} />
            </div>
        </React.Fragment>
    );
}

export {
    LR,
}