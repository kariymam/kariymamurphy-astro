import '../styles/gallery.scss';
import type { CollectionEntry } from 'astro:content';
import GalleryItem from "./GalleryItem";

type Props = {
  collection: CollectionEntry<'work'>[]
}

export default function Gallery({ collection }: Props) {
  return (
    <div id="gallery" className="gallery ">
      <ul
        className="masonry col-span-full pt-5 max-w-[1200px] mx-auto"
      >
        {
          collection.map((post, i) => (
            <GalleryItem galleryItem={`gallery-item-${i + 1}`} post={post} className="mx-4 my-4 gallery-card transition-all flex flex-col relative overflow-hidden border rounded-xl">
              <img
                className="object-cover w-full h-full"
                src={post.data.image.url}
                alt={post.data.image.alt}
              />
            </GalleryItem>

          ))
        }
      </ul>
    </div>
  )
}