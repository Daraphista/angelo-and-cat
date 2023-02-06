import FireworksConfetti from "@/components/FireworksConfetti";
import { motion } from "framer-motion";
import { fadeInFromBottom, containerMotion } from "@/lib/framer-animations";

export default function BirthdayLetter() {
  return (
    <motion.div
      id="my-canvas"
      className="bg-red-300 text-white py-40 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerMotion}
    >
      <section className="flex relative justify-center px-4">
        <FireworksConfetti />
        <div className="max-w-prose w-full flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl text-center font-bold"
            variants={fadeInFromBottom}
          >
            Happy 20th, my Love
          </motion.h1>
          <motion.h2
            className="text-xl font-bold text-center mt-3 max-w-prose"
            variants={fadeInFromBottom}
          >
            You wanted a letter as a gift, so I made you one that will last
            forever.
          </motion.h2>
          <div className="flex flex-col gap-3 my-6">
            <motion.p variants={fadeInFromBottom} className="max-w-prose">
              As I begin to write this letter, my mind scrambles as I try to fit
              all my feelings for you in this letter. I'm not the best at
              translating my emotions into words, but I do my best to pour my
              heart for you.
            </motion.p>
            <motion.p variants={fadeInFromBottom} className="max-w-prose">
              Your freckles, beautiful eyes, and jet black hair are the first
              things that captured my heart. Even with your short temper, you
              are still the kindest and most caring human being I know. I am the
              luckiest guy in the world knowing that I am loved by someone like
              you.
            </motion.p>
            <motion.p variants={fadeInFromBottom} className="max-w-prose">
              I know that sometimes I forget to show you that I love you, or
              that I care. Sometimes I might be too busy to do so. Please
              understand that I would never stop loving or caring for you. I
              want to do better.
            </motion.p>
            <motion.p variants={fadeInFromBottom} className="max-w-prose">
              I could not begin to imagine what life would be like if we didn't
              meet. A lot of things would be different, but I'm sure that I
              wouldn't be as happy as I am now.
            </motion.p>
          </div>
          <motion.h2
            className="text-xl w-full font-bold mt-3 max-w-prose"
            variants={fadeInFromBottom}
          >
            Lots of Love, <br />
            Angelo
          </motion.h2>
        </div>
      </section>
    </motion.div>
  );
}
