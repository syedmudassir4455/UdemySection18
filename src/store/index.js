import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./Counter";
import AuthReducer from "./Auth"

// const initilaCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initilaCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },                                         // defined a new Component called Counter.js
//     decrement(state) {
//       state.counter--;
//     },
//     increasePayload(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });
// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "Authenticaion",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {                     // defined a new Component called AUth.js
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// // // const counterReducer = (state = initialState, action) => {
// // //   if (action.type === 'increment') {
// // //     return {
// // //       counter: state.counter + 1,
// // //       showCounter:state.showCounter
// // //     };
// // //   }

// // //   if(action.type === 'incrementby5'){
// // //     return{
// // //         counter:state.counter + 5,
// // //         showCounter:state.showCounter
// // //     }
// // // }

// // //   if(action.type === 'increase'){
// // //        return{
// // //            counter:state.counter + action.amount,
// // //            showCounter :state.showCounter
// // //        }
// // //   }

// // //   if (action.type === 'decrement') {
// // //     return {
// // //       counter: state.counter - 1,
// // //     };
// // //   }

// // //    if(action.type === 'toggle'){
// // //         return{
// // //             showCounter : !state.showCounter,
// // //             counter:state.counter
// // //         }
// // //    }
// // //   return state;
// // // };

// // // const store = createStore(counterReducer);

// // //const store = createStore(counterSlice.reducer)

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});


// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
