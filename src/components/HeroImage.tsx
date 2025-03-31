import "../styles/hero.scss";
import { useRef, useState } from 'react';
import DeviceToggleButton from "./DeviceToggleButton";
import { Card } from "./ui/card";
import BrowserUI from "./BrowserUI";

type Props = {
    imageURL: string;
    imageAlt: string;
    mobile?: boolean;
    mobileImgUrl?: string;
    pageTitle: string;
}

export default function HeroImage({ imageURL, imageAlt, mobile, mobileImgUrl, pageTitle }: Props) {
    const initialDevice = { device: "desktop", toggleTo: "mobile" }

    const isToggled = useRef(false);
    const [current, setCurrent] = useState(initialDevice)

    const switchDevice = (): void => {
        return isToggled.current ? setCurrent({ device: "mobile", toggleTo: "desktop" }) : setCurrent(initialDevice)
    };

    const toggleView = (): void => {
        if (!document.startViewTransition) {
            switchDevice();
            return;
        }
        isToggled.current = !isToggled.current;
        document.startViewTransition(() => switchDevice());
    }

    return (
        <>
            {mobile && (<DeviceToggleButton toggleView={toggleView} toggleTo={current.toggleTo}/>)}
            <div id="intro" className="bg-accent">
                <div id="hero" className={`${current.device} hero`}>
                    <BrowserUI title={pageTitle}/>
                    <svg className="window-gradient">
                        <defs>
                            <linearGradient id="deviceGradient" gradientTransform="rotate(90)">
                                <stop offset="20%" stopColor="rgba(0, 0, 0, 0)" />
                                <stop offset="90%" stopColor="rgba(0, 0, 0, 0.2)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <img className="desktop" src={imageURL} alt={imageAlt} />
                    <img className="mobile" src={mobileImgUrl} alt={imageAlt} />
                    {/* <!--   <iframe title="Weather App" width="100%" height="100%" src="https://chic-swan-8ad817.netlify.app"></iframe> --> */}
                </div>
            </div>
        </>
    )
}