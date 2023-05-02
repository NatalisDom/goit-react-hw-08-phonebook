import css from './LoginView.module.css';

export const LoginView= () => {
  //   const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const view = event.currentTarget;
    //  dispatch(
    //    logIn({
    //      email: view.elements.email.value,
    //      password: view.elements.password.value,
    //    })
    //  );
    view.reset();
  };

  return (
    <view className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </view>
  );
};
