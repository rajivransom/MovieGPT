import { Form } from "react-router";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import { useRef, useState } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { Auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch=useDispatch();
   
    const name=useRef(null);
  const email=useRef(null);
  const pass=useRef(null);
  const [errorMsg,setErrorMsg]=useState(null);
  const [isSignInForm, setisSignInForm] = useState(true);
 
  const ToggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }
  const handleButtonClick = ()=>{

    //validate the form data
    const mess=CheckValidData(email.current.value,pass.current.value);
    setErrorMsg(mess);
    if(mess) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(Auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value, photoURL: "https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg"
    }).then(() => {
      const users=Auth.currentUser;
      dispatch(addUser({
        uid: users.uid,
        email: users.email,
        displayName: users.displayName,
        photoURL: users.photoURL,
      }));
     
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMsg(error.message);
      // ...
    });
    console.log(user);
   
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage);
    // ..
  });
      
      //sign up
    }else{
      signInWithEmailAndPassword(Auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    dispatch(addUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }));
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage);
  });
      //sign in
    }
  }

  return(
    <div className='relative h-screen w-screen'>
    {/* Background Image */}
    <img
      className='h-full w-full object-cover'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg'
      alt='Background'
    />

    {/* Black Overlay */}
    <div className='absolute inset-0 bg-black opacity-50'></div>

    {/* Header (always on top) */}
    <div className="absolute top-0 left-0 w-full z-20">
      <Header />
    </div>

    {/* Login Form */}
    <Form  onSubmit={(e)=>e.preventDefault()} className='absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-12 rounded-md shadow-lg z-10'>
      <h2 className='text-3xl font-bold mb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

      <input
        type='email'
        ref={email}
        placeholder='Email address'
        className='w-full p-3 my-2 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none'
      />
      <input
        type='password'
        ref={pass}
        placeholder={isSignInForm ? "Password" : "Enter Password"}
        className='w-full p-3 my-2 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none'
      />
      {!isSignInForm && <input
      ref={name}
        type="text"
        placeholder='Enter Full Name'
        className='w-full p-3 my-2 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none'
      />}

<div className=" text-red-700 text-sm px-3 py-2 rounded mt-3">
      {errorMsg}
    </div>

      <button onClick={handleButtonClick} className='w-full bg-red-600 hover:bg-red-700 text-white p-3 mt-4 rounded font-semibold transition duration-300'>
        {isSignInForm ? "Sign In" : "Register"}
      </button>

      <div className='flex justify-between items-center text-sm text-gray-400 mt-4'>
        <label>
          <input type='checkbox' className='mr-2' />
          Remember me
        </label>
        <span className='hover:underline cursor-pointer'>Need help?</span>
      </div>

     {isSignInForm  ? <p className='mt-8 text-gray-400 text-sm'>
        New to Netflix?{' '}
        <span className='text-white hover:underline cursor-pointer' onClick={ToggleSignInForm}>Sign up now</span>.
      </p> :<p className='mt-8 text-gray-400 text-sm'>
        Already Registered?{' '}
        <span className='text-white hover:underline cursor-pointer' onClick={ToggleSignInForm}>Sign In </span>.
      </p> }
    </Form>
  </div>
  )
};

export default Login;
