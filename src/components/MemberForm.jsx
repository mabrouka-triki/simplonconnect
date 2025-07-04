import React, { useState, useEffect } from "react";

export default function MemberForm({ onAddMember }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tech: "",
    message: "",
    imageUrl: ""
  });

  // Met à jour l'état à chaque saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("Le prénom et le nom sont obligatoires !");
      return;
    }

    // Transmet les données à App via la fonction passée en props
    onAddMember({
    ...formData,
    imageUrl: formData.imageUrl.trim() || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",

    });

    setFormData({
      firstName: "",
      lastName: "",
      tech: "",
      message: "",
      imageUrl: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}  className="member-form">
      <label>
        Prénom:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label><br />
      <label>
        Nom:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label><br />
      <label>
        Techno:
        <input
          type="text"
          name="tech"
          value={formData.tech}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Message:
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label><br />
      <label>
        URL image:
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </label><br />
      <button type="submit">Ajouter membre</button>
    </form>
  );
}