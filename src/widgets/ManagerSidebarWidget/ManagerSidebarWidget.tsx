import { linkList } from 'const/LandingObjects';
import { Link } from 'react-router-dom';
import classes from './ManagerSidebarWidget.module.scss';

const ManagerSidebarWidget = (): JSX.Element => {
  const paths: string[] = ['/#', '/manager/news', '/#'];
  const links: JSX.Element[] = linkList.map(
    (link: string, index: number): JSX.Element => (
      <li key={link} className={`${classes.lItem}`}>
        <Link to={paths[index]}>{link}</Link>
      </li>
    )
  );

  return (
    <nav className={classes.sidebar}>
      <ul>{links}</ul>
    </nav>
  );
};

export default ManagerSidebarWidget;
