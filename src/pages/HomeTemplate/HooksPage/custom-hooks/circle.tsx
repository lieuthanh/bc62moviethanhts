import "./style.css";
import { useMagicColor } from "./useMagicColor";

export default function Circle() {
    const color = useMagicColor();
    return (
        <div>
            <h3>Circle</h3>
            <div className="circle square" style={{ backgroundColor: color }}></div>
        </div>
    )
}
