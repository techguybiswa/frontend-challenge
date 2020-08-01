export const debounceFunction = (fn, d) => {
    // console.log("DEBOUNCE...")
    let t;
    return () => {
      clearTimeout(t);
      t = setTimeout(() => {
        fn();
      }, d);
    };
  };
  