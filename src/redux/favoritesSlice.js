import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipeId = action.payload;
      const isFavorite = state.favoriterecipes.includes(recipeId);
      if (isFavorite) {
        state.favoriterecipes = state.favoriterecipes.filter((id) => id !== recipeId);
      } else {
        state.favoriterecipes.push(recipeId);
      }
    }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
