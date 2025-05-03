import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Auth.css'; // Optional, for styling

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/login'); // Redirect to Login page after sign up
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for OtakuSpace</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
