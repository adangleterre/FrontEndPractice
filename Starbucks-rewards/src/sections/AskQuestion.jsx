import {GoLinkExternal} from "react-icons/go";

function AskQuestion() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 lg:px-10">
            <div className="w-full">
                <div className="ml-[16%] w-6/12">
                    <h2 className="pb-4 text-2xl font-semibold">Questions?</h2>
                    <p className="tracking-tight">We want to help in any way we can. You can ask your barista anytime or we’ve answered the most
                        commonly
                        asked terms
                        <a href="#" className="inline-flex items-center text-[#006241] underline mx-1">
                            <span>right over here</span>
                            <GoLinkExternal className='mx-1'/>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AskQuestion;