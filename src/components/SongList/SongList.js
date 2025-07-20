/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SongCard } from "../SongCard/SongCard";

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

export const SongList = ({ songs }) => {
  return (
    <div css={containerStyles}>
      <h1 css={titleStyles}>Addis Song Manager</h1>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};
