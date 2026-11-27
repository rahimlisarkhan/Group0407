import { useContext } from 'react';
import { GlobalStoreContext } from './GlobalStore';

export const useGlobalStore = () => {
  const value = useContext(GlobalStoreContext);

  return value;
};
