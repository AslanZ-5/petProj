import ManagerSidebarWidget from 'widgets/ManagerSidebarWidget';
import classes from './ManagerPage.module.scss';

function ManagerPage() {
  return (
    <div className={classes.wrapper}>
      <ManagerSidebarWidget />
    </div>
  );
}

export default ManagerPage;
