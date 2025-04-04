import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "./ui/card"
import TagsContainer from "./TagsContainer";
import ToolsContainer from "./ToolsContainer";
import LinksContainer, { type Link } from "./LinksContainer";

type Props = {
    children: React.ReactNode;
    description: string;
    tags: string[];
    carousel: boolean;
    gallery?: Array<{ image: string; alt: string }>;
    tools?: string[];
    links?: Array<Link>;
}

const Grid = ({ gallery, links, description, tags, tools, carousel, children }: Props) => {
    return (
        <>
            <div className="grid grid-cols-1 max-w-full md:grid-cols-2 md:grid-rows-auto mx-auto border rounded-t-xl gap-x-8">
                <div className="p-8">
                    <h2>
                        {description}
                    </h2>
                </div>
                <div className="p-8 flex flex-col gap-8 border-l">
                    <div className="flex flex-col gap-4">
                        <span>Tags</span>
                        <TagsContainer tags={tags} />
                    </div>
                    {tools && (
                        <div className="flex flex-col gap-4">
                            <span>Tool Stack</span>
                            <ToolsContainer tools={tools} />
                        </div>
                    )}
                    {links && (
                        <div className="flex flex-col gap-4">
                            <span>Links</span>
                            <LinksContainer links={links} />
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-8 pb-8 md:row-start-2 md:col-start-1 md:col-span-2">
                    {carousel ?
                        (gallery && (
                            <div className="p-8 bg-accent">
                                <Carousel className="translate-x-1">
                                    <CarouselContent className="items-center">
                                        {gallery.map(({ image, alt }, idx) => (
                                            <CarouselItem key={idx}>
                                                <Card className="max-w-fit m-auto">
                                                    <img className="object-cover mx-auto max-h-[70vh] object-top" src={image} alt={alt} />
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </div>
                                </Carousel>
                            </div>
                        )) : (gallery && gallery.map(({ image, alt }) => (
                            <div className="max-w-fit m-auto px-8 overflow-hidden">
                                <img className="object-cover border rounded-xl w-full mx-auto object-top" src={image} alt={alt} />
                            </div>
                        )))
                    }
                </div>
            </div>
            <div className="border-x border-b rounded-b-xl flex flex-col gap-8 p-8">
                {children}
            </div>
        </>
    )
}

export default Grid;