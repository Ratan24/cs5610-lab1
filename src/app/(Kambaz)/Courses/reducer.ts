import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description: string;
  department?: string;
  credits?: number;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addNewCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [...state.courses, action.payload];
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
  },
});

export const { setCourses, addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;