import StepItem from "../components/StepItem.jsx";

function Starting() {
    return (
        <section className='text-center py-8 md:py-16 lg:max-w-screen-2xl m-auto'>
            <h2 className='text-[28px] font-semibold pb-4'>Getting started is easy</h2>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
            <div className='flex flex-col md:flex-row gap-12 md:mx-[5vw] px-6 pt-12'>
                <StepItem
                    className='h-12'
                    altDescription="Step number 1"
                    iconSrc="/images/step-1.webp"
                    title="Create an account"
                    description="To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits."
                />
                <StepItem
                    className='h-12'
                    altDescription="Step number 2"
                    iconSrc="/images/step-2.webp"
                    title="Order and pay how you’d like"
                    description="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how"
                />
                <StepItem
                    className='h-12'
                    altDescription="Step number 3"
                    iconSrc="/images/step-3.webp"
                    title="Earn Stars, get Rewards"
                    description="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
                />
            </div>
        </section>
    );
}

export default Starting;