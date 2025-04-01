import type { CollectionEntry } from 'astro:content';
import GalleryItem from "./GalleryItem";

type Props = {
  collection: CollectionEntry<'work'>[]
}

export default function Gallery({ collection }: Props) {
  return (
    <div className="article-grid">
      <div className="gallery ">
        <div
          className="grid max-w-full md:grid-cols-3 md:grid-rows-auto mx-16 gap-y-8 gap-x-8 grid-flow-row"
        >
          {
            collection.map((post, i) => (
              <GalleryItem key={i} post={post}>
                <img
                  className="object-cover w-full h-full"
                  src={post.data.image.url}
                  alt={post.data.image.alt}
                />
              </GalleryItem>

            ))
          }
        </div>
      </div>
    </div>
  )
}