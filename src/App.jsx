import useSwitch from "./customHook/useSwitch";
import useDate from "./customHook/useDate";

function App() {

  // const [isOn, toggle] = useSwitch();  //useSwitch
  const [{ day,
    month,
    year,
    hour,
    minutes,
    seconds
  }] = useDate(); //useDate
  return (
    <div>
      {/* useSwitch */}
      {/* <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button> */}

      {/* useDate */}
      <div className="d-flex justify-content-around">
        <div>
          <h3>Data attuale</h3>
          <p>{day}/{month}/{year} </p>
        </div>
        <div>
          <h3>Ora attuale</h3>
          <p>{hour}:{minutes}:{seconds}</p>
        </div>
      </div>
    </div >
  );
}

export default App;
