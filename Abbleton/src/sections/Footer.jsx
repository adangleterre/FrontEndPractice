import BrandLogo from "../components/BrandLogo"
import InputCombo from "../components/InputCombo"

function Footer() {
    return (
        <footer className="flex flex-col w-10/12 gap-10 py-10 mx-auto">
            <div className="w-full">
                <BrandLogo />
            </div>
            <div className="flex flex-col gap-10 flex-nowrap lg:flex-row-reverse">
                <div className="lg:w-1/3">
                    <label>
                        <h3>Sign up to our newsletter</h3>
                        <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    </label>
                    <form className="mt-4">
                        <InputCombo />
                    </form>
                </div>
                <div className="lg:w-1/3">
                    <ul>
                        <li>Register Live or Push</li>
                        <li>About Ableton</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className="lg:w-1/3">
                    <h3>Education</h3>
                    <ul>
                        <li>Offers for students and teachers</li>
                        <li>Ableton for the Classroom</li>
                        <li>Ableton for Colleges and Universities</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-10 flex-nowrap lg:flex-row">
                <div className="lg:w-1/3">
                    <h3>Community</h3>
                    <ul>
                        <li>Find Ableton User Groups</li>
                        <li>Find Certified Training</li>
                        <li>Become a Certified Trainer</li>
                    </ul>
                </div>
                <div className="lg:w-2/3">
                    <h3>Language and Location</h3>
                </div>
            </div>
            <div className="flex flex-col gap-10 flex-nowrap lg:flex-row lg:justify-between">
                <div>
                    <ul className="flex flex-col lg:flex-row">
                        <li>Contact Us</li>
                        <li>Press Resources</li>
                        <li>Legal Info</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Imprint</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                    <BrandLogo />
                    <p>Made in Berlin</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer