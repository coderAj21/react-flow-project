import React from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge, useReactFlow } from '@xyflow/react';
import { GiCancel } from "react-icons/gi";

const CustomEdge = ({id,source,target,...props }) => {
    const [edgePath, labelX, labelY] = getBezierPath(props);
    const {getNodes,setEdges}=useReactFlow();
    function edgehandler(){
        setEdges((prev)=>(
            prev.filter((edge)=>(
                edge.id!==id
            ))
        ));
        let parent;
        getNodes().map((val)=>{
            
            if (val.id===source){
                parent=val;
            }
        })
        parent.childNodes.filter((edge)=>(
            edge.id!=target
        ));
    }
    return (
        <>
            <BaseEdge path={edgePath} />
            <EdgeLabelRenderer>
                <div className="absolute p-2 rounded-md font-bold text-2xl text-red-500 pointer-events-auto"
                style={{transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,}}>
                    {<GiCancel onClick={edgehandler} />}
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdge;