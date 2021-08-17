import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/Counter";

// import { Component } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);  // what we type counter in index.js under store component same name need to be typed  
  const dispatch = useDispatch();
  const show = useSelector(state =>state.counter.showCounter) // what we type counter in index.js under store component same name need to be typed  

  const incrementHandler = () => {
     //dispatch({ type: "increment" });
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
   //  dispatch({ type: "decrement" });
    dispatch(counterActions.decrement())
  };

  const incrementbyfive =() =>{
     //dispatch({type : 'incrementby5'})
    dispatch(counterActions.increase(5))
  }

  const increasePayload =() =>{
    dispatch(counterActions.increasePayload(5))
  }


  const toggleCounterHandler = () => {
    // dispatch({type : 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div> }
      <button onClick={incrementHandler}>Increment 1+1</button>
      <button onClick={decrementHandler}>Decrement 1-1</button>
      <button onClick={increasePayload}>Increase + 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter

{/**  This below code example for Class Component */}
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>

//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapDispatchToProps =dispatch =>{
//   return {
//    increment : () => dispatch({type : 'increment'}),
//    decrement: () => dispatch({tyep :'decrement'})
//   }
// }

// const mapStateToProps =state => {
//   return {
//     counter:state.counter
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
