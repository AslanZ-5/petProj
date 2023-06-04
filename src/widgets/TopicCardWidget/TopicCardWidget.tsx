import tiger from './tiger.svg';
// картинка tiger существует. на момент создания виджета не смерджена папка с картинкой -
// ->> подправить адрес картинки и удалить из папки TopicCardWidget картинку tiger

import classes from './TopicCardWidget.module.scss';

interface TopicCardWidgetProps {
  avatarAuthorComment?: string;
  name: string;
  children: JSX.Element;
}

const TopicCardWidget = ({ avatarAuthorComment, name, children }: TopicCardWidgetProps):JSX.Element => {
  const avatar = !avatarAuthorComment ? tiger : avatarAuthorComment;

  return (
    <section className={classes.topicCard_container}>
      <div className={classes.avatarBlock}>
        <img src={avatar} alt="avatar author comment " />
        <span>{name}</span>
      </div>
      <div className={classes.decorationBlock} />
      <div className={classes.topicCard_content}>
        {children}
      </div>
    </section>
  );
};

export default TopicCardWidget;
