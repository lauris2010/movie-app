import { useEffect, useState, useRef } from "react";
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';

function useSticky () {
  const [isSticky, setSticky] = useState(true);
  const element = useRef(null)

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  

useEffect(() => {
  window.addEventListener("scroll", debounce(() => setSticky(true)))
  return () => {
          window.removeEventListener("scroll", () => setSticky(true));
        }  
}, [debounce, setSticky])

  return { isSticky, element }
}

export default useSticky
