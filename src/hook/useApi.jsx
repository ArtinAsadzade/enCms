import { useEffect, useState } from "react";
import axios from "axios";

export default function useApi(name, method) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios({
      method: method,
      url: `http://localhost:3000/api/${name}`,
    })
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [name, method]);

  return [data, isPending, err];
}
