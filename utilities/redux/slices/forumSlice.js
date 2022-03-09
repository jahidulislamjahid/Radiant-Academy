import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForums = createAsyncThunk(
    'forum/fetchForums',
    async () => {
        const response = await fetch('https://radiant-academy.vercel.app/api/forums')
            .then(res => res.json())
        return response.data
    }
)

export const topicCreate = createAsyncThunk(
    'forum/topicCreate',
    async (forum) => {
        try {
            const response = await axios.post("https://radiant-academy.vercel.app/api/forums", forum);
            return response.data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const topicView = createAsyncThunk(
    'forum/topicView',
    async (forum) => {
        try {
            const response = await axios.put(`https://radiant-academy.vercel.app/api/forums/views/${forum._id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const topicReact = createAsyncThunk(
    'forum/topicReact',
    async (forum) => {
        try {
            const response = await axios.put(`https://radiant-academy.vercel.app/api/forums/reacts/${forum._id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)

const forumSlice = createSlice({
    name: 'forum',
    initialState: {
        forumsList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            // state.wishList.push(action.payload); 
        },
        removeFrom: (state, action) => {
            // state.wishList = state.wishList.filter(course => course.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchForums.fulfilled, (state, action) => {
            state.forumsList = action.payload;
            state.status = 'success';
        })

        builder.addCase(topicCreate.fulfilled, (state, action) => {
            state.forumsList = [...state.forumsList, action.payload];
            state.status = 'success';
        })

        builder.addCase(topicView.fulfilled, (state, action) => {
            state.forumsList = state.forumsList.map(forum => forum._id === action.payload._id ? { ...forum, views: forum.views + 1 } : forum);
            state.status = 'success';
        })

        builder.addCase(topicReact.fulfilled, (state, action) => {
            state.forumsList = state.forumsList.map(forum => forum._id === action.payload._id ? { ...forum, loves: forum.loves + 1 } : forum);
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = forumSlice.actions;
export default forumSlice.reducer;