import type { CollectionEntry } from "astro:content";

type Props = {
    key: number;
    post: CollectionEntry<'work'>
}

const GalleryItem = ({ key, post }: Props) => {
    return (
        <div tabIndex={-1} className="gallery-card transition-all flex flex-col relative overflow-hidden border rounded-xl">
            <div className="py-0 h-full relative">
                <img
                    className="object-cover w-full h-full"
                    src={post.data.image.url}
                    alt={post.data.image.alt}
                />
            </div>
            {post.data.deviceHero ? (
                <div className="p-8 mt-auto justify-end flex flex-col gap-4 rounded-b-xl w-full bg-background">
                    <h2 className="hover:underline">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h2>
                    <p>{post.data.description}</p>
                    <div className="flex gap-1 text-slate-400">
                        {post.data.tools &&
                            post.data.tools.map((tool, i) => (
                                <i
                                    key={i} className={`devicon-${tool.toLowerCase()}-plain text-xl`}
                                />
                            ))}
                    </div>
                </div>
            ) : (
                <div className="flex h-full w-full absolute p-8 bottom-0">
                    <h2 className="hover:underline mt-auto">
                        <a href={`/work/${post.id}`}>{post.data.title}</a>
                    </h2>
                </div>
            )}
        </div>
    )
}

export default GalleryItem;