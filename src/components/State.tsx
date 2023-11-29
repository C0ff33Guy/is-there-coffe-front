import { ReadyState } from "react-use-websocket";
import TState from "../types/State";

function State({ state, ready }: { state: TState, ready: ReadyState }) {
  if (ready !== ReadyState.OPEN || !state) {
    const connectionStatus = {
      [ReadyState.CONNECTING]: 'Connecting...',
      [ReadyState.OPEN]: 'Open',
      [ReadyState.CLOSING]: 'Closing',
      [ReadyState.CLOSED]: 'Closed',
      [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[ready];

    return (
      <>
        <span className='undefined'>undefined</span>
        ;&nbsp;
        <span className='comment'>// {connectionStatus}</span>
      </>
    )
  }

  if (state.state === null)
    return (
      <>
        <span className='null'>null</span>
        ;&nbsp;
        <span className='comment'>// Nobody updated the status today</span>
      </>
    )

  const updatedAt = new Date(state.updatedAt);

  return (
    <>
      <span className={state.state.toString()}>{state.state.toString()}</span>
      ;&nbsp;
      <span className='comment'>// Last update at {updatedAt.toLocaleString()}</span>
    </>
  )
}

export default State;