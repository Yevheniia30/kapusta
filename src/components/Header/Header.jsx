import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLogin } from 'redux/user/authSelectors';
import { logout } from 'redux/user/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogin);

  const handleExit = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h3>Kapusta</h3>
      {isLogin && (
        <div>
          <p>{user?.email}</p>
          <button type="button" onClick={handleExit}>
            Exit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
