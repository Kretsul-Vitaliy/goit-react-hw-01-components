import PropTypes from 'prop-types';
import { FriendWrap } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export default function FriendList ({ friends }) {
    return (
        <FriendWrap>
            {friends.map((friend) => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}>
                    </FriendListItem>
                );
            }
            )}
</FriendWrap>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
  
};