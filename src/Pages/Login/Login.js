import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm();
    const handleLogin = data => {
        console.log(data)
    };
    return (
        <div className='my-20 flex justify-center items-center'>
            <div className='glass p-10 w-96'>
                <h2 className='text-4xl font-bold text-center mb-5'>LOG IN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-sm">
                        <label className="label"><span className="label-text font-bold text-white">Enter Your Email</span>
                        </label>
                        <input {...register("email", { required: 'Email address is required' })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-blue-400'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <label className="label"><span className="label-text font-bold text-white">Enter Your Password?</span>
                        </label>
                        <input type="password" {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-blue-400'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt text-blue-400">Forget password?</span>
                        </label>
                    </div>
                    <button className="btn w-full hover:bg-gradient-to-r from-gray-400 to-gray-600 glass text-white mt-5" type='submit'>LOG IN</button>

                    {/* New to doctors portal section */}
                    <p className='text-center mt-3'>New to used phone shop? <Link className='text-blue-400' to='/'>Sign up</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full font-semibold"><span className='text-xl mr-2'><FaGoogle /></span> CONTINUE WITH GOOGLE</button>

                </form>
            </div>
        </div>
    );
};

export default Login;