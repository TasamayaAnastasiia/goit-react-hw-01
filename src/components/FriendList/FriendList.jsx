import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from '../FriendList/FriendList.module.css';

const FriendList = props => {
    return (
        <ul className={css.listUser}>
            {props.friends.map(friend => {
                return (
                    <li className={css.optListUser} key={friend.name}>
                        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}></FriendListItem>
                    </li>
                );
            })}
        </ul>

    );
}
export default FriendList;