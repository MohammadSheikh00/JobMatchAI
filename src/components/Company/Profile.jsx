import React, { useState } from 'react';
import './Profile.css'; // استيراد ملف الـ CSS

const CompanyProfile = () => {
  const companyName = "AwesomeTech Ltd.";

  const [formData, setFormData] = useState({
    name: companyName,
    email: '',
    phone: '',
    location: '',
    bio: ''
  });

  const [imageURL, setImageURL] = useState('https://via.placeholder.com/150');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved data:', formData);
    alert('Profile updated!');
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>Company Profile</h2>

        <div className="profile-image-container">
          <img src={imageURL} alt="Profile" className="profile-image" />
          <label htmlFor="upload-photo" className="upload-btn">+</label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            className="upload-input"
            onChange={handleImageUpload}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="change-password-btn" onClick={() => alert('Redirect to change password')}>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;
