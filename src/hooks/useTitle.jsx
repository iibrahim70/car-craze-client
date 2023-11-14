import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Car Craze | ${title}`;
  }, [title]);
};

export default useTitle;
