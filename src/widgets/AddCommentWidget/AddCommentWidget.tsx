import { useAddCommentToTopicMutation } from 'services/user/TopicApi';
import tiger from 'assets/img/tiger.svg';

import { Field, Form, Formik } from 'formik';
import classes from './AddCommentWidget.module.scss';

interface AddCommentType {
  avatarUser?: string; // Сюда передать аватарку клиента. По умолчанию стоит заглушка.
  topicId: number;
  handleOpenInfoSubmit: () => void; // checkbox для открытия информации рядом с аватаркой над кнопкой send;
}

function AddCommentWidget({ avatarUser, topicId, handleOpenInfoSubmit }: AddCommentType): JSX.Element {
  const avatar = !avatarUser ? tiger : avatarUser;
  const [addComment, { isError }] = useAddCommentToTopicMutation();

  const onSubmitFormik = (value: string) => addComment({ id: topicId, body: value });

  return (
    <div className={classes.commentWidget_container}>
      <img className={classes.avatarUser} src={avatar} alt='avatar user' />

      <Formik
        initialValues={{ body: '' }}
        onSubmit={(values, { resetForm }) => {
          onSubmitFormik(values.body);
          if (!isError) resetForm();
          /*
          Обработчик события отправки формы.
          Вызывает функцию для добавления комментария к теме с указанным идентификатором,
          где id индификатор коментария, body введеный текс.
          Сбрасывает значения формы после успешной отправки.
          */
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.commentsForm}>
            <Field className={classes.textarea} placeholder='Add a comment...' as="textarea" name="body" />
            <div className={classes.submitContainer}>
              <div className={classes.img_submitContainer}>
                <img className={classes.avatarUser_submitContainer} src={avatar} alt='avatar user' />
                <label className={classes.submitOpenInfo}>
                  <input name="checkbox" type="checkbox" onChange={handleOpenInfoSubmit} />
                </label>
              </div>
              <input className={classes.submitSend} disabled={isSubmitting} type="submit" value="Send" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCommentWidget;
