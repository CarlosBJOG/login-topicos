import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch'

import { types } from "../types/types"


export const startLogin = ( correo = '', password = '') => {

    return async ( dispatch ) => {
        
        
        const resp = await fetchSinToken( 'auth/login', { correo, password }, 'POST' );

        const body = await resp.json();
        
        if( body.usuario ){

            localStorage.setItem('user',    JSON.stringify({nombre: body.usuario.nombre, uid: body.usuario.uid}));
            localStorage.setItem('token', body.token );
            Swal.fire('Bienvenido', '', 'success')

            dispatch(login( body.usuario.uid, body.usuario.nombre ))
        }
  
    }

}

export const startLogout = ( ) => {

    return ( dispatch ) => {
       
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch( logout() );
    }
}

export const login = ( uid, displayName) =>({

    type: types.login,
    payload: {
        uid,
        displayName
    } 
    
});

export const logout = () => ({
    type: types.logout
})


