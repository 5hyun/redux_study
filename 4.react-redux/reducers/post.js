const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  // 동기적, 내부적인 것(postReducer 안에 있는 actions)
  reducers: {
    // postSlice.actions.clearPost로 접근이 가능하다.
    clearPost(state, action) {
      state.data = [];
    },
  },
  // 비동기적, 외부적인 것(postReducer 밖에 있는 actions), thunk로 만든 것들
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      .addMatcher(
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {}
      )
      .addDefaultCase((state, action) => {
        //default
      }),
});

module.exports = postSlice;
