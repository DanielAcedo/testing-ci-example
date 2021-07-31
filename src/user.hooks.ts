import React from 'react';
import { User } from './model';

export const useUser = (initialUser: User) => {
  const [user, setUser] = React.useState(initialUser);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setUser({ name: 'Jane', surname: 'Smith' });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return {
    user,
    setUser,
  };
};
