import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const showData = () => {
    console.log("Value changed");
    if (count == 5) {
      console.log("Value reached to 5");
    }
  };

  //   useEffect(showData); // runs on every render or re-render

  //   useEffect(showData, []); // runs only on component mount

  useEffect(showData, [count]); // runs function or re-render when count value changes
  return (
    <div>
      <Button
        variant='contained'
        color='success'
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </Button>
      <Typography variant='h3'>{count}</Typography>
      <Button
        variant='contained'
        color='error'
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
