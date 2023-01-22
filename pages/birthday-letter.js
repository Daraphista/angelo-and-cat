import FireworksConfetti from "@/components/FireworksConfetti";
import { motion } from "framer-motion";
import { fadeInFromBottom, containerMotion } from "@/lib/framer-animations";

export default function BirthdayLetter() {
  return (
    <motion.div
      id="my-canvas"
      className="bg-red-300 text-white py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerMotion}
    >
      <section className="flex relative justify-center px-4">
        <FireworksConfetti />
        <div className="max-w-screen-xl w-full flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl text-center font-bold"
            variants={fadeInFromBottom}
          >
            Happy 20th, my Love
          </motion.h1>
          <motion.h2
            className="text-xl font-bold text-center mt-3"
            variants={fadeInFromBottom}
          >
            You wanted a letter as a gift, so I made you one that will last
            forever.
          </motion.h2>
          <div className="flex flex-col gap-3 my-6">
            <motion.p variants={fadeInFromBottom}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              efficitur tellus vel lacus sollicitudin, fermentum venenatis
              sapien interdum. Praesent tempor massa ante, in fringilla lorem
              vestibulum at. Vestibulum aliquam suscipit ante, id cursus diam
              aliquet et. Mauris semper hendrerit nisi sed pretium. Donec mollis
              ipsum auctor augue scelerisque, nec varius lacus congue. Maecenas
              vehicula lacus magna, id tristique neque pharetra vitae.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris eget bibendum lorem, ut
              convallis massa.
            </motion.p>
            <motion.p variants={fadeInFromBottom}>
              Aenean lacus ante, ullamcorper et ante eu, convallis lobortis
              sapien. Ut consequat pulvinar libero, hendrerit vulputate purus
              lobortis id. Phasellus tempor arcu sapien, sed egestas risus
              accumsan eget. Fusce tristique viverra urna, in cursus diam
              posuere faucibus. Donec ornare nec sapien pellentesque dictum.
              Vestibulum vitae aliquam justo, sit amet commodo nulla.
              Pellentesque commodo molestie dui, quis euismod lorem sollicitudin
              sit amet. Nullam augue arcu, aliquam eu congue ac, iaculis quis
              erat. Maecenas aliquet lorem ut dictum venenatis. Integer sit amet
              sapien pulvinar dui condimentum venenatis vel sed risus. In
              ultricies rhoncus lorem in volutpat.
            </motion.p>
            <motion.p variants={fadeInFromBottom}>
              Sed convallis, enim sed blandit rhoncus, enim tortor egestas ante,
              et consequat mi lorem nec erat. Donec sed eleifend quam, id
              tincidunt neque. Mauris ultrices nec purus dapibus posuere. Donec
              vitae orci ac tellus egestas gravida nec non eros. Donec posuere a
              quam non lacinia. Suspendisse semper quis nulla finibus varius.
              Duis at neque ac neque dictum venenatis.
            </motion.p>
          </div>
          <motion.h2
            className="text-xl w-full font-bold mt-3"
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
