import {GoLinkExternal} from "react-icons/go";

function Partners() {
    return (
        <section className='bg-partners md:p-8'>
            <div className="text-center px-4 md:px-6 py-2 md:py-10 bg-[#d4e9e2]">
                <h2 className="text-center text-2xl font-semibold py-4">Keep the Rewards Coming</h2>
                <p className="text-center">The Rewards don`&apos;`t stop at your morning coffee. Join Starbucks® Rewards
                    and unlock perks from
                    our
                    partners, all while earning more Stars.</p>
                <div className="flex flex-col md:flex-row gap-10 py-8 px-0.5 lg:max-w-[1440px] m-auto">
                    <div className="flex md:flex-col items-center text-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#"><span>Link your Delta SkyMiles</span></a><br/>
                            and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus
                            Double Stars on travel days.
                        </p>
                    </div>
                    <div className="flex md:flex-col items-center text-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#" className="inline-flex items-center"><span>Link your Bank of America</span></a>
                            eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on
                            qualifying Starbucks in-app purchases.2
                        </p>
                    </div>
                    <div className="flex md:flex-col items-center text-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#" className="inline-flex items-center">
                                <span>Link your Mariott Bonvoy </span>
                                <GoLinkExternal className='mx-1'/>
                            </a>
                            and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during
                            any Marriott Bonvoy Week and more.
                        </p>
                    </div>
                </div>
                <button className="bg-starbucks-green text-white mb-2">Join Starbucks® Rewards</button>
            </div>
        </section>
    );
}

export default Partners;