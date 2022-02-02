import PropTypes from 'prop-types';
import { Table, Thead, Items, TableBody, Title, ItemsTableData } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
    return (
        <Table>
            <Thead>
                <tr>
                <Items>Type</Items>
                <Items>Amount</Items>
                <Items>Currency</Items>
                </tr>
            </Thead>

            <TableBody>
                {items.map(({amount, currency, type, id}) => {
                    return (
                        <Title key={id}>
                        <ItemsTableData>{type}</ItemsTableData>
                        <ItemsTableData>{amount}</ItemsTableData>
                        <ItemsTableData>{currency}</ItemsTableData>
                        </Title>
                    );
                }

                    )}
            </TableBody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
  
};