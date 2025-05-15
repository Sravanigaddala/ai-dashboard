import React, { useState } from "react";
import "./App.css";
import AvatarCard from "./AvatarCard";


function App() {
  const [avatars, setAvatars] = useState([
    {
      id: 1,
      name: "Navin",
      avatar: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Mahi",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJDmrhvJeQb_pSueYsBjAkUnlbqJnfTOdsQ&s"
    },
    {
      id: 3,
      name: "Sravs",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wmBtQEpnQ9bFCqYlsCV-6xwxjt36iNHHA&s"
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEdit = (avatar) => {
    setSelectedAvatar(avatar);
    setEditName(avatar.name);
    setEditAvatar(avatar.avatar);
    setIsModalOpen(true);
    setErrorMessage(""); 
  };


  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };


  const handleSave = () => {
    if (editName && isValidUrl(editAvatar)) {
      setAvatars((prevAvatars) =>
        prevAvatars.map((avatar) =>
          avatar.id === selectedAvatar.id
            ? { ...avatar, name: editName, avatar: editAvatar }
            : avatar
        )
      );
      setIsModalOpen(false); 
    } else {
      setErrorMessage("Please enter a valid name and avatar URL.");
    }
  };

 
  const handleCreateAvatar = () => {
    if (newName && isValidUrl(newAvatar)) {
      setIsLoading(true);
      const newId = avatars.length + 1;
      const newAvatarData = {
        id: newId,
        name: newName,
        avatar: newAvatar
      };
      setAvatars([...avatars, newAvatarData]);
      setNewName(""); 
      setNewAvatar("");
      setIsModalOpen(false);  
      setIsLoading(false);
    } else {
      setErrorMessage("Please enter a valid name and avatar URL.");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>AI Avatar Manager</h1>
        <p>Craft stunning avatars. Personalize your digital identity.</p>
      </header>

      
      <section className="avatar-container">
  {avatars.map((avatar) => (
        <AvatarCard key={avatar.id} avatar={avatar} onEdit={handleEdit} />
  ))}
    </section>


      
      <button className="create-avatar-btn" onClick={() => {
        setSelectedAvatar(null); 
        setIsModalOpen(true);
      }}>
        Create New Avatar
      </button>

      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>{selectedAvatar ? "Edit Avatar" : "Create New Avatar"}</h2>
            <input
              type="text"
              value={selectedAvatar ? editName : newName}
              onChange={(e) => selectedAvatar ? setEditName(e.target.value) : setNewName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              value={selectedAvatar ? editAvatar : newAvatar}
              onChange={(e) => selectedAvatar ? setEditAvatar(e.target.value) : setNewAvatar(e.target.value)}
              placeholder="Avatar URL"
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="save-btn" onClick={selectedAvatar ? handleSave : handleCreateAvatar}>
              {isLoading ? "Creating..." : selectedAvatar ? "Save Changes" : "Create Avatar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
