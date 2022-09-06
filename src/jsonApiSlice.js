import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: null,
  count: 0
};

export const fetchApiData = createAsyncThunk(
  "jsonApiData/apidata",
  async (dispatch, action) => {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    let res = await result.json();
    return res;
  }
);

const jsonApiSlice = createSlice({
  name: "jsonData",
  initialState,
  reducers: {
    add: (state, action) => {
      state.count += 1;
    },
    minus: (state, action) => {
      state.count -= 1;
    },
    addByNumber: (state, { payload }) => {
      state.count += payload;
    },
    resetState: (state, payload) => {
      return initialState;
    }
  },
  extraReducers: {
    [fetchApiData.pending]: (state, action) => {
      state.status = "Pending";
    },
    [fetchApiData.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.value = action.payload;
    },
    [fetchApiData.rejected]: (state, action) => {
      state.sattus = "rejected";
    }
  }
});

console.log(jsonApiSlice);

export const { add, minus, addByNumber, resetState } = jsonApiSlice.actions;
export default jsonApiSlice.reducer;
