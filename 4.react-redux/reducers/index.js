const { combineReducers } = require("redux");
// slice는 단순히 reducer뿐만 아니라 reducer, action, initialState 등이 들어있다.
// 보통 action은 reducer에 종속되어 있다. 이것을 나누지말고 합쳐버리자라는 의미에서 slice가 나왔다. 그룹으로 만들자는 느낌
const userSlice = require("./user");
const postSlice = require("./post");

module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});
