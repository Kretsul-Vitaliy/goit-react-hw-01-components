import PropTypes from 'prop-types';
// import styles from '../Statistics/Statistics.module.css'
import { StatisticsSection, Title, StatList, StatListItem, Label, Percentage } from './Statistics.styled';
import getRandomHexColor from '../../helper/getRandomHexColor'
    
export default function Statistics({ title, stats }) {

    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatListItem
                        key={id}
                        style={{ backgroundColor: getRandomHexColor() }} >
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatListItem>
                ))
                }
        
            </StatList>
        </StatisticsSection>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};