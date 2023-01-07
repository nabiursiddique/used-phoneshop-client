import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const handleSignup = data => {
        console.log(data);
        setSignupError('');
        // Creating the user with email and password
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Created account Successfully');
                console.log(user);

                // Sending the user info (name) into firebase 
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err)
                        setSignupError(err.message)
                    })
            })
            .catch(err => {
                toast.error(err.message);
            });

        //Resetting the form 
        reset();
    };

    // signup with google 
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                toast.success('Log In Successful');
                console.log(user);
            })
            .catch(err => {
                toast.error("Log In Failed");
                console.log(err)
            })
    }
    return (
        <div className='my-20 flex justify-center items-center'>
            <div className='glass p-10 w-96'>
                <h2 className='text-4xl font-bold text-center mb-5'>SIGN UP</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-sm">
                        <label className="label"><span className="label-text font-bold text-white">Enter Your Name</span>
                        </label>
                        <input {...register("name", { required: 'Name is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role='alert' className='text-blue-400'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <label className="label"><span className="label-text font-bold text-white">Enter Your Email</span>
                        </label>
                        <input {...register("email", { required: 'Email address is required' })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-blue-400'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <label className="label"><span className="label-text font-bold text-white">Enter Your Password?</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-blue-400'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt text-blue-400">Forget password?</span>
                        </label>
                    </div>
                    <button className="btn w-full hover:bg-gradient-to-r from-gray-400 to-gray-600 glass text-white mt-5" type='submit'>SIGN UP</button>
                </form>
                <p className='text-center mt-3'>Already have an account? <Link className='text-blue-400' to='/login'>Log In</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full font-semibold"><span className='text-xl mr-2'><FaGoogle /></span> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;