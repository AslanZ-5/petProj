import { useLocation, Link } from 'react-router-dom';
import Ihome from '../../assets/breadcrumbs/HomeIcon.svg';

import classes from './Breadcrumbs.module.scss';

interface LocationT {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null;
}

const Breadcrumbs = () => {
  const location = useLocation() as LocationT;

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={classes.crumb} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className={classes.crumbs}>
      <div>
        <Link to="/" className={classes.homeLink}>
          <img src={Ihome} alt="HomePage" />
        </Link>
      </div>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
