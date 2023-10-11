import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counterFn = (prevCounter) => {
    return prevCounter + 1;
  };
  const counter = useCounter(counterFn);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
