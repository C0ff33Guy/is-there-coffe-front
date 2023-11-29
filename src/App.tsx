import Coffee from "./components/Coffee"
import Status from "./components/Status"
import Update from "./components/Update"
import useStatus from "./hooks/useStatus"

function App() {
  const {
    status,
    fetchStatus,
  } = useStatus();

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
      <Status status={status} />
      <br />
      <br />
      <Update fetchStatus={fetchStatus} />
    </>
  )
}

export default App
