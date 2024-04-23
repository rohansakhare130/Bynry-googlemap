import React, { useState} from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';
import SearchFilter from './components/SearchFilter';
import Logo from '../src/asset/images/logo.webp';
function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // const [loading, setLoading] = useState(true);

  const handleAddProfile = newProfile => {
    setProfiles([...profiles, newProfile]);
  };

  const handleSelectProfile = profile => {
    setSelectedProfile(profile);
  };

  const handleUpdateProfile = updatedProfile => {
    const updatedProfiles = profiles.map(p => (p.id === updatedProfile.id ? updatedProfile : p));
    setProfiles(updatedProfiles);
  };

  const handleDeleteProfile = profileToDelete => {
    const updatedProfiles = profiles.filter(p => p.id !== profileToDelete.id);
    setProfiles(updatedProfiles);
    setSelectedProfile(null); // Deselect profile if it's being deleted
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App-container">
    
      <div className="App-main">
        <img src={Logo} className="head-img-1" alt={"logo"} />
        <SearchFilter onSearch={handleSearch} className="searchfilter1" />
      </div>
      <div className="App-container-bg">
      <p className="App-head-text">Profile Map Application</p>
      <AdminPanel profiles={profiles}
      onAddProfile={handleAddProfile}
      onUpdateProfile={handleUpdateProfile}
      onDeleteProfile={handleDeleteProfile}
    />
    </div>
      <div className="main-content">
      <p className="main-content-heder"> Profile List</p>
        <ProfileList profiles={filteredProfiles} onClickSummary={handleSelectProfile}  />
        <Map
          center={{ lat: 18.51217, lng: 73.82895 }}
          profiles={filteredProfiles}
          selectedProfile={selectedProfile}
          onSelectProfile={handleSelectProfile}
        />
        {selectedProfile && (
          <div className="profile-details">
            <h2 className="App-prof-heder-text">Selected Profile</h2>
            <p className="App-prof-text1">Name: {selectedProfile.name}</p>
            <p className="App-prof-text2">Description: {selectedProfile.description}</p>
            <img src={selectedProfile.photo} alt={selectedProfile.name} className="App-profile-img"/>
          </div>
        )}
       
      </div>
    </div>
  );
}

export default App;
