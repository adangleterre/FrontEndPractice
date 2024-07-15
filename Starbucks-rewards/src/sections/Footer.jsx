import FooterAccordion from "../components/FooterAccordion.jsx";

function Footer() {
    return (
        <footer className="pt-8 pb-[146px] border-t-2">
            <nav className="px-4">
                <FooterAccordion items={"test"}/>
                <hr className="py-5"/>
                <ul className="inline-flex gap-3">
                    <li><a href="#">
                        <img src="/images/icons/spotify-icon.svg" alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img src="/images/icons/facebook-icon.svg" alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img src="/images/icons/pinterest-icon.svg" alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img src="/images/icons/instagram-icon.svg" alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img src="/images/icons/youtube-icon.svg" alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img src="/images/icons/twitter-icon.svg" alt=""/>
                    </a></li>
                </ul>
                <ul className="flex flex-col gap-4 mt-8 mb-4">
                    <li><a href="#">Privacy Notice</a></li>
                    <li><a href="#">Consumer Health Privacy Notice</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Do not Share My Personal Information</a></li>
                    <li><a href="#">CA Supply Chain Act</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                </ul>
                <p className="py-3 text-[#00000094]">© 2024 Starbucks Coffee Company. All rights reserved.</p>
            </nav>
        </footer>
    );
}

export default Footer;