import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '/src/firebase/firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        if (!role) {
            setError('Please select a role.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Use role as collection name directly
            const docRef = doc(db, role, userCredential.user.uid);
            await setDoc(docRef, {
                name,
                email
                // role
            });

            alert("Signup successful");
            setName('');
            setEmail('');
            setPassword('');
            setRole('');
            navigate('/login');
        } catch (error) {
            setError(error.message.replace("Firebase: ", ""));
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form
                onSubmit={handleSignup}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-200"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Create Account</h2>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white placeholder:text-gray-400 text-black"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white placeholder:text-gray-400 text-black"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white placeholder:text-gray-400 text-black"
                />

                <button
                    type="submit"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-black py-2 rounded-lg font-semibold transition duration-300"
                >
                    Sign Up
                </button>

                <p className="text-sm mt-5 text-center text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="text-black font-medium hover:underline">
                        Login
                    </Link>
                </p>

                {error && (
                    <p className="mt-4 text-center text-red-500">{error}</p>
                )}
            </form>
        </div>
    );
};

export default Signup;