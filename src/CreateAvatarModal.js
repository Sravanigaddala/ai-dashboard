import React, { useState } from "react";

const CreateAvatarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarName, setAvatarName] = useState("");
  const [avatarImage, setAvatarImage] = useState("");

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const handleSave = () => {
   
    console.log("New Avatar:", avatarName, avatarImage);
    handleCloseModal();
  };

  return (
    <>
      <button className="create-avatar-btn" onClick={handleOpenModal}>
        Create New Avatar
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Create New Avatar</h2>
            <input
              type="text"
              placeholder="Name"
              value={avatarName}
              onChange={(e) => setAvatarName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={avatarImage}
              onChange={(e) => setAvatarImage(e.target.value)}
            />
            <button className="save-btn" onClick={handleSave}>
              Save Avatar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAvatarModal;
