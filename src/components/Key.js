import { Fragment, useState } from "react";

const keyboardList = [
  { note: "c", add: 0 },
  { note: "cs", add: 1 },
  { note: "d", add: 2 },
  { note: "ds", add: 3 },
  { note: "e", add: 4 },
  { note: "f", add: 5 },
  { note: "fs", add: 6 },
  { note: "g", add: 7 },
  { note: "gs", add: 8 },
  { note: "a", add: 9 },
  { note: "as", add: 10 },
  { note: "b", add: 11 },
];

const Key = (props) => {
  const clickHandler = () => {
    const baseKeys = [24, 36, 48, 60, 72, 84, 96, 108];
    const add = keyboardList.filter((item) => item.note === props.id)[0].add;

    const inputs = baseKeys.map((item) => item + add);
    props.inputs(inputs);
  };

  return (
    <Fragment>
      <button
        id={props.id}
        className={`${props.className} key`}
        onClick={clickHandler}
      >
        <span>{props.children}</span>
      </button>
    </Fragment>
  );
};

export default Key;
