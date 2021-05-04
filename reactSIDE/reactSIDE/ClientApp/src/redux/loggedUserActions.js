export const LOGGING_USER = "LOGGING_USER";

export const loggingUser = (login, id) => ({
  type: LOGGING_USER,
  payload: {
    id,
    login,
  },
});
