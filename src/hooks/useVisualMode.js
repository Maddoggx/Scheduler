import { useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace) {
setMode(newMode);
if (replace === true) {
  setHistory((prev) => {
    const current = [...prev];
    current.pop();
    current.push(newMode);
    return current;
  })
  return;
}
setHistory((prev) => ([...prev, newMode]))
   }
   function back() {
    const backMode = history[history.length - 2]
    if (backMode === undefined) {
      return
    }
  setMode(backMode)

  setHistory((prev) => {
    const bHistory = [...prev];
    bHistory.pop();

    return bHistory;
  })

  }

  return { mode, transition, back };

};