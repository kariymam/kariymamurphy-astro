import type { CollectionEntry } from "astro:content";
import ToolsContainer from "./ToolsContainer";

type Props = {
    galleryItem: string | undefined;
    className?: React.CSSProperties | string;
    children: React.ReactNode;
    post: CollectionEntry<'work'>
}

const GalleryItem = ({ className, children, galleryItem, post }: Props) => {
    return (
        <li tabIndex={-1} id={galleryItem} className={`${className}`}>
            <div className="py-0 h-full relative">
                {children}
            </div>
            {post.data.deviceFrame && post.data.tools ? (
                <div className="p-8 mt-auto justify-end flex flex-col gap-4 rounded-b-xl w-full bg-background">
                    <h3 className="hover:underline">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h3>
                    <p className="gallery-description">{post.data.description}</p>
                    <div className="flex gap-1">
                    {post.data.tools && <ToolsContainer tools={post.data.tools} />}
                    </div>
                </div>
            ) : (
                <div className="flex items-end gap-4 h-full w-full absolute p-8 bottom-0">
                    <h3 className="text-sm grow hover:underline mt-auto text-card">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h3>
                    {post.data.tools && <ToolsContainer tools={post.data.tools} text={["text-xl", "text-card"]} />}
                </div>
            )}
        </li>
    )
}

export default GalleryItem;