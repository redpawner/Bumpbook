import create from 'zustand';

const useUserStore = create((set) => ({
  authenticated: false,
  name: 'GAry',
}));

export default useUserStore;
