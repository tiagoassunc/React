import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

// Reducers rules
/*
Must return any value besides 'undefined

Producess 'state', or data to be used inside of your app using only previous state and the action

Must not return reach 'out of itself' to decide what value to return (reducers are pure)

(MISLEADING) => Must not mutate its input 'state' argument
*/
