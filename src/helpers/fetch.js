const baseUrl = "http://localhost:8080/api";

export const fetchSinToken = async ( endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;

    if( method === 'GET' ) {
        const data2 = fetch( url );
        return data2
    }else{
        

        const data3 = fetch( url, {
            method, 
            headers: {
                "access-control-allow-origin" : "*",
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        }).catch( error => { return error } )
        
        // console.log( data2 );

        return data3;
      


    }
    
}