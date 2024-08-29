import { Handle, Position, NodeToolbar } from "@xyflow/react";
import { useState } from "react";
import Option from "./Option";
import { MdReportProblem } from "react-icons/md";

function Condition(props) {
    let data = props.data;
    const [isFunction, setIsFunction] = useState(false);
    return (
        <div className="w-[300px] rounded-md h-fit border border-black">
            <div>
                {
                    isFunction && <NodeToolbar position={Position.Top} align="end"><Option data={props} setIsFunction={setIsFunction} /></NodeToolbar>
                }
            </div>
            <Handle className="w-4 h-4 bg-red-500" type="target" position={Position.Left} />
            <div className="flex flex-row items-center text-lg text-white justify-around bg-[#6d7ed6] py-2">
                <span className="text-4xl"><MdReportProblem /></span>
                <p className="font-semibold">Set a Condtion</p>
                <p onClick={() => setIsFunction(!isFunction)} className="font-bold hover:cursor-pointer">⋮</p>
            </div>
            <p className="my-4 text-center">This is Condition Content</p>
            <Handle className="w-4 h-4 bg-green-500" type="source" position={Position.Right} />
        </div>
    )
}

export default Condition;