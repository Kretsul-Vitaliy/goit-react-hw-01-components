import styled from "styled-components";

export const Table = styled.table`
  width: 800px;
  margin: 20px auto;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  display: block;
`;

export const Thead = styled.thead`
  background-color: #20bed6;
  border-radius: 8px 8px 0px 0px;
`;

export const Items = styled.th`
  width: calc(100% / 3);
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;
export const ItemsTableData = styled.td`
  border: 1px solid #d8d0d0;
  width: 300px;
  padding: 10px;
  text-transform: capitalize;
  font-weight: 500;
`;

export const TableBody = styled.tbody`
  background-color: #ffffff;
`;
export const Title = styled.tr`
  /* background-color: rgb(219, 211, 211); */
  :nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
