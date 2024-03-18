import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => { 
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user)
    console.log(user);
    const handleSingout = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
          
    }
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
    return (
        <>
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo"/>
            
           {user &&( <div className="flex">
            <img className="w-12 h-12" alt="user_img" src= {user.photoURL}/>
                <button className="font-bold text-white" onClick={handleSingout}>Sign Out</button>
            </div>)}
            </div>
        </>
    );
}

export default Header;
