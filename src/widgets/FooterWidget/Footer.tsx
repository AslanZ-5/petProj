import classes from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <span className={classes.footerInfo}>Сеть ветеринарных клиник Sweet Pets</span>
  </footer>
);

export default Footer;
