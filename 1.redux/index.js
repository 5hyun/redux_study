const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

console.log(store.getState());

const logIn = (data) => {
  // action
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

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

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요, 리덕스",
  })
);

store.dispatch(
  addPost({
    userId: 2,
    id: 2,
    content: "안녕하세요, 리덕스2",
  })
);

console.log(store.getState());
