const Midi = (props) => {
  const updateDevices = (event) => {
    console.log(event);
    console.log(
      `Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}`
    );
  };
  const success = (midiAccess) => {
    console.log(midiAccess);
    midiAccess.addEventListener("statechange", updateDevices);

    const inputs = midiAccess.inputs;
    console.log(inputs);

    inputs.forEach((input) => {
      console.log(input);
      // input.onmidimessage = handleInput;
      input.addEventListener("midimessage", handleInput);
    });
  };
  const failure = () => {
    console.log("Could not connect MIDI");
  };

  const handleInput = (input) => {
    console.log(input);
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    console.log(command, note, velocity);

    const noteOn = (note, velocity) => {
      console.log(note, velocity);
      props.onMIDISuccess(note);
    };

    const noteOff = (note) => {
      console.log(note);
    };

    switch (command) {
      case 144:
        if (velocity > 0) {
          noteOn(note, velocity);
        } else {
          noteOff(note);
        }
        break;
      case 128:
        noteOff(note);
        break;
    }
  };
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
  }
  return <div></div>;
};

export default Midi;
// onmidimessage={handleInput}
