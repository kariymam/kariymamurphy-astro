const FooterContact = () => {
    const scrollUp = (event: React.FocusEvent<HTMLElement>): void => {
        let [x, y] = [window.scrollX, window.scrollY]
        const vh = Math.max(event.target.clientHeight || 0, window.innerHeight || 0)
        window.scroll(x, y += vh)
    }
    return (
        <div
            id="footer-contact"
            className="max-w-full w-full flex flex-col gap-4 md:w-xl p-8 bg-slate-950 text-4xl text-white z-[1]"
        >
            <p>Interested in working together? <a onFocus={scrollUp} className="underline" href={`mailto:${`kariymam@proton.me`}`}>Email me</a> or book a call.</p>
        </div>
    )
}

export default FooterContact;