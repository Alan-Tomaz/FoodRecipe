import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const recipeId = action.payload.idFood;
      const isFavorite = state.favoriterecipes.some((rec) => rec.idFood === recipeId);
      if (isFavorite) {
        state.favoriterecipes = state.favoriterecipes.filter((rec) => rec.idFood !== recipeId);
      } else {
        state.favoriterecipes.push(recipe);
      }
    }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
