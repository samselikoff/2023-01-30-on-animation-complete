import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="p-20">
      <motion.div
        onAnimationComplete={() => console.log("parent")}
        animate="move"
        className="mt-8"
      >
        <motion.div
          variants={{ move: { x: 100 } }}
          transition={{ duration: 1 }}
          className="w-20 h-20 bg-green-500"
          onAnimationComplete={() => console.log("green")}
        />
        <motion.div
          variants={{ move: { x: 100 } }}
          transition={{ duration: 2 }}
          className="w-20 h-20 bg-blue-500"
          onAnimationComplete={() => console.log("blue")}
        />
        <motion.div
          variants={{ move: { x: 100 } }}
          transition={{ duration: 3 }}
          className="w-20 h-20 bg-red-500"
          onAnimationComplete={() => console.log("red")}
        />
      </motion.div>
    </div>
  );
}
