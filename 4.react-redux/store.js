const { configureStore } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

const firstMiddleware = (store) => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

const store = configureStore({
  reducer,
  // 커스텀 미들웨어를 넣고 기존 미들웨어도 넣으려면 concat() 안에 적으면 된다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  // 이건 initialState인데 ssr에서만 사용한다.
  // preloadedState
});

module.exports = store;
