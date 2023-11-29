import { SendMessage } from "react-use-websocket";

function Update({ send }: { send: SendMessage }) {
  return (
    <>
      <span className="type"><em>define</em></span>
      &nbsp;
      <span className="type"><em>public</em></span>
      &nbsp;
      <span className="type">function</span>
      &nbsp;
      <span className="var">updateStatus</span>
      ()&nbsp;&#123;
      <br />
      &nbsp;&nbsp;<button className="true" onClick={() => send('true')}>true</button>,
      <br />
      &nbsp;&nbsp;<button className="false" onClick={() => send('false')}>false</button>,
      <br />
      &#125;
    </>
  );
}

export default Update