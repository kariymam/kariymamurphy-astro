import { Badge } from "./ui/badge";

type Props = {
    tags: string[]
}

const TagsContainer = ({ tags }: Props) => {
    return (
        <div className="flex gap-2">
            {tags.map((tag, i) => (
                <a key={i} href={`/tags/${tag}`}>
                    <Badge variant="outline">{tag}</Badge>
                </a>
            ))}
        </div>
    )
}

export default TagsContainer;