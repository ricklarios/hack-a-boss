import { useState } from "react";

function useSessionStorage(key) {
  const initialValue = sessionStorage.getItem(key);

  const [value, setInternalValue] = useState(initialValue);

  function setValue(newValue) {
    setInternalValue(newValue);

    // a mayores actualizo el local storage
    sessionStorage.setItem(key, newValue);
  }

  return [value, setValue];
}

export default useSessionStorage;
