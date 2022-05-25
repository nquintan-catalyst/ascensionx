import { ReactNode } from "react";

type LeafProps = {
    side: "Left" | "Right";
    children: ReactNode;
}

const Leaf: React.FC<LeafProps> = ({children, side}) => {

    if (side === "Left") {
        return(
            <div className="contentContainer--left">
                {children}
            </div>
        );
    } else {
        return(
            <div className="contentContainer--right">
                {children}
            </div>
        );
    }
};

export default Leaf;