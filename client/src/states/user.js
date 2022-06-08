import create from 'zustand';

const useUserStore = create((set) => ({
  authenticated: false,
  user: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    dueDate: '',
    favNames: [],
    appointments: [],
    pictures: [],
  },
  login: () => set({ authenticated: true }),
  logout: () => set({ authenticated: false }),
  updateUser: (res) => set({ user: res }),
}));

export default useUserStore;
