import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/login');
    }
  };

  return (
    <div className="w-full h-full flex    bg-gray-100">
      <div className="bg-white px-8 rounded shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="Enter your first name"
                required
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Enter your last name"
                required
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.phoneNumber ? 'border-red-500' : ''}`}
              placeholder="Enter your phone number"
              required
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'border-red-500' : ''}`}
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" className="bg-blue-900 text-white p-2 rounded-md w-full">
            Create Account
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;