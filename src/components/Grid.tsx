import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "./ui/card"

type Props = {
    children: React.ReactNode;
    tags: string[];
    column?: number;
    gallery?: Array<{ image: string; alt: string }>;
    tools?: string[];
}

const Grid = ({ column, gallery, tags, tools, children }: Props) => {
    if (column === 2) {
        return (
            <>
                <div className="grid grid-cols-1 max-w-full md:grid-cols-2 md:grid-rows-auto mx-auto gap-y-8 gap-x-8">
                    <Card className="p-8">
                        <div>
                            {children}
                        </div>
                    </Card>
                    <Card className="p-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3>Tags</h3>
                            <div className="flex gap-2">
                                {tags.map((tag, i) => (
                                    <a key={i} className="bg-accent text-accent-foreground hover:opacity-75 px-4 rounded-2xl" href={`/tags/${tag}`}>{tag}</a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3>Tech Stack</h3>
                            <div className="flex">
                                {tools && tools.map((tool, i) => (
                                    <i key={i} className={`devicon-${tool.toLowerCase()}-plain text-4xl`}></i>
                                ))}
                            </div>
                            {/* https://devicon.dev */}
                        </div>
                        <div>Links </div>
                    </Card>
                    <div className="md:row-start-2 md:col-start-1 md:col-span-2">
                        {gallery && (
                            <Card className="p-8">
                                <Carousel className="translate-x-1">
                                    <CarouselContent className="items-center">
                                        {gallery.map(({ image, alt }, idx) => (
                                            <CarouselItem key={idx}>
                                                <img className="object-cover mx-auto max-h-screen object-top" src={image} alt={alt} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </div>
                                </Carousel>
                            </Card>
                        )}
                        {/* TODO: Tags, Tech Stack, Links */}
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default Grid;