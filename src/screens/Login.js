import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email:"", password:"" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Timeout function
        const fetchWithTimeout = (url, options, timeout = 5000) => {
            return Promise.race([
                fetch(url, options),
    
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout)
    )
]);
};



try {
const response = await fetchWithTimeout('/api/loginuser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
});

// Log the response status
console.log('Response status:', response.status);

if (!response.ok) {
    throw new Error('Network response was not ok');
}
 console.log(response)
const json = await response.json();

// Log the JSON response
console.log('Response JSON:', json);

if (response.ok) {
    console.log(json);
    localStorage.setItem('userEmail', credentials.email);
    localStorage.setItem('authToken', json.authToken);
    console.log(localStorage.getItem("authToken"));
    navigate("/");
} else {
    alert("Enter Valid Credentials");
}
} catch (error) {
console.error('Error logging in:', error);
alert("Error logging in. Please try again later.");
}
};



    useEffect(() => {
        // No need to call handleSubmit here
        // handleSubmit();
    }, []);

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
            <div>
                <Navbar />
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit} className='w-50 m-auto mt-5 border bg-dark border-success rounded'>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
