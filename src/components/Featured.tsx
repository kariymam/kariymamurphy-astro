import type { CollectionEntry } from "astro:content";
import HeroImage from "./HeroImage";
import TagsContainer from "./TagsContainer";

type Props = {
    post: CollectionEntry<'featured'>
}

const Featured = ({ post }: Props) => {
    return (
        <div className="overflow-hidden grid md:grid-cols-2 h-screen bg-accent">
            <div className="max-w-[442px] m-auto">
                <h3>{post.data.title}</h3>
                <p>{post.data.description}</p>
                <TagsContainer tags={post.data.tags}/>
            </div>
            <HeroImage pageTitle="Weather App">
                <img src="/portfolio-images/path2tech_weatherapp_desktop.png" alt="Alt text" />
            </HeroImage>
        </div>
    )
}

export default Featured;