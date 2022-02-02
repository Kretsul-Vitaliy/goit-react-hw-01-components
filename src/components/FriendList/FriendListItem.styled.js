import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? "green" : "red";
  }};
  margin-left: 8px;
`;

export const Avatar = styled.img`
  margin: 4px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
`;
