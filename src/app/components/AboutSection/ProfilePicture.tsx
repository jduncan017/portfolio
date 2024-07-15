import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePicture() {
  return (
    <motion.div
      className="Container h-fit w-full max-w-[620px] flex-col gap-8 rounded-r-xl border-t border-white/30 bg-black/50 shadow-secondaryDim min-[382px]:pl-[calc((100vw-375px-32px)/2)] mini:mr-0 xs:rounded-xl xs:pl-0 sm:border-l lg:max-w-none lg:gap-16 xxl:w-fit xxl:rounded-xl"
      initial={{ x: "-100%" }}
      whileInView={{ x: "0%" }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        type: "tween",
        duration: 0.6,
        delay: 0.4,
      }}
    >
      <div className="ImageContainer flex h-fit w-full justify-end overflow-hidden p-4 xs:justify-center xs:rounded-xl xs:pl-4 xxl:pr-4">
        <Image
          alt="Josh's Picture"
          src="/my-pic.jpg"
          className="ProfilePic ml-4 aspect-square h-auto max-h-[375px] w-auto rounded-xl object-contain mini:ml-0 lg:aspect-square lg:h-full lg:max-h-[450px] lg:w-auto"
          width={450}
          height={450}
          priority
        />
      </div>
    </motion.div>
  );
}
