import Key from "./Key";

const Keyboard = (props) => {
  const inputsForward = (inputs) => {
    props.inputsKeyboard(inputs);
  };
  return (
    <div>
      <div className="roll-container">
        <div className="keys-container">
          <Key id="c" className="white-key" inputs={inputsForward}>
            C
          </Key>
          <Key id="cs" className="black-key" inputs={inputsForward}>
            C#
          </Key>
          <Key id="d" className="white-key" inputs={inputsForward}>
            D
          </Key>
          <Key id="ds" className="black-key" inputs={inputsForward}>
            D#
          </Key>
          <Key id="e" className="white-key" inputs={inputsForward}>
            E
          </Key>
          <Key id="f" className="white-key" inputs={inputsForward}>
            F
          </Key>
          <Key id="fs" className="black-key" inputs={inputsForward}>
            F#
          </Key>
          <Key id="g" className="white-key" inputs={inputsForward}>
            G
          </Key>
          <Key id="gs" className="black-key" inputs={inputsForward}>
            G#
          </Key>
          <Key id="a" className="white-key" inputs={inputsForward}>
            A
          </Key>
          <Key id="as" className="black-key" inputs={inputsForward}>
            A#
          </Key>
          <Key id="b" className="white-key" inputs={inputsForward}>
            B
          </Key>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
