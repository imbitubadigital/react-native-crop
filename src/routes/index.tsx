import React from 'react';
// import Loading from '~/components/Loading';
// import AppAuth from './auth.routes';
import AppRoutes from './app.routes';
// import {useAuth} from '~/hooks/auth';

const Routes: React.FC = () => {
  // const {loading, user} = useAuth();

  //   if (loading) {
  //     return <Loading />;
  //   }

  // return user ? <AppRoutes /> : <AppAuth />;

  return <AppRoutes />;
};

export default Routes;
