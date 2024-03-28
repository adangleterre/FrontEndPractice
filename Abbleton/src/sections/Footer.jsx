import BrandLogo from "../components/BrandLogo"
import InputCombo from "../components/InputCombo"
import { SiX } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

function Footer() {
    return (
        <footer className="flex flex-col w-10/12 gap-[8vw] lg:gap-20 pt-[8vw] mx-auto lg:pt-32">
            <div>
                <BrandLogo />
            </div>
            <div className="flex flex-col gap-[8vw] lg:gap-0 flex-nowrap lg:flex-row-reverse">
                <div className="lg:w-1/3">
                    <label>
                        <h3 className="font-medium">Sign up to our newsletter</h3>
                        <p className="font-normal leading-6">Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    </label>
                    <form className="mt-4">
                        <InputCombo />
                    </form>
                </div>
                <div className="lg:w-1/3 lg:order-1">
                    <ul className="text-xl">
                        <li><a href="#" className="font-normal">Register Live or Push</a></li>
                        <li><a href="#" className="font-normal">About Ableton</a></li>
                        <li><a href="#" className="font-normal">Jobs</a></li>
                    </ul>
                    <div className="flex mt-2.5 gap-3">
                        <a href="#"><SiFacebook className="mediaIcons"/></a>
                        <a href="#"><SiX className="mediaIcons"/></a>
                        <a href="#"><SiYoutube className="mediaIcons"/></a>
                        <a href="#"><SiInstagram className="mediaIcons"/></a>
                        <a href="#"><SiTiktok className="mediaIcons"/></a>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <h3 className="font-medium">Education</h3>
                    <ul>
                        <li><a href="#" className="font-normal">Offers for students and teachers</a></li>
                        <li><a href="#" className="font-normal">Ableton for the Classroom</a></li>
                        <li><a href="#" className="font-normal">Ableton for Colleges and Universities</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[8vw] lg:gap-0 flex-nowrap lg:flex-row">
                <div className="lg:w-1/3">
                    <h3 className="font-medium">Community</h3>
                    <ul>
                        <li><a href="#" className="font-normal">Find Ableton User Groups</a></li>
                        <li><a href="#" className="font-normal">Find Certified Training</a></li>
                        <li><a href="#" className="font-normal">Become a Certified Trainer</a></li>
                    </ul>
                </div>
                <div className="lg:w-2/3">
                    <h3 className="font-medium">Language and Location</h3>
                    <form className="flex gap-0.5 mt-3">
                        <select class="bg-[#eee] cursor-pointer text-sm w-full max-w-[120px] py-1.5 px-3">
                            <option value="ES">Espanol</option>
                            <option value="IT">Italiano</option>
                            <option value="FR">Français</option>
                            <option value="DE">Deutcsh</option>
                        </select>
                        <select class="bg-[#eee] cursor-pointer text-sm w-full max-w-[200px] py-1.5 px-3">
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="JA">Japan</option>
                            <option value="CH">China</option>
                            <option value="AU">Australia</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-[8vw] flex-nowrap lg:flex-row lg:justify-between">
                <div>
                    <ul className="flex flex-col gap-1 text-sm lg:gap-4 lg:flex-row">
                        <li><a href="#" className="text-sm font-medium">Contact Us</a></li>
                        <li><a href="#" className="text-sm font-medium">Press Resources</a></li>
                        <li><a href="#" className="text-sm font-medium">Legal Info</a></li>
                        <li><a href="#" className="text-sm font-medium">Privacy Policy</a></li>
                        <li><a href="#" className="text-sm font-medium">Cookie Settings</a></li>
                        <li><a href="#" className="text-sm font-medium">Imprint</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                    <BrandLogo />
                    <p className="text-sm font-medium">Made in Berlin</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer