export const debounceFunction = (fn, d) => {
    let t;
    return () => {
      clearTimeout(t);
      t = setTimeout(() => {
        fn();
      }, d);
    };
  };
  