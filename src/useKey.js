export function useKey() {
  const [key, setKey] = useState("");

  useEffect(
    function() {
      async function fetchKey() {
        try {
          const res = await fetch("/key");
          if (!res.ok) throw new Error("Something went wrong with fetching key");
          const data = await res.json();
          setKey(data.key);
        } catch (err) {
          console.log(err.message);
        }
      }

      fetchKey();
    },
    []
  );

  return key;
}