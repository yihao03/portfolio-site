import { motion } from "motion/react";

const Container: React.FC<{ children: React.ReactNode }> =
  ({ children }) => (
    <motion.div className="min-h-[calc(100vh-152px)] w-fit flex flex-col text-gray-400 p-4 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )

export default Container;
