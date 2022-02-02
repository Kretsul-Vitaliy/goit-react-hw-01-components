// import styles from './socialprofile.module.css'
import PropTypes from 'prop-types';
import { Profile, Description, Avatar, Name, Tag, Location, Stats, StatsList, Label, Quantity } from './SocialProfile.styled';

export default function SocialProfile({ username, tag, location, avatar, stats }) {
    const { followers, likes, views } = stats;
    return (
        <Profile>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                    
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatsList>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsList>
                <StatsList>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsList>
                <StatsList>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsList>
            </Stats>
        </Profile>
    );
}

SocialProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};