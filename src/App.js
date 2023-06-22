import { Fragment, useEffect, useRef, useState } from "react";
import NoteSheet from "./components/NoteSheet";
import Midi from "./components/Midi";
import Timer from "./components/Timer";

// const notes_all = Array(128)
//   .fill(0)
//   .map((_, i) => i + 1);
// let sliced_notes = notes_all.slice(56, 85);

// let initial_notes = [];

// for (let i = 0; i < 6; i++) {
//   if (i === 0) {
//     initial_notes.push(
//       sliced_notes[Math.floor(Math.random() * sliced_notes.length)]
//     );
//   } else {
//     const distance = 5;
//     let index = sliced_notes.findIndex(
//       (item) => item === initial_notes[i - 1] * 1
//     );
//     let new_slice = sliced_notes.slice(
//       index - distance > 0 ? index - distance : 0,
//       index + distance < sliced_notes.length
//         ? index + distance
//         : sliced_notes.length - 1
//     );
//     let new_index = Math.floor(Math.random() * new_slice.length);
//     let new_entry = new_slice[new_index];
//     if (new_entry !== initial_notes[i - 1]) {
//       initial_notes.push(new_slice[new_index]);
//     } else {
//       initial_notes.push(initial_notes[i - 1] + 1 || 80);
//     }
//   }
// }

// console.log(initial_notes);

function App() {
  const [notes, setNotes] = useState([]);
  const [index, setIndex] = useState([0, 1, 2, 3]);
  const [input, setInput] = useState("");
  const [start, setStart] = useState("");
  const [stop, setStop] = useState(false);
  const [newGame, setNesGame] = useState(false);

  // Set the date we're counting down to
  // let s = 0 + "m " + 0 + "s " + 0 + "c";

  // let times = [];

  useEffect(() => {
    const notes_all = Array(128)
      .fill(0)
      .map((_, i) => i + 1);
    let sliced_notes = notes_all.slice(56, 85);

    let initial_notes = [];

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        initial_notes.push(
          sliced_notes[Math.floor(Math.random() * sliced_notes.length)]
        );
      } else {
        const distance = 5;
        let index = sliced_notes.findIndex(
          (item) => item === initial_notes[i - 1] * 1
        );
        let new_slice = sliced_notes.slice(
          index - distance > 0 ? index - distance : 0,
          index + distance < sliced_notes.length
            ? index + distance
            : sliced_notes.length - 1
        );
        let new_index = Math.floor(Math.random() * new_slice.length);
        let new_entry = new_slice[new_index];
        if (new_entry !== initial_notes[i - 1]) {
          initial_notes.push(new_slice[new_index]);
        } else {
          initial_notes.push(initial_notes[i - 1] + 1 || 80);
        }
      }
    }

    console.log(initial_notes);
    setNotes(initial_notes);
  }, [newGame]);

  const handleInput = (input) => {
    if (start) {
      console.log(input);
      setInput(input);
    }
  };

  useEffect(() => {
    if (input === notes[0]) {
      // times.push(Date.now() - start);
      if (notes.length === 1) {
        setStop(true);
      }
      console.log(Date.now() - start);
      setIndex((prevIndex) => {
        let g = [];
        let y = [...prevIndex];
        for (const i in y) {
          if (i === "0") {
            g.push(y.slice(-1)[0]);
          } else {
            g.push(y[i - 1]);
          }
        }
        return g;
      });
      setNotes((prevNote) => {
        const a = [...prevNote];
        a.shift();
        console.log(a);
        return a;
      });
    }
    setTimeout(() => {
      setInput(" ");
    }, 300);
  }, [input, notes, start]);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (start) {
      setInput(+inputRef.current.value);
    }
  };
  const timerStart = () => {
    setStop(false);
    setStart(Date.now());
  };

  const playAgain = () => {
    setNesGame((prevNewGame) => {
      return !prevNewGame;
    });
    setStop(false);
    setStart(Date.now());
  };
  // const timerStop = () => {
  //   setStop(true);
  // };

  return (
    <div>
      <Timer start={start} stop={stop} />
      <div className="big-container">
        {start && !stop && (
          <Fragment>
            <div>
              {/* <img className="joint" src="Accolade_fermante.png" alt="Accolade" /> */}
            </div>
            <NoteSheet input={input} clef={"g"} notes={notes} index={index} />
            {/* <NoteSheet clef={"f"} notes={notes} index={index} /> */}
          </Fragment>
        )}
        {!start && (
          <button className="start-btn" onClick={timerStart}>
            Start!
          </button>
        )}
        {stop && (
          <button className="start-btn" onClick={playAgain}>
            PLAY AGAIN
          </button>
        )}
      </div>

      <div>{notes}</div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          min="20"
          max="90"
          placeholder="60"
          ref={inputRef}
        />
        <button type="submit">Enter Note</button>
      </form>

      {/* <button onClick={timerStop}>Stop</button> */}

      {/* {input && <Input input={input} />} */}
      <Midi onMIDISuccess={handleInput} />
    </div>
  );
}

export default App;

// const handleInput = (input) => {
//   if (input === notes[0]) {
//     setIndex((prevIndex) => {
//       let g = [];
//       let y = [...prevIndex];
//       for (const i in y) {
//         if (i === "0") {
//           g.push(y.slice(-1)[0]);
//         } else {
//           g.push(y[i - 1]);
//         }
//       }
//       console.log(g);
//       return g;
//     });
//     setNotes((prevNote) => {
//       const a = [...prevNote];
//       a.shift();
//       console.log(a);
//       return a;
//     });
//   } else {
//     console.log(input);
//     setWrongInput(input);
//   }
// };

// useEffect(() => {
//   if (input === notes[0]) {
//     setIndex((prevIndex) => {
//       let g = [];
//       let y = [...prevIndex];
//       for (const i in y) {
//         if (i === "0") {
//           g.push(y.slice(-1)[0]);
//         } else {
//           g.push(y[i - 1]);
//         }
//       }
//       console.log(g);
//       return g;
//     });
//     setNotes((prevNote) => {
//       const a = [...prevNote];
//       a.shift();
//       console.log(a);
//       return a;
//     });
//   } else {
//     console.log(input);
//     setWrongInput(input);
//   }
// }, [input, notes]);
