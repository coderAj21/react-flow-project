import {Handle,Position,NodeToolbar} from "@xyflow/react";
import { useState } from "react";
import Option from "./Option";
import { BiMessageRoundedDetail } from "react-icons/bi";

function Box(props){
    let data=props.data;
    let arr=["Message","Image","Video","Audio","Docs"];
    const [isFunction , setIsFunction]=useState(false);
    return(
        <div className="w-[300px] rounded-md h-fit border border-black">
            <div>
                {
                    isFunction && <NodeToolbar position={Position.Top} align="end"><Option data={props} setIsFunction={setIsFunction} /></NodeToolbar>
                }
            </div>
            <Handle className="w-4 h-4 bg-red-500" type="target" position={Position.Left} />
            <div className="flex flex-row items-center text-lg text-white justify-around bg-[#e95b69] py-2">
                <span className="text-4xl"><BiMessageRoundedDetail/></span>
                <p className="font-semibold">Send a Message</p>
                <p onClick={() => setIsFunction(!isFunction)} className="font-bold hover:cursor-pointer">⋮</p>
            </div>
            <div className="flex flex-wrap gap-4 m-3 my-4 hover:cursor-pointer">
                {
                    arr.map((val,index)=>{
                        return <p key={val+index} onClick={()=>(alert("function coming sooon....."))} className="w-[80px] text-center border-2 px-2 py-1 rounded-md
                        border-green-600 bg-green-100 text-green-800">{val}</p>
                    })
                }
            </div>
        <Handle className="w-4 h-4 bg-green-500" type="source" position={Position.Right} />
        </div>
    )
}

export default Box;