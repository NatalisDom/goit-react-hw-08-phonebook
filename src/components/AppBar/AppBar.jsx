import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = false;

  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
