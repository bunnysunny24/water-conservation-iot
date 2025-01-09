import React, { useState } from 'react';
import Alert from '../components/ui/Alert'; // Adjust the path as needed
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
      <div className="absolute inset-0 bg-blue-500 overflow-hidden">
        {/* Water Waves */}
        <div className="absolute inset-0 animate-water-rise">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-full opacity-50 wave wave-${i}`}
              style={{
                animationDelay: `${i * 2}s`,
                zIndex: 10 - i,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-xl max-w-md w-full z-10">
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
              <button className="text-blue-600 hover:underline">Forgot password?</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Waves */
        .wave {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 15%, transparent 80%);
          animation: wave-move 6s infinite linear, wave-rise 10s infinite ease-in-out;
          border-radius: 50%;
        }

        .wave-0 {
          background: rgba(255, 255, 255, 0.5);
          animation-delay: 0s;
        }

        .wave-1 {
          background: rgba(255, 255, 255, 0.4);
          animation-delay: 2s;
        }

        .wave-2 {
          background: rgba(255, 255, 255, 0.3);
          animation-delay: 4s;
        }

        /* Keyframes for wave movement */
        @keyframes wave-move {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        /* Keyframes for water rise */
        @keyframes wave-rise {
          0% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(10%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        /* Animation container */
        .animate-water-rise {
          animation: water-rise-level 20s infinite ease-in-out;
        }

        @keyframes water-rise-level {
          0% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(10%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
