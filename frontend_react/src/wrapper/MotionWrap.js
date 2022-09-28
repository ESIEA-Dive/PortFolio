import React  from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
          whileInView={{ x: [100, 75, 40, 0], opacity: [0, 0.1, 0.2 , 1] }}
          transition={{ duration: 0.5, }}
          className={`${classNames} app__flex`}
          
        >
          <Component />
        </motion.div>
    )
}

export default MotionWrap;