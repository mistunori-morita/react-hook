import React, { useState } from "react";

const App = () => {
  // useState 配列を返す、　常に２つの要素を返す
  // 分割代入、それぞれの要素を受け取る、　一つ目の要素は状態が返ってくる
  // 2つめは関数　慣習的に２つめは[setXXX]とつける
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(oldState => oldState + 1);
  const decrement2 = () => setCount(oldState => oldState - 1);
  const double = () => setCount(count * 2);

  // const w = () =>
  //   setCount(oldState => {
  //     if (oldState % 3 === 0) {
  //       return oldState / 3;
  //     } else {
  //       return oldState;
  //     }
  //   });

  const w = () =>
    setCount(oldState => (oldState % 3 === 0 ? oldState / 3 : oldState));

  const reset = () => setCount(0);

  return (
    <>
      count: {count}
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
      </div>
      <div>
        <button onClick={w}>3の倍数だけ割る</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
