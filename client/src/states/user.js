import create from 'zustand';

const useUserStore = create((set) => ({
  authenticated: false,
  user: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    dueDate: null,
    favNames: [],
    appointments: [],
    pictures: [],
  },
  login: () => set({ authenticated: true }),
  logout: () => set({ authenticated: false }),
  updateUser: (res) => set({ user: res }),
  updateDate: (date) => {
    set((state) => ({
      user: {
        ...state.user,
        dueDate: date,
      },
    }));
  },
  updateAppointments: (apt) => {
    set((state) => ({
      user: {
        ...state.user,
        appointments: apt,
      },
    }));
  },
  updatePictures: (pic) => {
    set((state) => ({
      user: {
        ...state.user,
        pictures: pic,
      },
    }));
  },
}));

export default useUserStore;
