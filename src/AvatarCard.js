import React from "react";
import "./App.css"; 

const AvatarCard = ({ avatar, onEdit }) => {
  return (
    <div className="avatar-card">
      <img
        src={avatar.avatar}
        alt={avatar.name}
        className="avatar-img"
        onError={(e) => (e.target.src = "https://via.placeholder.com/120")}
      />
      <h3>{avatar.name}</h3>
      <button className="edit-btn" onClick={() => onEdit(avatar)}>
        Edit
      </button>
    </div>
  );
};

export default AvatarCard;
