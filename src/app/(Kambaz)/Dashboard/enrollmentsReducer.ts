import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EnrollmentOrCourse = any;

interface EnrollmentsState {
  enrollments: EnrollmentOrCourse[];
}

const initialState: EnrollmentsState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<EnrollmentOrCourse[]>) => {
      state.enrollments = action.payload;
    },
    enrollInCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const newEnrollment = {
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollFromCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
  },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;