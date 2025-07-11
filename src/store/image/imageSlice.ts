import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getSearchImage = createAsyncThunk(
    'image/getSearchImage',
    async ({searchValue, offset}) => {
        try {
            const response = await fetch(
                `${BASE_URL}/search?api_key=${API_KEY}&q=${searchValue}&limit=9&offset=${offset}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        value: 0,
    },
    reducers: {
    }
})

export default imageSlice.reducer;