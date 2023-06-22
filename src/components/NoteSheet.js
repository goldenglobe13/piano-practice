import NoteItem from "./NoteItem";
import Input from "./Input";
import "./NoteSheet.css";

const all = Array(128)
  .fill(0)
  .map((_, i) => i + 1);

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
  { code: 62, top: 35, class: "rotate", name: "d4", lines: " " },
  { code: 63, top: 35, class: "sharp rotate", name: "d4#", lines: " " },
  { code: 64, top: 30, class: "rotate", name: "e4", lines: " " },
  { code: 65, top: 25, class: "rotate", name: "f4", lines: " " },
  { code: 66, top: 25, class: "sharp rotate", name: "f4#" },
  { code: 67, top: 20, class: "rotate", name: "g4", lines: " " },
  { code: 68, top: 20, class: "sharp rotate", name: "g4#", lines: " " },
  { code: 69, top: 15, class: "rotate", name: "a4", lines: " " },
  { code: 70, top: 15, class: "sharp rotate", name: "a4#", lines: " " },
  { code: 71, top: 10, class: "rotate", name: "b4", lines: " " },
  { code: 72, top: 5, class: " ", name: "c5", lines: " " },
  { code: 73, top: 5, class: "sharp", name: "c5#", lines: " " },
  { code: 74, top: 0, class: " ", name: "d5", lines: " " },
  { code: 75, top: 0, class: "sharp", name: "d5#", lines: " " },
  { code: 76, top: -5, class: " ", name: "e5", lines: " " },
  { code: 77, top: -10, class: " ", name: "f5", lines: " " },
  { code: 78, top: -10, class: "sharp", name: "f#5", lines: " " },
  { code: 79, top: -15, class: " ", name: "g5", lines: " " },
  { code: 80, top: -15, class: "sharp", name: "g#5", lines: " " },
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

const NoteSheet = (props) => {
  const place = ["first", "second", "third", "fourth"];

  let visible_notes = [];
  for (let i = 0; i < 4; i++) {
    if (props.notes[i]) {
      visible_notes.push(props.notes[i]);
    }
  }
  console.log(visible_notes);
  const r = document.querySelector(":root");

  let classes_map = [
    ["no-disp", 1],
    ["no-disp", 1],
    ["no-disp", 1],
    ["no-disp", 1],
  ];

  for (let i = 0; i < visible_notes.length; i++) {
    const e = dummy_classes.filter(
      (item) => visible_notes[i] * 1 === item.code * 1
    )[0];
    classes_map[i] = [
      `${place[i]} ${e.class}`,
      all.filter((item) => visible_notes[i] * 1 === item * 1)[0],
      `${+e.top}`,
      `${e.lines}`,
    ];
  }
  // classes_map = visible_notes.map((item, i) => {
  //   return [
  //     place[i],
  //     all.filter((ditem) => item * 1 === ditem * 1)[0],
  //     // dummy_classes.filter((ditem) => item * 1 === ditem.code * 1)[0].class,
  //   ];
  // });
  console.log(classes_map);

  classes_map[0]
    ? r.style.setProperty("--code_first", `${classes_map[0][2]}%`)
    : r.style.setProperty("--code_first", ` `);
  classes_map[1]
    ? r.style.setProperty("--code_second", `${classes_map[1][2]}%`)
    : r.style.setProperty("--code_second", ` `);
  classes_map[2]
    ? r.style.setProperty("--code_third", `${classes_map[2][2]}%`)
    : r.style.setProperty("--code_third", ` `);
  classes_map[3]
    ? r.style.setProperty("--code_fourth", `${classes_map[3][2]}%`)
    : r.style.setProperty("--code_fourth", ` `);

  let classes = [];
  for (let i = 0; i < 4; i++) {
    if (classes_map[i]) {
      classes.push(classes_map[props.index[i]][0]);
    } else {
      classes.push("no-disp");
    }
  }

  let lines_classes = [];
  for (let i = 0; i < 4; i++) {
    if (classes_map[i]) {
      lines_classes.push(classes_map[props.index[i]][3]);
    } else {
      lines_classes.push(" ");
    }
  }
  console.log(classes);

  return (
    <div className="container lines">
      {props.clef === "g" && <div className="g-clef">𝄞</div>}
      {/* {props.clef === "f" && <div className="f-clef">𝄢</div>} */}
      {props.clef === "f" && (
        <div className="bass_clef">
          {" "}
          <img
            className="bass_clef"
            src="noun-bass-clef-501763.png"
            alt="Accolade"
          />
        </div>
      )}

      {/* <div className="container_s current-container">
        <div className="lines_t"></div>
      </div>
      <div className="container_s second-container">
        <div className="lines_t"></div>
      </div>
      <div className="container_s third-container">
        <div className="lines_t"></div>
      </div>
      <div className="container_s fourth-container">
        <div className="lines_t"></div>
      </div> */}
      {/* <div className="sharp">♯</div> */}
      <NoteItem
        className={`${classes[0]}`}
        classes={classes[0]}
        lineClasses={lines_classes[0]}
      />
      <NoteItem
        className={`${classes[1]}`}
        classes={classes[1]}
        lineClasses={lines_classes[1]}
      />
      <NoteItem
        className={`${classes[2]}`}
        classes={classes[2]}
        lineClasses={lines_classes[2]}
      />
      <NoteItem
        className={`${classes[3]}`}
        classes={classes[3]}
        lineClasses={lines_classes[3]}
      />
      {/* <NoteItem className="test rotate" /> */}
      {props.input && <Input input={props.input} />}
    </div>
  );
};

export default NoteSheet;
