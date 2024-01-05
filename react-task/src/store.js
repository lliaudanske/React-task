// src/store.js
import create from 'zustand';

const useStore = create((set) => ({
  users: [],
  addUser: (newUser) =>
    set((state) => {
      if (state.users.some((user) => user.username === newUser.username)) {
        throw new Error('Username is already taken.');
      }
      return { users: [...state.users, newUser] };
    }),
  loginUser: (username, password) =>
    set((state) => {
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        return { currentUser: user };
      } else {
        throw new Error('Invalid credentials.');
      }
    }),
  currentUser: null,
}));

export default useStore;
