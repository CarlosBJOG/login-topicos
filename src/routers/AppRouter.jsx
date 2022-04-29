import React, { useEffect, useState } from 'react'
import { 
    BrowserRouter, 
    Route, 
    Routes 
} from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { useDispatch, useSelector} from 'react-redux';
import { login } from '../actions/auth'


export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const resp = useSelector( state => state.auth);
    const { uid } = resp;
    useEffect(() => {
        
        const user = JSON.parse( localStorage.getItem('user')  );
        
        if( user ){
            dispatch( login(user.uid, user.nombre ));
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn( false );
            
        }
        setCheking(false);
        
    }, [dispatch, setCheking, setIsLoggedIn, uid ])
    
    if( checking ) {
        return (
            <h1>Espere... </h1>
        )
    }
    


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element ={
                    <PublicRoute isAuth={ isLoggedIn }>
                        <AuthRouter/>
                    </PublicRoute>
                    } 
                />

                <Route 
                    exact
                    path="/"
                    element = {
                        <PrivateRoute isAuth={ isLoggedIn }>
                            <HomeScreen />
                        </PrivateRoute>
                    }
                />

              

            </Routes>
        
        </BrowserRouter>
    )
}
