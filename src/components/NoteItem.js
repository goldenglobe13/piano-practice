import { Fragment } from "react";

const NoteItem = (props) => {
  //   const r = document.querySelector(":root");
  //   const cs = getComputedStyle(r);
  //   const top = cs.getPropertyValue(`--code_${props.linePlace}`);
  //   r.style.setProperty(`--top-${props.linePlace}`, `${top}`);.
  const class_num = props.classes.split(" ")[0];
  return (
    <Fragment>
      <div
        className={`lines_t ${props.lineClasses} ${class_num}-container`}
      ></div>
      <div className={`container_s ${class_num}-container`}></div>
      <div className={`note-eighth ${props.className}`}>♩</div>
    </Fragment>
  );
};
export default NoteItem;
