import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
export default function Shop() {
  const dispatch = useDispatch();
  const { dipositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // @ts-ignore
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <h2>Diposit or Withdraw Money</h2>
      <div className="container">
        {/* <button
          className="btn btn-primary mx-2"
          onClick={() => {
            // @ts-ignore
            dispatch(actionCreators.withdrawMoney(100));
          }}
        >
          -
        </button> */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withdrawMoney(100);
          }}
        >
          -
        </button>
        Update Balence {amount}
        {/* <button
          className="btn btn-primary mx-2"
          onClick={() => {
            // @ts-ignore
            dispatch(actionCreators.dipositMoney(100));
          }}
        >
          +
        </button> */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            // @ts-ignore
            dipositMoney(100);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
