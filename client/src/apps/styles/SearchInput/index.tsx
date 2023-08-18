import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 50%;
  height: 57px;
  border-radius: 20px 0px 0px 20px;
  border: 1px solid #9bdc28;
  &:focus {
    border-right: none;
    outline: none;
    box-shadow: 0 0 4px #9bdc28;
    caret-color: #e2567d;
  }
  &::placeholder {
    font-size: 25px;
    padding-left: 15px;
  }
  font-size: 25px;
  border-right: none;
  color: #494747;
  ${css`
    @media (max-width: 768px) {
      width: 80%;
      justify-content:center;
    }
    @media (max-width: 448px) {
      width: 80%;
      justify-content:center;
    }
  `}
`;

const SearchButton = styled.button`
  margin-top:30px;
  transform: translateY(-50%);
  height: 60px;
  font-size: 25px;
  color:#fff;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  background: #e2567d;
  border: none;
`;

const SearchField: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
    }
  }, []);

  const handleInputChange = () => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
    }
  };

  return (
    <SearchContainer>
      <SearchInput ref={inputRef} type="text" placeholder="Search..." onChange={handleInputChange}/>
      <SearchButton type="submit">Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchField;
