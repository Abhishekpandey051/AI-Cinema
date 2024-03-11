import Header from './Header';

const Login = () => {
    return (
        <div>
            <Header/>
            <div className='absolute'>
            <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='sign-up'/>
            </div>
            <form className='w-3/12 absolute text-white p-10 bg-gray-800 my-36 mx-auto right-0 left-0'>
            <h1 className='font-bold text-xl'>Sign In</h1>
                <input type='text' placeholder='Email Address' className='p-2 m-2'/>
                <input type='password' placeholder='Password' className='p-2 m-2'/>
                <button className='p-6 m-4'>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
