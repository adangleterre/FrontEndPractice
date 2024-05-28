function FaqTopic({ iconSrc, topic, description }) {
    return (
        <div className="flex mb-12">
            <div className="w-2/12 mr-5 sm:w-2/12 md:mr-8">
                <img src={iconSrc} alt={topic + ` icon`} className="max-h-16 md:max-h-32"/>
            </div>
            <div className="flex flex-col w-9/12 sm:w-10/12">
                <h4 className="mb-4 text-2xl font-bold">{topic}</h4>
                <p className="mb-5 text-2xl">{description}</p>
                <a href="http://" target="_blank" className="text-[#4C5FD5] hover:underline text-xl">Learn More →</a>
            </div>
        </div>
    )
}

export default FaqTopic