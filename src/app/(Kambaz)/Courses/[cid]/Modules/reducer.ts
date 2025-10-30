import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../../Database/index";  // Add /index

interface Lesson { _id: string; name: string }
interface Module {
  _id: string;
  lessons: Lesson[];
  name: string;
  course: string;
  editing?: boolean;
}

interface ModulesState { modules: Module[] }

const initialState: ModulesState = {
  modules: db.modules as Module[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (
      state,
      { payload: module }: PayloadAction<{ name: string; course: string }>
    ) => {
      const newModule: Module = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }: PayloadAction<string>) => {
      state.modules = state.modules.filter((m: Module) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }: PayloadAction<Module>) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }: PayloadAction<string>) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;

