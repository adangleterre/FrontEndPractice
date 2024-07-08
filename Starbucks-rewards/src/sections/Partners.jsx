function Partners() {
    return (
        <section>
            <div className="px-4 py-2">
                <h2 className="text-center text-2xl font-semibold py-4">Keep the Rewards Coming</h2>
                <p className="text-center">The Rewards don`&apos;`t stop at your morning coffee. Join Starbucks® Rewards
                    and unlock perks from
                    our
                    partners, all while earning more Stars.</p>
                <div className="flex flex-col gap-10 py-8 px-0.5">
                    <div className="flex items-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#"><span>Link your Delta SkyMiles</span></a><br/>
                            and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus
                            Double Stars on travel days.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#"><span>Link your Bank of America</span></a>
                            eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on
                            qualifying Starbucks in-app purchases.2
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/delta-skymiles.webp" width="190px" className="max-w-28 h-max" alt=""/>
                        <p className="pl-4">
                            <a href="#"><span>Link your Mariott Bonvoy</span></a>
                            and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during
                            any Marriott Bonvoy Week and more.3
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;