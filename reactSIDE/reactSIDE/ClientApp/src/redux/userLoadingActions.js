export const LOAD_USERS = "LOAD_USERS";

export const loadUsers = (data) => ({
  type: LOAD_USERS,
  payload: {
    usersLoaded: data,
  },
});
