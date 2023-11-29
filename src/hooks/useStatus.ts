import { useEffect, useState } from "react";
import TStatus from "../types/Status";

function useStatus() {
  const [status, setStatus] = useState<TStatus>();

  async function fetchStatus() {
    const res = await fetch('/status');

    if (res.body) {
      const data: TStatus = await res.json();
      setStatus(data);
    }
  }

  useEffect(() => {
    fetchStatus();
    const int = setInterval(fetchStatus, 600000);
    return () => clearInterval(int);
  }, []);

  return {
    status,
    fetchStatus,
  }
}

export default useStatus;