type Props = {
    title: string;
}

const HeroImageBrowserUI = ({ title }: Props) => {
    return (
        <div className="browser-window">
            <div className="browser-ui device-grid">
                <svg className="desktop-buttons" viewBox="0 0 72 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="12" cy="12" r="8" fill="rgba(0, 0, 0, 0.2)" stroke="1"></circle>
                        <circle cx="36" cy="12" r="8" fill="rgba(0, 0, 0, 0.1)" stroke="1"></circle>
                        <circle cx="60" cy="12" r="8" fill="rgba(0, 0, 0, 0.2)" stroke="1"></circle>
                    </g>
                </svg>
                <div className="browser-searchbar">
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="rgba(0,0,0,0.2)"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
                        </span>
                        <small className="text-truncate">{title}</small>
                    </div>
                </div>
                <svg id="mobile-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100% 4" height="4">
                    <rect fill="white" width="100%" height="4" rx="4" ry="4"></rect>
                </svg>
            </div>
            <div className="mobile-frame device-grid">
                <svg id="mobile-notch" viewBox="0 0 375 812" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g style={{ transform: "translate(22%, 0)" }}>
                        <path fill="rgb(0, 0, 0)" fillOpacity="0.2" d="M 109.804,0 H 108.5 107.196 51.083 0 c 0,0 8.999,0 8.999,13.969 0,17.961 23.046,15.965 23.046,15.965 h 75.151 2.608 75.151 c 0,0 23.046,1.996 23.046,-15.965 C 208.001,0 217,0 217,0 h -51.083 z" id="path1" />
                        <g id="g5">
                            <rect fill="white" stroke="1.43316" id="rect4" width="44" height="6" x="82.880241" y="10.912464" ry="2.2092319" />
                            <circle fill="white" id="path5" cx="148.91631" cy="13.912464" r="3.2672398" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default HeroImageBrowserUI;