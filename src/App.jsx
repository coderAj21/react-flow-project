import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Box from './components/Box';
import Body from './Pages/Body';
const nodeTypes={Box:Box};
const initialNodes = [
  { id: '1',type:"Box",position: { x: 0, y: 0 },childNodes:[], data:'Box 1' , isConnectable:true },
  { id: '2', type: "Box", position: { x: 0, y: 100 }, childNodes: [], data:"Box 2" },
  { id: '3', type: "Box", position: { x: 100, y: 200 }, childNodes: [], data: "Box 3" },
  { id: '4', type: "Box", position: { x: 200, y: 300 }, childNodes: [], data: "Box 4" },
];


export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params)=>{
    console.log(params);
    if (!addChildNodesToParent(params.source, params.target)){
      alert("You can connect node to itself");
      return;
    };
    setEdges((eds) => addEdge(params, eds));
    console.log(nodes);
  });

  function addChildNodesToParent(source,target){
    if (source===target)return false;
    let parent,child;
    nodes.forEach((val,index)=>{
      if (val.id===source)parent=nodes[index];
      if (val.id===target)child=nodes[index];
    })
    parent.childNodes.push(child);
    console.log(`${parent.data} is conneted to ${child.data}`);
    return true;  
  }

  return (
    <div className='w-screen h-screen'>
      {/* <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        >
        <Controls />
        <MiniMap />
        <Background color='#94a3b8' variant="cross" gap={45} size={100} />
        </ReactFlow> */}
        <Body/>
    </div>
  );
}