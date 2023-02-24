import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const loadSavedRecipes = createAsyncThunk(
      "app/loadSavedRecipes",
      async () => {
            const savedRecipes = await axios.get("http://localhost:8080/saved").then((res) => res.data).catch((err) => console.log(err));
            return savedRecipes;
      }
);


export const appSlice = createSlice({
      name: "app",
      initialState: {
            savedRecipes: [],
            appStateLoaded: false,
      },
      reducers: {
            addSavedRecipe: (state, action) => {
                  state.savedRecipes.push(action.payload as never);
            }

      },
      extraReducers: (builder) => {
            builder.addCase(loadSavedRecipes.fulfilled, (state, action) => {
                  state.savedRecipes = action.payload;
                  state.appStateLoaded = true;
            });
            builder.addCase(loadSavedRecipes.rejected, (state, action) => {
                  state.appStateLoaded = true;
            }
            );
            builder.addCase(loadSavedRecipes.pending, (state, action) => {
                  state.appStateLoaded = false;
            }
            );
      }
});

export const selectSavedRecipes = (state: any) => state.app.savedRecipes;
export const selectAppStateLoaded = (state: any) => state.app.appStateLoaded;

export const { addSavedRecipe } = appSlice.actions;

export default appSlice.reducer;


