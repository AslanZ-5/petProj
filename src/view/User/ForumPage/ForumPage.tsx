import { Alert } from 'antd';
import { CustomPagination } from 'shared';

import { useGetAllBaseTopicsQuery } from 'services/user/TopicApi';
import { useEffect, useState } from 'react';
import { ITopicDto } from 'types/UserDTO/UserDTO';
import TopicWidget from 'widgets/TopicWidget/TopicWidget';

import LoaderWidget from 'shared/Loader';
import classes from './ForumPage.module.scss';

function ForumPage(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>((page - 1) * 10);
  const [topics, setTopics] = useState<ITopicDto[]>([]);
  const { data, isLoading, isError, isSuccess } = useGetAllBaseTopicsQuery();

  useEffect(() => {
    if (!isLoading) {
      setTopics(data || []);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setOffset(() => (page - 1) * 10);

    // При переключении страницы пагинации, срабатывает плавный скролл к верху страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const loading = isLoading && <LoaderWidget />;

  const topicsSlice = topics?.slice(offset, offset + 10)?.map((el) => (
    <li key={el.id}>
      <TopicWidget {...el} />
    </li>
  ));
  const errorMessage = isError ? (
    <Alert
      message="Упс, что-то пошло не так"
      description="Попробуйте позже"
      type="error"
      showIcon
      closable
    />
  ) : null;

  const total = data?.length || 0;

  return (
    <section className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1 className={classes.pageTitle}>Форум</h1>
        </header>
        <main className={classes.content}>
          {errorMessage}
          {loading}
          <ul className={classes.content__list}>{topicsSlice}</ul>
        </main>
      </div>
      <div className={classes.pagination}>
        {isSuccess && (
          <CustomPagination
            currentPage={page}
            totalItems={total}
            itemsOnPage={10}
            setPage={(page) => setPage(() => page)}
          />
        )}
      </div>
    </section>
  );
}

export default ForumPage;
