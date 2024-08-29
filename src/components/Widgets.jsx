import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";


function Widgets({heading,desc,color,icon}){

    return (
        <div className={`w-4/5 m-1 flex justify-between border px-4 py-2 bg-[${color}] text-white select-none`}>
            <div className="w-4/5 flex flex-col font-semibold">
                <p>{heading}</p>
                <p className="text-sm">{desc}</p>
            </div>
            <div className="text-3xl">
                {icon ? <BiMessageRoundedDetail /> : <MdReportProblem />}
            </div>
        </div>
    );
}

export default Widgets;