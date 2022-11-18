const { produce } = require("immer");

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    // 새로운 state 만들어주기
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT":
        draft.data = null;
        break;
      default:
        return prevState;
    }
  });
};

module.exports = userReducer;
