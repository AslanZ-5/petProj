import { format, parseJSON } from 'date-fns';

import { ICommentDto } from 'types/UserDTO/UserDTO';
// import { useAppSelector } from 'hooks/redux';
import { useToggleLikeMutation, useDeleteCommentMutation } from 'services/user/CommentApi';
import { ru } from 'date-fns/locale';

import fingerUp from 'assets/CommentWidget/FingerUp.svg';
import busya from 'assets/CommentWidget/Busya.jpg';

import classes from './CommentWidget.module.scss';

interface ILikesControllerProps {
  likes: number,
  dislike: number,
  id: number
}

interface IContentControllerProps {
  id: number,
}

const LikesController = ({ id, likes, dislike }:ILikesControllerProps):JSX.Element => {
  const [putLike] = useToggleLikeMutation();
  const [putDislike] = useToggleLikeMutation();

  return (
    <div className={classes.likes__controller}>
      <button
        type="button"
        className={classes.like}
        onClick={() => putLike({ id, positive: true })}
      >
        <img src={fingerUp} alt="Put like" />
        <span>{likes}</span>
      </button>
      <button
        type="button"
        className={classes.dislike}
        onClick={() => putDislike({ id, positive: false })}
      >
        <img src={fingerUp} alt="Put dislike" />
        <span>{dislike}</span>
      </button>
    </div>
  );
};

const ContentController = ({ id }:IContentControllerProps):JSX.Element => {
  const [deleteComment] = useDeleteCommentMutation();

  return (
    <div className={classes.content__controller}>
      <button
        className={classes.edit}
      >
        <span>Edit</span>
      </button>
      <button
        className={classes.delete}
        onClick={() => deleteComment(id)}
      >
        <span>Delete</span>
      </button>
    </div>
  );
};

const CommentWidget = ({ id, content, dateTime, likes, dislike, UserInfoDto }: ICommentDto): JSX.Element => {
  // const user = useAppSelector((state) => state.user);
  // const authorId = UserInfoDto.id;
  const authorName = `${UserInfoDto.firstname} ${UserInfoDto.lastname}`;
  const date = format(parseJSON(dateTime), 'd LLLL yyyy', { locale: ru });

  return (
    <li className={classes.comment__container}>
      <div className={classes.authorInfo}>
        <img src={busya} alt="Author avatar" />
        <a href='#'><span>{authorName}</span></a>
      </div>
      <div className={classes.content__container}>
        <div className={classes.date}><span>{date}</span></div>
        <div className={classes.content}>
          <p>{content}</p>
          <ContentController id={id} />
        </div>
        <LikesController id={id} likes={likes} dislike={dislike} />
      </div>
    </li>
  );
};

export default CommentWidget;
