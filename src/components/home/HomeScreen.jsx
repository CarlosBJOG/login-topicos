import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const handleLogOut = () => {
      dispatch( startLogout() );
  }

  return (
    <div>
        <h1>HomeScreen</h1>
        <button
          className="btn btn-primary"
          onClick={ handleLogOut }
        >
          LOG OUT
        </button>
    </div>

  )
}
