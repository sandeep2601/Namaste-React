import { useState } from "react";

const User = (params) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="border border-solid p-1 m-1">
      <button
        className="m-2 px-4 border border-solid rounded-md bg-lime-200"
        onClick={() => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
        }}
      >
        Increase Count
      </button>
      <h2>Count1 : {count1}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name: {params.name}</h2>
      <h3>Location: {params.location}</h3>
      <h4>Contact: sandeepverma</h4>
    </div>
  );
};

export default User;
