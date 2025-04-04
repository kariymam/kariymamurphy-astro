import "../styles/hero.scss";
import { useRef, useState } from 'react';
import DeviceToggleButton from "./DeviceToggleButton";
import BrowserUI from "./BrowserUI";

type Props = {
    children: React.ReactNode;
    mobile?: boolean;
    pageTitle: string;
}

export default function HeroImage({ children, mobile, pageTitle }: Props) {
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
            {mobile && (<DeviceToggleButton toggleView={toggleView} toggleTo={current.toggleTo} />)}
            <div className="project-image">
                <div className={`${current.device} hero`}>
                    <BrowserUI title={pageTitle} />
                    <svg className="window-gradient">
                        <defs>
                            <linearGradient id="deviceGradient" gradientTransform="rotate(90)">
                                <stop offset="20%" stopColor="rgba(0, 0, 0, 0)" />
                                <stop offset="90%" stopColor="rgba(0, 0, 0, 0.2)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {children}
                </div>
            </div>
        </>
    )
}