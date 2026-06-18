const initialAuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const selectAuth = (state) => state.auth ?? initialAuthState;

export const selectUser = (state) => selectAuth(state).user;

export const selectIsAuthenticated = (state) =>
    selectAuth(state).isAuthenticated;

export const selectAuthLoading = (state) => selectAuth(state).loading;

export const selectAuthError = (state) => selectAuth(state).error;
