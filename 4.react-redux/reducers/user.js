const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "post",
  initialState,
  // 동기적, 내부적인 것(postReducer 안에 있는 actions)
  reducers: {
    // 요렇게 만들면 toolkit이 알아서 action을 만들어줘서 action을 굳이 만들 필요가 없다.
    logOut(state, action) {
      state.data = null;
    },
  },
  // 비동기적, 외부적인 것(postReducer 밖에 있는 actions, 보통 네트워크 요청/setTimeout)
  // 이제 actions 폴더는 동기 요청을 위한 폴더가 될 것이다.
  // 여기에 있는 것들은 외부에 있는 것이라서 다른 reducer에 가져가서 사용할 수 있다.
  extraReducers: {
    // 객체의 동적 다이나믹 속성
    [logIn.pending](state, action) {
      // user/logIn/pending
      // 로그인중에 나타나는 빙글빙글 모양이라 생각하면된다.
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      // user/logIn/fulfilled
      // action의 data를 action.payload라고 표현한다.
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      // user/logIn/rejected
      state.data = null;
      state.isLoggingIn = false;
    },
  },
});

module.exports = userSlice;
