import React from 'react'
import '../../styles/styles.css';
import { useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';



export const LoginScreen = () => {

    const dispatch = useDispatch();


    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;


    const handleLogin = (e) => {
        e.preventDefault();
        
        dispatch( startLogin( email, password ) );
        
    }


    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center"> <p> Login</p>  </h1>
                        <form className="m-5" onSubmit={handleLogin}>
                            <div className="form-outline mb-4">
                                <input 
                                    type="email"
                                    name="email" 
                                    placeholder="e-mail"
                                    className="form-control" 
                                    value = { email }
                                    onChange = { handleInputChange }
                                />
                                <label className="form-label" htmlFor="form2Example1">Email address</label>
                            </div>

                            
                            <div className="form-outline mb-4">
                                <input 
                                    type="password"
                                    name="password" 
                                    className="form-control" 
                                    placeholder="password"
                                    value = { password }
                                    onChange = { handleInputChange }
                                />
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                            </div>

                            
                          
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block mb-4"
                                
                            >Sign in</button>

                            
     
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}
