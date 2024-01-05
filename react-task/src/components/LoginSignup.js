import React, { useState } from 'react';
import useStore from '../store';
import './LoginSignup.css';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const addUser = useStore((state) => state.addUser);
  const loginUser = useStore((state) => state.loginUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, password, confirmPassword } = formData;
    if (username.length < 4 || username.length > 20) {
      return 'Username must be between 4 and 20 characters';
    }
    if (password.length < 4 || password.length > 20) {
      return 'Password must be between 4 and 20 characters';
    }
    if (!/\d/.test(password)) {
      return 'Password must include at least one numeric value';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData.username, formData.password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      addUser({ username: formData.username, password: formData.password });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{isSignUp ? 'Sign Up' : 'Login'}</div>
        <div className='underline'></div>
      </div>
      {error && <div className='error-message'>{error}</div>}
      <form onSubmit={isSignUp ? handleSignup : handleLogin}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {isSignUp && (
          <input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        <button type='submit' className='submit'>
          {isSignUp ? 'Register' : 'Login'}
        </button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? 'Already have an account? Log in'
          : "Don't have an account? Sign up"}
      </button>
    </div>
  );
};

export default LoginSignup;
