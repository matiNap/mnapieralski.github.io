import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { REHYDRATE } from "redux-persist/es/constants";
import { firestore } from "../Firebase";
import { SkillsType, Project } from "../types";

const initialState: {
  darkTheme: boolean;
  aboutMe: null | string;
  experience: null | any[];
  projects: null | Project[];
  skills: null | SkillsType;
} = {
  darkTheme: false,
  aboutMe: null,
  experience: null,
  projects: null,
  skills: null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    checkDarkTheme(state, action) {
      state.darkTheme = action.payload;
    },
    getAboutMe(state, action) {
      state.aboutMe = action.payload;
    },
    getExperience(state, action) {
      state.experience = action.payload;
    },
    getSkills(state, action) {
      if (action.payload) {
        const { key, data } = action.payload;
        state.skills = {
          ...state.skills,
          [key]: data,
        };
      } else state.skills = action.payload;
    },
    getProjects(state, action) {
      state.projects = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state) => {
      return {
        ...initialState,
        darkTheme: state.darkTheme,
      };
    },
  },
});

export const {
  switchTheme,
  checkDarkTheme,
  getAboutMe,
  getExperience,
  getSkills,
  getProjects,
} = appSlice.actions;

export default appSlice.reducer;

export const selectDarkTheme = (state: RootState) => state.app.darkTheme;
export const selectAboutMe = (state: RootState) => state.app.aboutMe;
export const selectExperience = (state: RootState) => state.app.experience;
export const selectSkills = (state: RootState) => state.app.skills;
export const selectProjects = (state: RootState) => state.app.projects;

export const fetchAboutMe = (): AppThunk => async (dispatch) => {
  try {
    const aboutMe = await firestore.collection("user").doc("aboutMe").get();
    const data: any = aboutMe.data();
    dispatch(getAboutMe(data?.info));
  } catch (error) {
    dispatch(getAboutMe(null));
  }
};
export const fetchExperience = (): AppThunk => async (dispatch) => {
  try {
    const experience = await firestore.collection("experience").get();
    const experienceData = experience.docs.map((docData) => docData.data());
    dispatch(getExperience(experienceData));
  } catch (error) {
    dispatch(getExperience(null));
  }
};

export const fetchSkills = (): AppThunk => async (dispatch) => {
  try {
    const skills = await firestore.collection("skills").get();

    skills.docs.forEach((docData) => {
      const data = docData.data()?.data;
      dispatch(getSkills({ key: docData.id, data }));
    });
  } catch (error) {
    console.log(error);
    dispatch(getSkills(null));
  }
};

export const fetchProjects = (): AppThunk => async (dispatch) => {
  try {
    const projects = await firestore.collection("projects").get();

    const projectsData = projects.docs.map((currentDoc) => ({
      id: currentDoc.id,
      ...currentDoc.data(),
    }));

    dispatch(getProjects(projectsData));
  } catch (error) {
    dispatch(getProjects(null));
  }
};
