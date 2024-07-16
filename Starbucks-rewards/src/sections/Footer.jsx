import FooterAccordions from "../components/FooterAccordions.jsx";

const icons = [
    {
        name: "spotify",
        src: "/images/icons/spotify-icon.svg",
    },
    {
        name: "facebook",
        src: "/images/icons/facebook-icon.svg",
    },
    {
        name: "pinterest",
        src: "/images/icons/pinterest-icon.svg",
    },
    {
        name: "instagram",
        src: "/images/icons/instagram-icon.svg",
    },
    {
        name: "youtube",
        src: "/images/icons/youtube-icon.svg",
    },
    {
        name: "twitter",
        src: "/images/icons/twitter-icon.svg",
    },
]

const legalLinks = [
    {
        name: "Privacy Notice",
        urlLink: "#",
    },
    {
        name: "Consumer Health Privacy Notice",
        urlLink: "#",
    },
    {
        name: "Terms of Use",
        urlLink: "#",
    },
    {
        name: "Do not Share My Personal Information",
        urlLink: "#",
    },
    {
        name: "CA Supply Chain Act",
        urlLink: "#",
    },
    {
        name: "Accessibility",
        urlLink: "#",
    },
    {
        name: "Cookie Preferences",
        urlLink: "#",
    }
]

function Footer() {
    return (
        <footer className="pt-8 pb-[146px] border-t-2">
            <nav className="py-4 max-w-[1440px] m-auto">
                <FooterAccordions/>
                <hr className="py-5"/>
                <ul className="inline-flex gap-3">
                    {icons.map((icon) => (
                        <li key={icon}>
                            <a href="#">
                                <img src={icon.src} alt={icon.name + " icon link"}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-4 mt-8 mb-4">
                    {legalLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.urlLink}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <p className="py-3 text-[#00000094]">© 2024 Starbucks Coffee Company. All rights reserved.</p>
            </nav>
        </footer>
    );
}

export default Footer;