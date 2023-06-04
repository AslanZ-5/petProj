import cn from 'classnames';

import classes from './PopupWidget.module.scss';

interface PopupProps {
  active: boolean; // состояние модалки в настоящее время.
  children: JSX.Element;
}

const PopupWidget = ({ active, children }: PopupProps) => (
  <div
    className={active ? cn(classes.popupWidget, classes.popupWidget_active) : classes.popupWidget}
  >
    <div
      className={active ? cn(classes.popupWidget_content, classes.popupWidget_content_active) : classes.popupWidget_content}
    >
      {children}
    </div>
  </div>
);
export default PopupWidget;
