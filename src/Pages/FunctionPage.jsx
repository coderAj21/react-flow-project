import Widgets from "../components/Widgets";

function FunctionPage({setNodes,nodes}){
    function messageHandler(){
        addExistingNode("Box");
    }
    function conditionHandler(){
        addExistingNode("Condition");
    }
    function addExistingNode(type) {
        let max = 0;
        nodes.map((prev) => (
            max = Math.max(max, parseInt(prev.id))
        ))
        setNodes((prev) => (
            [...prev,
            {
                id: max + 1 + "",
                type:type,
                position: {
                    x: 100,
                    y: 100,
                },
                data:type+"-"+(max+1),
                childNodes:[],
                isConnectable: true
            }
            ]
        ));
    }
    return (
        <div className="h-full w-[20%] py-4 pl-8 border shadow-xl">
            <div onClick={messageHandler} className="w-full hover:cursor-pointer hover:scale-95 transition duration-150 my-4">
                <Widgets
                    color={"#e95b69"}
                    heading="Send a message"
                    desc="With no response required from visitor"
                    icon={true} />
            </div>
            <div onClick={conditionHandler} className="w-full hover:cursor-pointer hover:scale-95 transition duration-150">
                <Widgets
                    color={"#6d7ed6"}
                    heading="Set a Condition"
                    desc="Send message based on logical condition"
                    icon={false} />
            </div>
            <div className="flex gap-x-2 my-4 items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p>is Source</p>
            </div>
            <div className="flex gap-x-2 my-4 items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>is Target</p>
            </div>
        </div>
    )
}

export default FunctionPage;