type Props = {
    tools: string[]
}

const ToolsContainer = ({ tools }: Props) => {
    return (
        <div className="flex gap-2">
            {tools && tools.map((tool, i) => (
                <i key={i} className={`devicon-${tool.toLowerCase()}-plain text-4xl`}></i>
            ))}
        </div>
    )
}

export default ToolsContainer;