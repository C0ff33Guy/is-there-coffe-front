function Update({ fetchStatus }: { fetchStatus: () => void }) {
  async function send(msg: string) {
    await fetch(`/status/${msg}`, {
      method: 'POST'
    });
    fetchStatus();
  }

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