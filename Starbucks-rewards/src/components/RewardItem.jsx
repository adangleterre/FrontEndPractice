import {GoLinkExternal} from "react-icons/go";

function RewardItem({imageSrc, linkText, description, href}) {
    return (
        <div className="flex md:flex-col items-center text-left md:text-center">
            <img src={imageSrc} width="190px" className="max-w-28 md:max-w-48 h-max" alt=""/>
            <p className="pl-4 md:pt-8">
                <a href={href} className="inline-flex items-center text-[#006241] underline">
                    <span>{linkText}</span>
                    <GoLinkExternal className='mx-1'/>
                </a>
                {description}
            </p>
        </div>
    );
}

export default RewardItem;