import { motion } from "motion/react";
import { FadeComponentProps } from "../model";


//* Works better with <AnimatePresence> https://motion.dev/docs/react-animate-presence


export const FadeComponent = ( props : FadeComponentProps) => {
  const { children, initial = 0, animate = 1, transition=0.2, exit=0, className } = props
  return (
    <motion.div 
    initial={{ opacity: initial }}
    animate={{ opacity: animate }}
    transition={{ duration: transition }}
    exit={{ opacity: exit }}
    className={className}>
      {children}
    </motion.div>
  );
};