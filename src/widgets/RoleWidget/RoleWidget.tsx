import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthSuccess } from 'hooks/useAuthSuccess';
import { useLogOutMutation } from 'services/Auth/AuthAPI';
import { store } from 'store/store';
import userAvatar from 'assets/img/RoleWidget/logo-usr-mini.webp';

import classes from './RoleWidget.module.scss';

interface IRoleWidgetProps {
  name?: string;
  image?: string;
}

const RoleWidget = ({
  name = 'NoName',
  image = userAvatar,
}: IRoleWidgetProps): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const { role } = useAuthSuccess();
  const userRoleLowerCase = role.toLowerCase();
  const [logOut] = useLogOutMutation();
  const navigate = useNavigate();

  const { user } = store.getState();
  const token = user.jwtToken;

  const handleError = (message: string): never => {
    throw new Error(`Error: ${message}`);
  };
  const handlerLogOut = async () => {
    try {
      await logOut(token).unwrap();
      navigate('/sign-in');
      setVisible((prev) => !prev);
    } catch (err) {
      handleError(err.status);
    }
  };

  const toggleVisible = (): void => {
    setVisible((prev) => !prev);
  };

  const expandButtonClass = visible
    ? `${classes.btn_expand} ${classes.btn_expand_expanded}`
    : `${classes.btn_expand}`;
  const exitButtonClass = visible
    ? classes.btn_logout_visible
    : classes.btn_logout_invisible;

  return (
    <div className={classes.roleWidget__container}>
      <button className={classes.btn_notifications} type="button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4286 12.5714H13V6.49997C13 3.98032 11.1375
            1.89818 8.71429 1.55175V0.857108C8.71429 0.462465 8.39464 0.142822 8 0.142822C7.60536 0.142822
            7.28571 0.462465 7.28571 0.857108V1.55175C4.8625 1.89818 3 3.98032 3 6.49997V12.5714H2.57143C2.25536
            12.5714 2 12.8268 2 13.1428V13.7143C2 13.7928 2.06429 13.8571 2.14286 13.8571H6C6 14.9607 6.89643
            15.8571 8 15.8571C9.10357 15.8571 10 14.9607 10 13.8571H13.8571C13.9357 13.8571 14 13.7928 14 13.7143V13.1428C14
            12.8268 13.7446 12.5714 13.4286 12.5714ZM8 14.7143C7.52679 14.7143 7.14286 14.3303 7.14286
            13.8571H8.85714C8.85714 14.3303 8.47321 14.7143 8 14.7143ZM4.28571 12.5714V6.49997C4.28571 5.50711 4.67143
            4.57497 5.37321 3.87318C6.075 3.17139 7.00714 2.78568 8 2.78568C8.99286 2.78568 9.925 3.17139 10.6268 3.87318C11.3286
            4.57497 11.7143 5.50711 11.7143 6.49997V12.5714H4.28571Z"
          />
        </svg>
      </button>
      <div className={classes.userInfo}>
        <p className={classes.userInfo__name}>{name}</p>
        <p className={classes.userInfo__role}>{userRoleLowerCase}</p>
      </div>
      <button
        className={expandButtonClass}
        onClick={toggleVisible}
        type="button"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6L8.5 11.5L14 6" />
        </svg>
      </button>
      <img className={classes.userAvatar} src={image} alt="Profile avatar" />
      <Link
        to="/sign-in"
        onClick={handlerLogOut}
        className={`${classes.btn_logout} ${exitButtonClass}`}
        type="button"
      >
        <span>Выход</span>
      </Link>
    </div>
  );
};

export default RoleWidget;
