import { Badge } from "./ui/badge";

type Props = {
    tags: string[]
}

const TagsContainer = ({ tags }: Props) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
                <a className="tags uppercase" key={i} href={`/tags/${tag}`}>
                    <Badge variant="outline" className="text-slate-500 hover:text-foreground">{tag}</Badge>
                </a>
            ))}
        </div>
    )
}

export default TagsContainer;