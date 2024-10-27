import css from './Message.module.css';

const Message = ({ title }) => {
  return <p className={css.notification}>{title}</p>;
};

export default Message;
