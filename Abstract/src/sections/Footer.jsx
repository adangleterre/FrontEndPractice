import minimalBrandLogo from '../assets/minimal-abstract-logo.svg'

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row px-4 pt-12 pb-[60px] font-medium text-white bg-black lg:px-[5%]">
            <div className="flex flex-wrap justify-center w-full md:w-6/12 lg:w-8/12">
                <div className="flex flex-col w-6/12 mb-12 lg:w-3/12">
                    <h3 className="mb-4 text-2xl font-bold">Abstract</h3>
                    <a href="#">Start Trial</a>
                    <a href="#">Pricing</a>
                    <a href="#">Download</a>
                </div>
                <div className="flex flex-col w-6/12 mb-12 lg:w-3/12">
                    <h3 className="mb-4 text-2xl font-bold">Ressources</h3>
                    <a href="#">Blog</a>
                    <a href="#">Help Center</a>
                    <a href="#">Release Notes</a>
                    <a href="#">Status</a>
                </div>
                <div className="flex flex-col w-6/12 mb-12 lg:w-3/12">
                    <h3 className="mb-4 text-2xl font-bold">Community</h3>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Facebook</a>
                    <a href="#">Dribbble</a>
                    <a href="#">Podcast</a>
                </div>
                <div className="flex flex-col w-6/12 mb-12 lg:w-3/12">
                    <h3 className="mb-4 text-2xl font-bold">Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Legal</a>
                    <h3 className="mt-8 font-bold">Contact Us</h3>
                    <a href="#">info@abstract.com</a>
                </div>
            </div>
            <div className="flex flex-col self-end w-full text-xl md:w-6/12 lg:w-4/12">
                <img src={minimalBrandLogo} className='self-start mb-5 max-h-9' />
                <p>© Copyright 2023</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer