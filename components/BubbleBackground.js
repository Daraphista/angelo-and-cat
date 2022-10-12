import { useEffect, useState } from "react";
import Bubble from "./Bubble";

export default function BubbleBackground() {
  return (
    <div className="absolute top-0 flex w-full h-full overflow-hidden justify-around bottom-0">
      <Bubble className="animate-[float_10s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_18s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_12s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_14s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_16s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_11s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_17s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_12s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_19s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_20s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_15s_linear_infinite] -z-0" />
      <Bubble className="animate-[float_12s_linear_infinite] -z-0" />
    </div>
  );
}
