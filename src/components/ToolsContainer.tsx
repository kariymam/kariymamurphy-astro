type Props = {
    tools: string[];
    text?: string[];
}

const ToolsContainer = ({ text = ["text-xl", "text-slate-400"], tools }: Props) => {
    return (
        <div className="flex gap-2">
            {tools && tools.map((tool, i) => (
                <i key={i} className={`devicon-${tool.toLowerCase().replace(" ", "")}-plain ${text && text.join(" ")} py-1`}></i>
            ))}
        </div>
    )
}

export default ToolsContainer;