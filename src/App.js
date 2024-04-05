import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_p: '',
    dob: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.first_name.trim()) {
      validationErrors.first_name = 'First name is required';
    }
    if (!formData.last_name.trim()) {
      validationErrors.last_name = 'Last name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Valid email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 9) {
      validationErrors.password = 'Password must be at least 9 characters';
    }
    if (formData.confirm_p !== formData.password) {
      validationErrors.confirm_p = 'Passwords do not match';
    }
    if (!formData.dob) {
      validationErrors.dob = 'Date of birth is required';
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
            {errors.first_name && <p className="error">{errors.first_name}</p>}
          </div>
          <div className="form-group">
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
            {errors.last_name && <p className="error">{errors.last_name}</p>}
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <input type="password" name="confirm_p" placeholder="Confirm Password" value={formData.confirm_p} onChange={handleChange} />
            {errors.confirm_p && <p className="error">{errors.confirm_p}</p>}
          </div>
          <div className="form-group">
            <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
