import { useEffect, useState } from "react";
import moment from "moment/moment";
import Head from "next/head";
import Image from "next/image";
Image;
import Polaroid from "../components/Polaroid";

export default function Home() {
  const [now, setNow] = useState(moment());
  const anniversary = moment("2020-10-10");

  const yearsPassed = getTimePassed("years", anniversary, now);
  const monthsPassed = getTimePassed("months", anniversary, now);
  const weeksPassed = getTimePassed("weeks", anniversary, now);
  const daysPassed = getTimePassed("days", anniversary, now);
  const hoursPassed = getTimePassed("hours", anniversary, now);
  const minutesPassed = getTimePassed("minutes", anniversary, now);
  const secondsPassed = getTimePassed("seconds", anniversary, now);

  useEffect(() => {
    console.log(
      yearsPassed,
      monthsPassed,
      weeksPassed,
      daysPassed,
      hoursPassed,
      minutesPassed,
      secondsPassed
    );
  }, []);

  // refresh now state every second

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-64 text-rose-400 items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 font-amatic">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid">
        <Polaroid
          src="/cat-and-angelo.png"
          width={230}
          height={340}
          className="-rotate-15"
        ></Polaroid>
        <Polaroid
          src="/cat-and-angelo.png"
          width={230}
          height={340}
          className="-rotate-7.5"
        ></Polaroid>
        <Polaroid src="/cat-and-angelo.png" width={230} height={340}></Polaroid>
      </div>
      <div className="flex flex-col min-w-[25rem] gap-6">
        <h2 className="text-4xl">Hello babe,</h2>
        <p className="text-2xl">Here's how long we've been together</p>

        <div className="text-white text-9xl my-4">{yearsPassed} Years</div>

        <div className="flex gap-6 text-4xl">
          <div className="">
            <span className="text-white">{monthsPassed}</span> months
          </div>
          <div className="">
            <span className="text-white">{weeksPassed}</span> weeks
          </div>
          <div className="">
            <span className="text-white">{daysPassed}</span> days
          </div>
        </div>

        <div className="flex gap-6 text-4xl">
          <div className="">
            <span className="text-white">{hoursPassed}</span> hours
          </div>
          <div className="">
            <span className="text-white">{minutesPassed}</span> minutes
          </div>
          <div className="">
            <span className="text-white">{secondsPassed}</span> seconds
          </div>
        </div>

        <p className="self-end text-2xl">And counting...</p>
      </div>
    </div>
  );
}

function getTimePassed(unitOfTime, anniversary, now) {
  const timePassed = now.diff(anniversary, unitOfTime);
  anniversary.add(timePassed, unitOfTime);
  return timePassed;
}
