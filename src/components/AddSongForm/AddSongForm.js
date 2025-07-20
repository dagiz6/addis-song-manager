// src/components/AddSongForm.js
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const formStyles = css`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
`;

const inputGroup = css`
  margin-bottom: 15px;
`;

const labelStyles = css`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const inputStyles = css`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const buttonStyles = (theme) => css`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const AddSongForm = ({ onSongAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    year: "",
    albumArt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.title.trim() || !formData.artist.trim()) {
    alert("Please enter both song title and artist");
    return;
  }

  const newSong = {
    title: formData.title.trim(),
    artist: formData.artist.trim(),
    year: parseInt(formData.year) || new Date().getFullYear(),
    albumArt: formData.albumArt.trim() || "https://via.placeholder.com/64",
  };

  onSongAdded(newSong);
};

  return (
    <form css={formStyles} onSubmit={handleSubmit}>
      <div css={inputGroup}>
        <label css={labelStyles}>Song Title</label>
        <input
          css={inputStyles}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div css={inputGroup}>
        <label css={labelStyles}>Artist</label>
        <input
          css={inputStyles}
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </div>

      <div css={inputGroup}>
        <label css={labelStyles}>Year</label>
        <input
          css={inputStyles}
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="1900"
          max={new Date().getFullYear()}
          required
        />
      </div>

      <div css={inputGroup}>
        <label css={labelStyles}>Album Art URL</label>
        <input
          css={inputStyles}
          type="url"
          name="albumArt"
          value={formData.albumArt}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" css={buttonStyles}>
        Add Song
      </button>
    </form>
  );
};
