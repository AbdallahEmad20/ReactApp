import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./rtk/AuthSlice";
export const MyStore =configureStore({
    reducer :{AuthSlice}
})