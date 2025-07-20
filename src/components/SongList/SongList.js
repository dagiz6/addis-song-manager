/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { SongCard } from "../SongCard/SongCard";
import { PaginationControls } from "../PaginationControls/PaginationControls";
import { AddSongForm } from "../AddSongForm/AddSongForm";

const containerStyles = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const titleStyles = (theme) => css`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[4]}px;
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.space[4]}px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes[3]}px;
  }
`;

const controlsContainer = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const buttonStyles = (theme) => css`
  padding: 8px 16px;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const sortButtonStyles = (theme, isActive) => css`
  padding: 8px 16px;
  background-color: ${isActive ? theme.colors.primary : "#f0f0f0"};
  color: ${isActive ? "white" : "black"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

export const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedSongs, setSortedSongs] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    type: "default",
    direction: "asc",
  });
  const songsPerPage = 5;
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
const fetchSongs = async () => {
  try {
    const response = await fetch("/api/songs");
    const songs = await response.json();
    console.log("Fetched songs:", songs); // Debug log
    setSongs(Array.isArray(songs) ? songs : []);
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
};

    fetchSongs();
  }, []);

  // Sort songs based on configuration
  useEffect(() => {
    let sorted = [...songs];

    if (sortConfig.type !== "default") {
      sorted.sort((a, b) => {
        if (sortConfig.type === "year") {
          return sortConfig.direction === "asc"
            ? a.year - b.year
            : b.year - a.year;
        } else if (sortConfig.type === "name") {
          return sortConfig.direction === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0;
      });
    }

    setSortedSongs(sorted);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, [sortConfig, songs]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedSongs.length / songsPerPage);
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = sortedSongs.slice(indexOfFirstSong, indexOfLastSong);

  const requestSort = (type) => {
    let direction = "asc";
    if (sortConfig.type === type) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    setSortConfig({ type, direction });
  };

  const getSortButtonLabel = (type) => {
    if (sortConfig.type !== type)
      return type.charAt(0).toUpperCase() + type.slice(1);

    return `${type.charAt(0).toUpperCase() + type.slice(1)} ${
      sortConfig.direction === "asc"
        ? type === "year"
          ? "(Oldest)"
          : "(A-Z)"
        : type === "year"
        ? "(Newest)"
        : "(Z-A)"
    }`;
  };

const handleSongAdded = async (newSong) => {
  try {
    const response = await fetch("/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    const addedSong = await response.json();
    console.log("Added song:", addedSong); // Debug log
    setSongs((prev) => [...prev, addedSong]);
    setShowAddForm(false);
  } catch (error) {
    console.error("Error adding song:", error);
  }
};

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/songs/${id}`, { method: "DELETE" });
      setSongs((prev) => prev.filter((song) => song.id !== id));
    } catch (error) {
      console.error("Error deleting song:", error);
    }
    };
    

  return (
    <div css={containerStyles}>
      <h1 css={titleStyles}>Addis Song Manager</h1>

      <button
        css={(theme) => buttonStyles(theme)}
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? "Cancel" : "Add New Song"}
      </button>

      {showAddForm && <AddSongForm onSongAdded={handleSongAdded} />}

      <div css={controlsContainer}>
        <button
          css={(theme) =>
            sortButtonStyles(theme, sortConfig.type === "default")
          }
          onClick={() => requestSort("default")}
        >
          Default
        </button>
        <button
          css={(theme) => sortButtonStyles(theme, sortConfig.type === "year")}
          onClick={() => requestSort("year")}
        >
          {getSortButtonLabel("year")}
        </button>
        <button
          css={(theme) => sortButtonStyles(theme, sortConfig.type === "name")}
          onClick={() => requestSort("name")}
        >
          {getSortButtonLabel("name")}
        </button>
      </div>

      {currentSongs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onDelete={() => handleDelete(song.id)}
        />
      ))}

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
