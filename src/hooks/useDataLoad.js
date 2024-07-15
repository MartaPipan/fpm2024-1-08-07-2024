import { useEffect, useState } from "react";

function useDataLoad(getData) {
      const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    getData()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));
  },
      //in dependence need dependence one time!!!
      //eslint-disable-next-line 
      []);
    return {
        data, isPending,
        error,
    };
}
export default useDataLoad;