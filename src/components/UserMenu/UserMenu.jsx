import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.scss';


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
    <button type="button" className={styles.btn} onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
