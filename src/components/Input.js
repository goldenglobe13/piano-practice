import { Fragment } from "react";
import NoteItem from "./NoteItem";

const dummy_classes = [
  // { code: 32, top: 75, class: "sharp rotate", name: "g1#" },
  // { code: 33, top: 75, class: "rotate", name: "a1" },
  // { code: 34, top: 75, class: "sharp rotate", name: "a1#" },
  // { code: 35, top: 75, class: "rotate", name: "b1" },
  // { code: 36, top: 75, class: "rotate", name: "c2" },
  // { code: 37, top: 75, class: "sharp rotate", name: "c2#" },
  // { code: 38, top: 105, class: "rotate", name: "d2" },
  // { code: 39, top: 105, class: "sharp rotate", name: "d2#" },
  // { code: 40, top: 100, class: "rotate", name: "e2" },
  // { code: 41, top: 95, class: "rotate", name: "f2" },
  // { code: 42, top: 95, class: "sharp rotate", name: "f2#" },
  // { code: 43, top: 90, class: "rotate", name: "g2" },
  // { code: 44, top: 90, class: "sharp rotate", name: "g2#" },
  // { code: 45, top: 85, class: "rotate", name: "a2" },
  // { code: 46, top: 85, class: "sharp rotate", name: "a2#" },
  // { code: 47, top: 80, class: "rotate", name: "b2" },
  { code: 48, top: 75, class: "rotate", name: "c3", lines: "four-b" },
  { code: 49, top: 75, class: "sharp rotate", name: "c3#", lines: "four-b" },
  { code: 50, top: 70, class: "rotate", name: "d3", lines: "four-b" },
  { code: 51, top: 70, class: "sharp rotate", name: "d3#", lines: "four-b" },
  { code: 52, top: 65, class: "rotate", name: "e3", lines: "three-b" },
  { code: 53, top: 60, class: "rotate", name: "f3", lines: "three-b" },
  { code: 54, top: 60, class: "sharp rotate", name: "f3#", lines: "three-b" },
  { code: 55, top: 55, class: "rotate", name: "g3", lines: "two-b" },
  { code: 56, top: 55, class: "sharp rotate", name: "g3#", lines: "two-b" },
  { code: 57, top: 50, class: "rotate", name: "a3", lines: "two-b" },
  { code: 58, top: 50, class: "sharp rotate", name: "a3#", lines: "two-b" },
  { code: 59, top: 45, class: "rotate", name: "b3", lines: "one-b" },
  { code: 60, top: 40, class: "rotate", name: "c4", lines: "one-b" },
  { code: 61, top: 40, class: "sharp rotate", name: "c4#", lines: "one-b" },
  { code: 62, top: 35, class: "rotate", name: "d4" },
  { code: 63, top: 35, class: "sharp rotate", name: "d4#" },
  { code: 64, top: 30, class: "rotate", name: "e4" },
  { code: 65, top: 25, class: "rotate", name: "f4" },
  { code: 66, top: 25, class: "sharp rotate", name: "f4#" },
  { code: 67, top: 20, class: "rotate", name: "g4" },
  { code: 68, top: 20, class: "sharp rotate", name: "g4#" },
  { code: 69, top: 15, class: "rotate", name: "a4" },
  { code: 70, top: 15, class: "sharp rotate", name: "a4#" },
  { code: 71, top: 10, class: "rotate", name: "b4" },
  { code: 72, top: 5, class: " ", name: "c5" },
  { code: 73, top: 5, class: "sharp", name: "c5#" },
  { code: 74, top: 0, class: " ", name: "d5" },
  { code: 75, top: 0, class: "sharp", name: "d5#" },
  { code: 76, top: -5, class: " ", name: "e5" },
  { code: 77, top: -10, class: " ", name: "f5" },
  { code: 78, top: -10, class: "sharp", name: "f#5" },
  { code: 79, top: -15, class: " ", name: "g5" },
  { code: 80, top: -15, class: "sharp", name: "g#5", lines: "one-a" },
  { code: 81, top: -20, class: " ", name: "a5", lines: "one-a" },
  { code: 82, top: -20, class: "sharp", name: "a#5", lines: "one-a" },
  { code: 83, top: -25, class: " ", name: "b5", lines: "one-a" },
  { code: 84, top: -30, class: " ", name: "c6", lines: "two-a" },
  { code: 85, top: -30, class: "sharp", name: "c#6", lines: "two-a" },
  { code: 86, top: -35, class: " ", name: "d6", lines: "two-a" },
  { code: 87, top: -35, class: "sharp", name: "d#6", lines: "two-a" },
  { code: 88, top: -40, class: " ", name: "e6", lines: "three-a" },
  { code: 89, top: -45, class: " ", name: "f6", lines: "three-a" },
  { code: 90, top: -45, class: "sharp", name: "f#6", lines: "three-a" },
  { code: 91, top: -50, class: " ", name: "g6", lines: "four-a" },
  { code: 92, top: -50, class: "sharp", name: "g#6", lines: "four-a" },
  { code: 93, top: -55, class: " ", name: "a6", lines: "four-a" },
  { code: 94, top: -55, class: "sharp", name: "a#6", lines: "four-a" },
  { code: " ", class: "no-disp" },
];

const Input = (props) => {
  let no_input = " ";
  const r = document.querySelector(":root");
  let classes = [];
  let lines_classes = [];
  if (props.input !== " ") {
    console.log(props.input);
    const t = dummy_classes.filter(
      (item) => props.input * 1 === item.code * 1
    )[0];
    r.style.setProperty("--code_wrong", `${t.top}%`);
    console.log(t);
    classes.push(t.class);
    lines_classes.push(t.lines);
  } else {
    no_input = "no-input";
    classes.push("no-disp");
    lines_classes.push(" ");
  }

  console.log(classes);
  console.log(lines_classes);

  return (
    <Fragment>
      <NoteItem
        className={`${classes[0]} wrong ${no_input}`}
        classes={"no"}
        lineClasses={lines_classes[0]}
      />
    </Fragment>
  );
};

export default Input;
