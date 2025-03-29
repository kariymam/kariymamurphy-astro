import "../styles/footer.scss"

const Footer = () => {
    const clickBtn = () => {
        console.log("Click")
    }

    return (
        <footer className="main">
            <div id="footer-links">
                <h4 className="text-5xl">Contact me!</h4>
            </div>
            <hr></hr>
            <div id="footer-contact">
                {/* TODO: Add contact form  */}
            </div>
        </footer>
    )
}

export default Footer;