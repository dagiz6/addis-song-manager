/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.light};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const AlbumArt = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space[3]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;

const SongInfo = styled.div`
  flex: 1;
`;

const SongTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  margin: 0;
`;

const ArtistName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: inherit;
  opacity: 0.8;
  margin: ${({ theme }) => theme.space[1]}px 0 0;
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: inherit;
  opacity: 0.8;
`;

export const SongCard = ({ song }) => {
  return (
    <Card>
      <AlbumArt src={song.albumArt} alt={song.title} />
      <SongInfo>
        <SongTitle>{song.title}</SongTitle>
        <ArtistName>{song.artist}</ArtistName>
      </SongInfo>
      <Year>{song.year}</Year>
    </Card>
  );
};
