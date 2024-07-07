import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h1
      className="SectionTitle text-gradient-clip ml-[5%] border-solid text-start font-sans text-3xl font-black tracking-tight text-white md:text-4xl"
      initial={{ x: "-100%" }}
      whileInView={{ x: "0" }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.2,
      }}
    >
      {title}
    </motion.h1>
  );
}
