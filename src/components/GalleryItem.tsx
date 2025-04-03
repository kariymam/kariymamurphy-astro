import type { CollectionEntry } from "astro:content";

type Props = {
    galleryItem: string | undefined;
    className?: React.CSSProperties;
    children: React.ReactNode;
    post: CollectionEntry<'work'>
}

const GalleryItem = ({ className, children, galleryItem, post }: Props) => {
    return (
        <li tabIndex={-1} id={galleryItem} className={`${className}`}>
            <div className="py-0 h-full relative">
                {children}
            </div>
            {post.data.deviceFrame && post.data.tools ?  (
                <div className="p-8 mt-auto justify-end flex flex-col gap-4 rounded-b-xl w-full bg-background">
                    <h2 className="hover:underline">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h2>
                    <p>{post.data.description}</p>
                    <div className="flex gap-1 text-slate-400">
                        {
                            post.data.tools.map((tool, i) => (
                                <i
                                    key={i} className={`devicon-${tool.toLowerCase()}-plain text-xl`}
                                />
                            ))}
                    </div>
                </div>
            ) : (
                <div className="flex h-full w-full absolute p-8 bottom-0">
                    <h2 className="hover:underline mt-auto text-card">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h2>
                </div>
            )}
        </li>
    )
}

export default GalleryItem;