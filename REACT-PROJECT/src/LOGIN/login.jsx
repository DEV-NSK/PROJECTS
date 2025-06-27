import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '/src/firebase/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (role === 'user' || role === 'admin') {
        localStorage.setItem('userloginrole', JSON.stringify({ email, role }));
      }

      navigate("/"); // Redirect to home page ("/")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-sm border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-6 drop-shadow-sm">
          Welcome Back 💫
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 bg-white placeholder:text-gray-400 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 bg-white placeholder:text-gray-400 text-black"
        />

        <button
          type="submit"
          className="w-full bg-gray-100 hover:bg-gray-200 text-black py-2 rounded-xl font-semibold transition duration-300"
        >
          Login
        </button>

        <p className="text-sm mt-5 text-center text-gray-500">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Sign up
          </Link>
        </p>

        {error && (
          <p className="mt-4 text-center text-red-400 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;