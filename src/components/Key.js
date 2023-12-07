import { Fragment, useEffect } from "react";

const keyboardList = [
  { note: "c", add: 0, keyCode: 65 },
  { note: "cs", add: 1, keyCode: 87 },
  { note: "d", add: 2, keyCode: 83 },
  { note: "ds", add: 3, keyCode: 69 },
  { note: "e", add: 4, keyCode: 68 },
  { note: "f", add: 5, keyCode: 70 },
  { note: "fs", add: 6, keyCode: 84 },
  { note: "g", add: 7, keyCode: 71 },
  { note: "gs", add: 8, keyCode: 89 },
  { note: "a", add: 9, keyCode: 72 },
  { note: "as", add: 10, keyCode: 85 },
  { note: "b", add: 11, keyCode: 74 },
];

const Key = (props) => {
  const baseKeys = [24, 36, 48, 60, 72, 84, 96, 108];
  const clickHandler = (event, keyPressed) => {
    let add;
    if (keyPressed) {
      add = keyboardList.filter((item) => item.note === keyPressed)[0].add;
    } else {
      add = keyboardList.filter((item) => item.note === props.id)[0].add;
    }
    const inputs = baseKeys.map((item) => item + add);
    props.inputs(inputs);
  };
  const keyHandler = (event) => {
    if (
      [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74].includes(event.keyCode)
    ) {
      const keyPressed = keyboardList.filter(
        (item) => item.keyCode === event.keyCode
      )[0].note;
      clickHandler([], keyPressed);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });
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
