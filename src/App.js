import "./styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  minus,
  addByNumber,
  resetState,
  fetchApiData
} from "./jsonApiSlice";

export default function App() {
  const count = useSelector((state) => state.jsonReducerWithCount.count);
  const dispatch = useDispatch();
  console.log(count);

  const handleAddByNum = () => {
    dispatch(addByNumber(5));
  };

  const handleAdd = () => {
    dispatch(add());
  };

  const handleMinus = () => {
    dispatch(minus());
  };

  const handleReset = () => {
    console.log("hii");
    dispatch(resetState());
  };

  React.useEffect(() => {
    dispatch(fetchApiData());
  });

  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleAddByNum}>ADDBYNUM</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
