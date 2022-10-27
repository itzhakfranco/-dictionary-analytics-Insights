import styled from "styled-components";

export const NavWrapper = styled.div<any>`
  display: flex;
  width: 75rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-family: ${({ fontFamily }) =>
    fontFamily ||
    `Lucida Sans, Lucida Sans Regular, Lucida Grande,
      Lucida Sans Unicode, Geneva, Verdana, sans-serif`};
`;
export const NavbarTitle = styled.nav<any>`
  display: inline-block;
  padding: 1rem;
  margin-right: 1rem;
  font-size: 1.8rem;
  line-height: inherit;
  white-space: nowrap;
`;
