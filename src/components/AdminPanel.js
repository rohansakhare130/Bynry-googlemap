import React, { useState, useRef } from 'react';
import '../asset/css/adminpanel.css';

const AdminPanel = ({ onAddProfile, profiles, onUpdateProfile, onDeleteProfile }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const nameInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !photo || !description) {
      alert('Please fill in all fields.');
      return;
    }
    const newProfile = {
      id: Date.now(), // Generate unique ID
      name,
      photo: URL.createObjectURL(photo),
      description,
      lat: 18.47608, //  latitude
      lng: 73.82091, // longitude
    };
    onAddProfile(newProfile);
    nameInputRef.current.value = '';
    photoInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    // Reset form fields
    setName('');
    setPhoto(null);
    setDescription('');
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0]; // Get the first file selected by the user
    setPhoto(file); // Set the photo state with the selected file
  };
  const handleEdit = profile => {
    setName(profile.name);
    setDescription(profile.description);
    onUpdateProfile(profile);
  };

  const handleDelete = profile => {
    onDeleteProfile(profile);
  };


  return (
    <div className="admin-panel1">
     
      <div className="admin-main">
      <p className="admin-heder">Add New Profile</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="admin-input"
            ref={nameInputRef}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="admin-input2"
            ref={photoInputRef}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="admin-input1"
            ref={descriptionInputRef}
            required
          />
          <br/>
          <button type="submit"  className="admin-butn">Add Profile</button>
        </form>
      </div>
      <div className="admin-line"/>

      <ul className="admin-Manage">
      <p className="admin-heder">Manage Profiles</p>
        {profiles.map(profile => (
          <li key={profile.id} className="admin-Manage-item">
            {profile.name }
              
            <button onClick={() => handleEdit(profile)} className="admin-Manage-butn">Edit</button>
            <button onClick={() => handleDelete(profile)} className="admin-Manage-butn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminPanel