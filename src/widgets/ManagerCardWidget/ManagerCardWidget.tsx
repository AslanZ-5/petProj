import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ManagerNewsResponseDto } from 'types/ManagerDTO/ManagerDTO';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import classes from './ManagerCardWidget.module.scss';

type CardProps = {
  item: ManagerNewsResponseDto;
  handleDeleteNews: (id: number) => void;
  handleUnpublishNews: (id: number) => void;
};

const ManagerCardWidget = ({
  item,
  handleDeleteNews,
  handleUnpublishNews,
}: CardProps): JSX.Element => {
  const { title, important, id, type, content, endTime, published } = item;

  return (
    <article className={classes.widget}>
      <h5 className={classes.important}>
        {important ? 'Важная' : 'Не важная'}
      </h5>
      <div className={classes.info}>
        ID:
        <span>{id}</span>
      </div>
      <div className={classes.info}>
        Тип:
        <span>{type}</span>
      </div>
      <div className={classes.info}>
        Срок годности: до
        <span>{format(parseISO(endTime), 'dd LLLL, y', { locale: ru })}</span>
      </div>
      <div className={classes.info}>
        Статус:
        <span>{published ? 'Опубликованно' : 'Не опубликованно'}</span>
      </div>
      <hr />
      <div className={classes.header_w}>
        <h3 className={classes.header}>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={classes.shadow} />
      <div className={classes.buttons}>
        <div className={classes.btnIcons}>
          <EditOutlined className={classes.editI} />
          <DeleteOutlined
            onClick={() => handleDeleteNews(id)}
            className={classes.deleteI}
          />
        </div>

        <button
          className={classes.unpublic}
          onClick={() => handleUnpublishNews(id)}
        >
          Снять с публикации
        </button>
      </div>
    </article>
  );
};

export default ManagerCardWidget;
