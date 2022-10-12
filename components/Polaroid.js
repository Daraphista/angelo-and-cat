import Image from "next/image";

export default function Polaroid({ src, height, width, className }) {
  return (
    <div
      className={`p-5 pt-8 pb-20 rounded-xl bg-white drop-shadow-2xl col-[1] row-[1] ${
        className ? className : ""
      }`}
    >
      <Image src={src} height={height} width={width}></Image>
    </div>
  );
}
