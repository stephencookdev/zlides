import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  opacity: 0.5;
  transition: 0.4s ease opacity;

  ${(props) =>
    props.active &&
    `   opacity: 1;
    `}
`;
