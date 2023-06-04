import { Link, Outlet, useLocation } from 'react-router-dom';

import { CSSProperties } from 'react';

import Input from 'shared/Input/Input';
import useInput from 'hooks/useInput';
import classes from './AdminPage.module.scss';
import routs from './routs';

function AdminPage() {
  const searchInput = useInput('');

  const path = useLocation().pathname.split('/')[2];

  const navigations = routs.map((element, index) => {
    // В соответствии с макетом, у элемента с индексом 5 увеличенный отступ. В случае, если высота меньше 666px
    // Для улучшения адаптива я делаю увеличенный отступ чуть меньше.

    const itemStyle: CSSProperties =
      // eslint-disable-next-line no-nested-ternary
      index !== 5 ? {} : window.innerHeight >= 666 ? { marginBottom: '46px' } : { marginBottom: '20px' };

    return (
      <li key={element.label} className={classes.navAdmin__item} style={itemStyle}>
        <Link className={classes.navAdmin__link} to={element.label}>
          <img
            className={classes.navAdmin__icon}
            src={element.icon}
            alt={`${element.label} icon`}
          />
          <span className={classes.navAdmin__label}>{element.label}</span>
        </Link>
      </li>
    );
  });

  return (
    <div className={classes.adminPageContainer}>
      <div className={classes.wrapperAside}>
        <aside className={classes.aside}>
          <span className={classes.aside__dashboard}>
            Dashboard
          </span>
          <nav className={classes.navAdmin}>
            <ul className={classes.navAdmin__list}>
              {navigations}
            </ul>
          </nav>
        </aside>
      </div>
      <div className={classes.adminMain}>
        <div className={classes.adminMain__search}>
          <Input icon {...searchInput} />
        </div>
        <div className={classes.adminMain__wrapperContent}>
          <header className={classes.adminMain__header}>
            <h1 className={classes.adminMain__title}>
              {`Admin ${path ? `/ ${path[0].toUpperCase() + path.substring(1)}` : ''}`}
            </h1>
          </header>
          <section className={classes.adminMain__content}>
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
