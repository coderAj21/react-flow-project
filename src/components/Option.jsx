import { useReactFlow } from "@xyflow/react";


function Option({ data, setIsFunction }){
    const {setNodes,getNodes}=useReactFlow();
    console.log(getNodes());
    function addExistingNode(){
        let max=0;
        getNodes().map((prev)=>(
            max = Math.max(max, parseInt(prev.id))
        ))
        setNodes((prev)=>(
            [...prev,
            { 
                id: max + 1 + "",
                type: data.type,
                position: { x: Number(data.positionAbsoluteX) + 10,
                            y: Number(data.positionAbsoluteY) + 10,
                },
                data:data.data,
                childNodes:[],
                isConnectable: true
            }
        ]
        ));
        setIsFunction(false);
    }
    function deleteExistingNode(){
        setNodes((prev)=>(
            prev.filter(node=>node.id!==data.id)
        ))
        setIsFunction(false);
    };
    return(
        <div className="w-[150px] bg-zinc-100 flex flex-col items-start shadow-xl m-1">
            <button onClick={addExistingNode} className="w-full border-b-2 hover:scale-105 transition duration-150">Copy</button>
            <button onClick={deleteExistingNode} className="w-full border-b-2 hover:scale-105 transition duration-150">Delete</button>
        </div>
    )
}

export default Option;