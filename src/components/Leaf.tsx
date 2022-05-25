import { ReactNode } from "react";
import { motion } from "framer-motion";

type LeafProps = {
    side: "Left" | "Right";
    children: ReactNode;
}

const Leaf: React.FC<LeafProps> = ({children, side}) => {

    if (side === "Left") {
        return(
            <motion.div
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ default: { default: { duration: 4 } }}}
            className="contentContainer--left">
                {children}
            </motion.div>
        );
    } else {
        return(
            <motion.div
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ default: { default: { duration: 4 } }}}
            className="contentContainer--right">
                {children}
            </motion.div>
        );
    }
};

export default Leaf;