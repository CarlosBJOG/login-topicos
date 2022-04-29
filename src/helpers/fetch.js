const baseUrl = "http://localhost:8080/api";

export const fetchSinToken = async ( endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;

    if( method === 'GET' ) {
        const data = fetch( url );
        return data
    }else{
    

        const data2 = fetch( url, {
            method, 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        }).catch( error => { return error } )
        
        return data2;
      


    }
    
}