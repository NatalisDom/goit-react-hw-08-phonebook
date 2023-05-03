import css from './RegisterView.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const view = event.currentTarget;

    dispatch(
      register({
        name: view.elements.name.value,
        email: view.elements.email.value,
        password: view.elements.password.value,
      })
    );

    view.reset();
  };

  return (
    <view className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </view>
  );
};
