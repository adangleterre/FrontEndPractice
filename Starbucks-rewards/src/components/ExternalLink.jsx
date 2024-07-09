import {GoLinkExternal} from "react-icons/go";

function ExternalLink({textLink}) {
    return (
        <a href="#" className="inline-flex items-center text-[#006241] underline mx-1">
            <span>{textLink}</span>
            <GoLinkExternal className='mx-1'/>
        </a>
    )
}

export default ExternalLink;