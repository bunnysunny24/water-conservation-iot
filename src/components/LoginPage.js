import React, { useState } from 'react';
import Alert from '../components/ui/Alert';  // Adjust the path as needed
import HomePage from './HomePage'; // Import the HomePage component

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'wateruser' && password === 'ocean123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Try username: wateruser, password: ocean123');
    }
  };

  if (isLoggedIn) {
    return <HomePage />; // Render the HomePage component when logged in
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated water background */}
      <div className="absolute inset-0 bg-blue-500">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(0deg, transparent 50%, #fff 100%)`,
              animation: `wave ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: `translateY(${85 + i * 2}%)`,
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          {error && (
            <Alert variant="error" className="mb-4">
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? 'New user? Create account' : 'Already have an account? Login'}
            </button>
          </div>

          {isLogin && (
            <div className="mt-2 text-center">
              <button className="text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(85%);
          }
          50% {
            transform: translateY(80%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
