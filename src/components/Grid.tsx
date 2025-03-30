import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "./ui/card"

type Props = {
    title: string;
    children: React.ReactNode;
    column?: number;
    gallery?: Array<{ image: string; alt: string }>;
}

const Grid = ({ title, column, gallery, children }: Props) => {
    if (column === 2) {
        return (
            <div className="wide-area place-self-center">
                <div className="grid md:grid-cols-2 md:grid-rows-auto mx-auto md:max-w-[1017px] gap-y-8 gap-x-8">
                    <Card className="p-8">
                        <h1>{title}</h1>
                        <div>
                            {children}
                        </div>
                    </Card>
                    <Card className="p-8">
                        <div>Tags</div>
                        <div>Tech Stack</div>
                        <div>Links </div>
                    </Card>
                    <div className="row-start-2 col-start-1 col-span-2">
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
            </div>
        )
    } else {
        return (
            <>
                <h1>{title}</h1>
                {children}
            </>
        )
    }
}

export default Grid;