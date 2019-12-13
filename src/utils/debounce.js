let timeout;

const debounce = (fn, time) => () => {
  // eslint-disable-next-line
  const functionCall = () => fn.apply(this, arguments);
  clearTimeout(timeout);
  timeout = setTimeout(functionCall, time);
};
export default debounce;
