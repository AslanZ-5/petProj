import { useGetAllNewsQuery } from 'services/manager/managerNewsApi';
import ManagerCardWidget from 'widgets/ManagerCardWidget';
import ManagerSidebarWidget from 'widgets/ManagerSidebarWidget';
import classes from './ManagerNews.module.scss';

const ManagerNews = () => {
  const { data = [], isLoading, error } = useGetAllNewsQuery();

  const handleDeleteNews = (id: number) => {

  };

  const handleUnpublishNews = (id: number) => {

  };

  return (

    <div style={{ display: 'flex' }}>
      <ManagerSidebarWidget />
      {isLoading && 'Loading...' }
      {error && <div>{error}</div>}
      <div className={classes.wrapper}>
        {data?.map((item) => <ManagerCardWidget
          key={item.id}
          item={item}
          handleDeleteNews={handleDeleteNews}
          handleUnpublishNews={handleUnpublishNews}
        />)}
      </div>

    </div>
  );
};

export default ManagerNews;
