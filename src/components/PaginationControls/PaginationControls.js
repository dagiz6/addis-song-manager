/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyles = css`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 8px;
`;

const buttonStyles = (theme, isActive) => css`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${isActive
    ? theme.colors.pagination.active
    : theme.colors.pagination.inactive};
  color: ${isActive ? "white" : "black"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.pagination.active};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div css={containerStyles}>
      <button
        css={buttonStyles}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          css={(theme) => buttonStyles(theme, currentPage === index + 1)}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        css={buttonStyles}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
