import styled from "styled-components";

const StyledHeader = styled.div`
  width: 140rem;
  display: flex;
  margin-bottom: 6.4rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.8rem;
`;

const Box = styled.div``;

const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    text-decoration: underline;
  }

  :nth-last-child(2) {
    color: var(--color-grayish-blue);
  }

  &:last-child {
    color: var(--color-grayish-blue);
  }
`;

const arr = ["Product", " Features", "Pricing", ".", "Login"];

function Header() {
  return (
    <StyledHeader>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <g fill="#323334" fillRule="evenodd">
            <path d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z" />
          </g>
        </svg>
      </Box>
      <StyledMenu>
        {arr.map((listItem, i) => (
          <Li key={i}>{listItem}</Li>
        ))}
      </StyledMenu>
    </StyledHeader>
  );
}

export default Header;
