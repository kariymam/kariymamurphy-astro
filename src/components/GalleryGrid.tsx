import type { CollectionEntry } from 'astro:content';
import GalleryItem from "./GalleryItem";

type Props = {
  collection: CollectionEntry<'work'>[]
}

export default function Gallery({ collection }: Props) {
  return(
    <div className="article-grid">
      <div className="gallery wide-area">
        <div
          className="grid max-w-full md:grid-cols-3 md:grid-rows-auto mx-16 gap-y-8 gap-x-8 grid-flow-row"
        >
          {
            collection.map((post, i) => (
              <GalleryItem key={i} post={post}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}