export const LOGGING_USER = "LOGGING_USER";

export const loggingUser = (login) => ({
  type: LOGGING_USER,
  payload: {
    login,
  },
});
