import create from 'zustand';

const useUserStore = create((set) => ({
  authenticated: false,
  user: {
    _id: '',
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
  updateAppointments: (apt) =>
    set((state) => ({
      user: {
        ...state.user,
        appointments: apt,
      },
    })),
}));

export default useUserStore;
