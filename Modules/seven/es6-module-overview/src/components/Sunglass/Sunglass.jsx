//import add from "../../src/Utils/Calculate";
import {
  add,
  multiply,
  divideTheFirstNumberByTheSecondNumber as divide,
} from "../../Utils/Calculate";
import Watch from "../Watch/Watch";
import "./Watch.css";

const Sunglass = () => {
  const first = 55;
  const second = 15;
  const sum = add(first, second);
  const mul = multiply(first, second);

  const vag = divide(first, second);

  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
