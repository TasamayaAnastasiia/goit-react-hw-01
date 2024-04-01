import clsx from 'clsx';
import css from './FriendListItem.module.css'

const FriendListItem = props => {
    return (
        <div className={css.boxInfUser}>
            <img src={props.avatar} alt="Avatar" width="48" />
            <p className={css.nameUser}>{props.name}</p>
            <p className={clsx(props.isOnline ? `${css.greenText}` : `${css.redText}`)}>{props.isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}
export default FriendListItem;