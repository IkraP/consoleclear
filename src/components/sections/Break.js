import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "@fontsource/arima-madurai";

export default function Break() {
  const [minutes, setMinutes] = useState("10");
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
      <Wrapper>
        <Text>
          In our world, our lives are constantly in motion that we often neglect
          a simple 10-minute break.{" "}
        </Text>
        <Text>
          We think you deserve a break so during these 10 minutes let you mind
          relax, focus on your breathing and let your mind wander!
        </Text>

        <Timer>
          {minutes} : {seconds}
        </Timer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const Text = styled.h1`
  font-family: Arima Madurai;
  text-align: center;
  font-size: 1.15em;
  color: #12133c;
`;

const Timer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arima Madurai;
  font-size: 4em;
  color: pink;
`;
