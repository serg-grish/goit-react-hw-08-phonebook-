export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//   getIsLoggedIn,
//   getUserName,
//   getIsFetchingCurrent,
// };

// export default authSelectors;
