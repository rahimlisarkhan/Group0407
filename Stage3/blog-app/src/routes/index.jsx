import { Loading } from '../shared/components/Loading';
import { useGlobalStore } from '../shared/store/global/useGlobalStore';
import { AuthRoutes } from './auth';
import { ProtectedRoutes } from './protected';

export const Router = () => {
  const isLoading = false; // dynamic

  const { isAuthenticated } = useGlobalStore();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <ProtectedRoutes />;
  }

  return <AuthRoutes />;
};
