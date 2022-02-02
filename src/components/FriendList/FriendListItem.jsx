import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem ({ avatar, name, status }) {
    return (
        <ListItem>
            <Status isOnline={status}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </ListItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};