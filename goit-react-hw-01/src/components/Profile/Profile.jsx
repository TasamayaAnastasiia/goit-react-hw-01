import styles from './Profile.module.css';

const Profile = props => {
  return (
    <div className={styles.containerForUser}>
      <div className={styles.boxIconUser}>
        <img className={styles.imgUser} src={props.image} alt="User avatar"/>
        <p className={`${styles.infUser} ${styles.black}`}>{props.name}</p>
        <p className={styles.infUser}>@{props.tag}</p>
        <p className={styles.infUser}>{props.location}</p>
      </div>

      <ul className={styles.thumbFlwUser}>
        <li className={styles.optThumb}>
          <span className={styles.textInfFlw}>Followers</span>
          <span className={`${styles.textInfFlw} ${styles.black}`}>{props.stats.followers}</span>
        </li>
        <li className={styles.optThumb}>
          <span className={styles.textInfFlw}>Views</span>
          <span className={`${styles.textInfFlw} ${styles.black}`}>{props.stats.views}</span>
        </li>
        <li className={styles.optThumb}>
          <span className={styles.textInfFlw}>Likes</span>
          <span className={`${styles.textInfFlw} ${styles.black}`}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
