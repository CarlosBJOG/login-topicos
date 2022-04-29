import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css';
import { useDispatch, useSelector} from 'react-redux';
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
                                    placeholder="e-mail"
                                    value = { password }
                                    onChange = { handleInputChange }
                                />
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                            </div>

                            
                    

                            
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block mb-4"
                                
                            >Sign in</button>

                            
                            <div className="text-center">
                            
                    

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                                </button>


                    
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}
