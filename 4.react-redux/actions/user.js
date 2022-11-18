const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

//data는 로그인 할 유저의 데이터
const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log(data);
  // throw new Error("비밀번호가 틀렸습니다.");
  // 서버가 보내준 응답이라고 보면된다
  // try, catch가 없으면 thunk가 무조건 fulfilled(성공) 상태로 간다.
  // createAsyncThunk에서는 try, catch를 안 붙이는 것이 좋다.
  const result = await delay(
    500,
    // 이 값들이 reducers에서 action.payload
    {
      userId: 1,
      nickname: "zerocho",
    }
  );
  // 서버에서 온 응답이 fulfilled 전달이 된다.
  return result;
});

module.exports = {
  logIn,
};
