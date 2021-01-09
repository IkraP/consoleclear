import React, { useState, useEffect, useRef } from "react";

export default function Break() {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef(null);

  const startTimer = () => {
    // clear interval
    clearInterval(interval);

    // set time for 10 minutes from new Date()
    const now = new Date();
    const endTime = now.setMinutes(now.getMinutes() + 10);

    // set interval for the countdown timer every second
    interval = setInterval(() => {
      const now = new Date().getTime();
      // calculate difference between now and time in 10 minutes
      const difference = endTime - now;
      const minutesCalc = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsCalc = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setMinutes(extraZero(minutesCalc, 2));
        setSeconds(extraZero(secondsCalc, 2));
      }
    }, 1000);
  };

  useEffect(() => {
    const current = interval.current;
    startTimer();
    return () => {
      clearInterval(current);
    };
  }, []);

  // A function to add extra 0 to timer minutes and seconds once below 10
  function extraZero(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  return (
    <>
      <h1>Take a 10 minute break</h1>
      <p>
        In the current chaos, when have you taken a break to think nothing. Take
        a well earned break and relax your mind. Listen to the sounds and let go
        of all of your thoughts.
      </p>
      <p>
        {minutes} : {seconds}
      </p>
    </>
  );
}
