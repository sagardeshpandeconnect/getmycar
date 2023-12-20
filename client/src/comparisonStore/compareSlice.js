import { createSlice } from "@reduxjs/toolkit";

const initialState = { compare: [] };

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    add(state, action) {
      state.compare.push(action.payload);
    },
    remove(state, action) {
      state.compare = state.compare.filter((car) => car._id !== action.payload);
    },
  },
});

export const { add, remove } = compareSlice.actions;
export default compareSlice.reducer;

// const initialState = {
//   carsToCompare: [],
// };

// Action types
// const CAR_ADDED = "carAdded";
// const CAR_REMOVED = "carRemoved";

// // Action creators
// export const carAdded = (id) => ({
//   type: CAR_ADDED,
//   payload: {
//     id,
//   },
// });

// export const carRemoved = (id) => ({
//   type: CAR_REMOVED,
//   payload: {
//     id,
//   },
// });

// // Reducer
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case "carAdded":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case "carRemoved":
//       return state.filter((bug) => bug.id !== action.payload.id);

//     default:
//       return state;
//   }
// }
