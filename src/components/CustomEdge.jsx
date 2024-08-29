import React from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge, useReactFlow } from '@xyflow/react';
import { GiCancel } from "react-icons/gi";

const CustomEdge = ({id,source,target,...props }) => {
    const [edgePath, labelX, labelY] = getBezierPath(props);
    const {getNodes,setEdges,setNodes}=useReactFlow();
    function edgehandler(){
        setEdges((prev)=>(
            prev.filter((edge)=>(
                edge.id!==id
            ))
        ));
        let arr=getNodes();
        arr.forEach((val) => {
            if (val.id === source) {
                val.childNodes.forEach((edge,index)=>{
                    if(edge.id===target){
                        val.childNodes.splice(index,1);
                    }
                });
            }
        });
        setNodes(arr);
    }
    return (
        <>
            <BaseEdge path={edgePath} />
            <EdgeLabelRenderer>
                <div className="absolute p-2 rounded-md font-bold text-2xl text-red-500 pointer-events-auto hover:cursor-pointer"
                style={{transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,}}>
                    {<GiCancel onClick={edgehandler} />}
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdge;