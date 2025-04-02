import 'src/styles/global.css'

type Props = {
    children: React.ReactNode;
    dimensions: number[];
}

const HeroVideo = ({ children, dimensions }: Props) => {
    const [width, height] = dimensions
    const ratioCheck = (w: number, h: number): boolean => {
        let gfc;
        let [x, y] = [Math.floor(w), Math.floor(h)];

        while (h) {
            let t = h;
            h = w % h;
            w = t;
        }
        gfc = w;
        return [x / gfc, y / gfc].join(":") !== "16:9";
    }
    if (ratioCheck(width, height)) {
        return (
            <div id="video-intro" className={`video-grid`}>
                {children}
            </div>
        )
    } else {

        return (
            <div id="video-intro">
                {children}
            </div>
        )
    }
}

export default HeroVideo;