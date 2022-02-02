import styled from "styled-components";

export const StatisticsSection = styled.section`
  width: 330px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: rgba(108, 107, 114, 0.493);
  text-align: center;
  padding: 5px 0px 0px 0px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;
