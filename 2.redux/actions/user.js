// async action creator, 비동기일땐 함수를 리턴해야함
// 동기 action들 간의 순서를 속이는 것이 비동기이다
const logIn = (data) => {
  return (dispatch, getState) => {
    // 로그인 요청
    dispatch(logInRequest(data));

    try {
      //로그인 성공
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      //로그인 실패
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

// sync action creator
const logOut = () => {
  // action
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
