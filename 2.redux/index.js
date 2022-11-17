const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("로깅:", action);
  // 기능 추가
  next(action);
  // 기능 추가
};

// thunkMiddleware는 아래 코드가 끝이라서 불러올 가치가 없다
// 기본적으로 action은 객체
const thunkMiddleware = (store) => (next) => (action) => {
  //비동기는 함수로 넣어주겠다는 약속
  if (typeof action === "function") {
    return action(store.dispatch, store.getStats);
  }

  // 동기
  return next(action);
};

const enhancer = applyMiddleware(
  firstMiddleware,
  // 비동기를 제어하는 가장 유명한 미들웨어
  thunkMiddleware
);

const store = createStore(reducer, initialState, enhancer);

console.log(store.getState());

// 위 부분까지는 미리 만들어 놔야하는 코드
//___________________________________
// 아래 코드는 리액트에서 실행하는 코드, 즉 dispatch 부분은 리액트에서

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요, 리덕스",
//   })
// );
//
// store.dispatch(
//   addPost({
//     userId: 2,
//     id: 2,
//     content: "안녕하세요, 리덕스2",
//   })
// );
//
// console.log(store.getState());
