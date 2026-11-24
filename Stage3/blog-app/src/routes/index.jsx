import { Loading } from '../shared/components/Loading';
import { AuthRoutes } from './auth';
import { ProtectedRoutes } from './protected';

export const Router = () => {
  const isLoading = false; // dynamic
  const isAuthUser = true; // dynamic

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthUser) {
    return <ProtectedRoutes />;
  }

  return <AuthRoutes />;
};
