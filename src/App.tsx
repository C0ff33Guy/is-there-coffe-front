import useWebSocket from "react-use-websocket"

import Coffee from "./components/Coffee"
import State from "./components/State"
import Update from "./components/Update"

function App() {
  const {
    sendMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket('/ws');

  return (
    <>
      <Coffee />
      <br />
      <span className="type">bool</span>
      &nbsp;
      <span className="var">isThereCoffee</span>
      &nbsp;
      <span>=</span>
      &nbsp;
      <State state={lastJsonMessage} ready={readyState} />
      <br />
      <br />
      <Update send={sendMessage} />
    </>
  )
}

export default App
