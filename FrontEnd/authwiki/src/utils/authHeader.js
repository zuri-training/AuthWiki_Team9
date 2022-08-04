const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Token ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
