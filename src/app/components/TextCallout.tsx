import { motion } from "framer-motion";
import { Callouts } from "@/src/lib/calloutData";
import { CalloutParticles } from "@/src/app/components/UI-Libraries/CalloutParticles";

type CalloutKey = keyof typeof Callouts;

type TextCalloutProps = {
  name: CalloutKey;
  id: number;
};

export default function TextCallout({ name, id }: TextCalloutProps) {
  const callout = Callouts[name];

  if (!callout) {
    return null;
  }

  return (
    <div className="TextCallout relative">
      <div className="ParticlesBackground absolute h-full w-full">
        <CalloutParticles id={id} />
      </div>
      <div className="Container mx-auto flex w-full flex-col items-center bg-gradient-to-b from-transparent via-black to-transparent px-10 py-32">
        <motion.h4
          className="mb-2 text-center font-noto font-bold uppercase text-gray-500 sm:text-lg md:leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {callout.prompt}
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gradient-clip mb-0.5 text-center font-noto text-3xl font-bold capitalize sm:text-4xl md:leading-tight lg:text-5xl"
          viewport={{ once: true }}
        >
          {callout.header}
        </motion.h2>
        <motion.p
          className="BioDescription max-w-[750px] border-t border-secondary/60 p-2 text-center text-sm font-medium capitalize text-gray-400 sm:text-base lg:text-lg xxl:max-w-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {callout.description}
        </motion.p>
      </div>
    </div>
  );
}
