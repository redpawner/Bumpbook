import create from 'zustand';

const useUserStore = create((set) => ({
  authenticated: true,
  user: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    dueDate: '',
    favNames: [],
    appointments: [
      { title: 'silly', date: '2022-07-27T08:46:00Z' },
      { title: 'silly', date: '2022-08-27T08:46:00Z' },
    ],
    pictures: [],
  },
  login: () => set({ authenticated: true }),
  logout: () => set({ authenticated: false }),
  updateUser: (res) => set({ user: res }),
}));

export default useUserStore;
