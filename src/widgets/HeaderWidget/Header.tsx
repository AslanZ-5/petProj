import { NavLink, Link } from 'react-router-dom';
import { useAuthSuccess } from 'hooks/useAuthSuccess';
import RoleWidget from 'widgets/RoleWidget/RoleWidget';
import classes from './Header.module.scss';
import { routsHeaderArray } from './routs';

const HeaderButtons = (): JSX.Element => (
  <>
    <Link className={classes.link_mobile} to="/sign-in">
      Аккаунт
    </Link>
    <Link className={classes.link_signIn} to="/sign-in">
      Sign In
    </Link>
    <Link className={classes.link_register} to="/sign-up">
      Register
    </Link>
  </>
);

function Header(): JSX.Element {
  const { isAuth } = useAuthSuccess();
  const listLink = routsHeaderArray.map((el) => (
    <li key={el.label} className={classes.link}>
      <NavLink className={classes.navlink} to={el.path}>
        {el.label}
      </NavLink>
    </li>
  ));

  const controls = isAuth ? <RoleWidget /> : <HeaderButtons />;

  return (
    <header className={classes.header}>
      <Link className={classes.menu_mobile} to="" />
      <div className={classes.imgHeader} />
      <ul className={classes.listLink}>{listLink}</ul>
      <div className={classes.accountInfo}>{controls}</div>
    </header>
  );
}

export default Header;
