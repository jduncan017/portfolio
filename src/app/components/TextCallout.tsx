import { motion } from "framer-motion";
import { Callouts } from "@/src/lib/calloutData";
import { CalloutParticles } from "@/src/app/components/UI-Libraries/CalloutParticles";

type TextCalloutProps = {
  name: string;
  id: number;
};

export default function TextCallout({ name, id }: TextCalloutProps) {
  return (
    <div className="TextCallout relative my-10">
      <div className="ParticlesBackground absolute h-full w-full">
        <CalloutParticles id={id} />
      </div>
      <div className="Container mx-auto flex w-full flex-col items-center bg-gradient-to-b from-transparent via-secondaryDark/15 to-transparent px-10 py-20">
        <motion.h2
          initial={{ opacity: "0%" }}
          whileInView={{ opacity: "100%" }}
          transition={{ duration: 1 }}
          className="text-gradient-clip mb-0.5 font-noto text-2xl font-bold capitalize mini:text-3xl sm:text-4xl md:leading-tight lg:text-5xl"
          viewport={{ once: true }}
        >
          {Callouts[name] && Callouts[name].header}
        </motion.h2>
        <motion.p
          className="BioDescription max-w-[750px] border-t border-secondary/60 p-2 text-center text-sm font-medium capitalize text-gray-400 sm:text-base lg:text-lg xxl:max-w-none"
          initial={{ opacity: "0%" }}
          whileInView={{ opacity: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Callouts[name] && Callouts[name].description}
        </motion.p>
      </div>
    </div>
  );
}
