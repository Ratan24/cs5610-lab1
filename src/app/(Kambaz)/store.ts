import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./Dashboard/enrollmentsReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    accountReducer,
    enrollmentsReducer,
  },
});

export default store;