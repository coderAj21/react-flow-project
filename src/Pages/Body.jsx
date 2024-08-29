import React, { useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState, addEdge, Controls, MiniMap, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import FunctionPage from "./FunctionPage";

import Box from '../components/Box';
import Condition from '../components/Condition';
import CustomEdge from '../components/CustomEdge';
const nodeTypes = {
    Box: Box,
    Condition: Condition
};
const edgeTypes = {
    customEdge: CustomEdge
}

function Body(){
    const initialNodes = [
        { id: '1', type: "Box", position: { x: 0, y: 0 }, childNodes: [
            { id: '2', type: "Condition", position: { x: 100, y: 200 }, childNodes: [], data: 'Box 2', isConnectable: true },
            
        ], data: 'Box 1', isConnectable: true },
        { id: '2', type: "Condition", position: { x: 100, y: 200 }, childNodes: [], data: 'Box 2', isConnectable: true }
    ];
    const initialEdges = [{ id: '1->2', source: '1', target: '2',type:'customEdge' }];
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => {
        console.log(params);
        params.id=`${params.source}->${params.target}`
        params.type ='customEdge'
        if (!addChildNodesToParent(params.source, params.target)) {
            alert("You can connect node to itself");
            return;
        };
        setEdges((eds) => addEdge(params, eds));
        console.log(nodes);
    });

    function addChildNodesToParent(source, target) {
        if (source === target) return false;
        let parent, child;
        nodes.forEach((val, index) => {
            if (val.id === source) parent = nodes[index];
            if (val.id === target) child = nodes[index];
        })
        parent.childNodes.push(child);
        console.log(`${parent.data} is conneted to ${child.data}`);
        return true;
    }
    
    return (
        <div className="w-full h-full flex gap-x-2">
            <FunctionPage setNodes={setNodes} nodes={nodes} />
            <div className="h-full w-[80%] border shadow-lg">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                >
                    <Controls />
                    <MiniMap />
                    <Background color='#94a3b8' variant="cross" gap={45} size={100} />
                </ReactFlow>
            </div>
        </div>
    )
}

export default Body;