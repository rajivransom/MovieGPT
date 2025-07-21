import React, { useEffect } from 'react'
import { Auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import store from "../utils/store";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
  const handleSignout=()=>{
    signOut(Auth

    ).then(() => {
      navigate("/");
      
    }).catch((error) => {
      // An error happened.


    
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        dispatch(addUser(user));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
    <img
      className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='Netflix Logo'
    />
    <div className='flex'>
    {user && <img className='w-8 h-8 self-center mx-1' alt='userIcon' src={user ? user.photoURL : "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"} />}
      {user && <button className='font-bold text-white' onClick={handleSignout} >sign out</button>}
    </div>
  </div>
  )
}

export default Header