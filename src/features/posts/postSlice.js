import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

const initialState = {
    isLoading: false,
    posts: [],
    isError: false,
    error: null
};

// fetch post 
export const fetchPosts = createAsyncThunk("posts/fetchPosts",
    async () => {
        const posts = await getPosts();
        return posts;
    });
// create slice
const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.posts = [];
                state.error = action.error.message
            })
    }
});
export default postsSlice.reducer;