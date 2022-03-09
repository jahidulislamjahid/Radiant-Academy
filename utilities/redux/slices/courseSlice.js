import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const response = await fetch('https://radiant-academy.vercel.app/api/courses')
            .then(res => res.json())
        return response.data
    }
)

// export const courseView = createAsyncThunk(
//     'course/courseView',
//     async (course) => {
//         try {
//             const response = await axios.put(`https://radiant-academy.vercel.app/api/course/views/${forum._id}`);
//             return response
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        coursesList: [],
        wishList: [],
        status: 'idle',
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.wishList.push(action.payload);
        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(course => course._id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.coursesList = action.payload;
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishList } = courseSlice.actions;
export default courseSlice.reducer;