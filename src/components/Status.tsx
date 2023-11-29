import TStatus from "../types/Status";

function Status({ status }: { status?: TStatus }) {
  if (!status) {
    return (
      <>
        <span className='undefined'>undefined</span>
        ;&nbsp;
        <span className='comment'>// Loading...</span>
      </>
    )
  }

  if (status.state === null)
    return (
      <>
        <span className='null'>null</span>
        ;&nbsp;
        <span className='comment'>// Nobody updated the status today</span>
      </>
    )

  const updatedAt = new Date(status.updatedAt);

  console.log(status.state)

  return (
    <>
      <span className={status.state.toString()}>{status.state.toString()}</span>
      ;&nbsp;
      <span className='comment'>// Last update at {updatedAt.toLocaleString()}</span>
    </>
  )
}

export default Status;