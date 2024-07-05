import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

const store = configureStore({ reducer: { tasks: tasksReducer } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
