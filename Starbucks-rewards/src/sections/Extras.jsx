import StepItem from "../components/StepItem.jsx";

function Extras() {
    return (
        <section className='text-center py-8 md:py-16 lg:max-w-screen-2xl m-auto'>
            <h2 className='text-[28px] font-semibold pb-4'>Endless Extras</h2>
            <p className='md:max-w-[60%] lg:max-w-[40%] m-auto'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering,
                tasty Rewards and—yes, free coffee.</p>
            <div className='flex flex-col md:flex-row gap-12 md:mx-[5vw] px-6 pt-12'>
                <StepItem
                    className='h-28'
                    altDescription="a burger with "
                    iconSrc="/images/1-fun-freebies.webp"
                    title="Fun freebies"
                    description="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
                    link="Learn more"
                />
                <StepItem
                    className='h-28'
                    altDescription=""
                    iconSrc="/images/2-order-and-pay-ahead.webp"
                    title="Order & pay ahead"
                    description="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
                    link="Learn more"
                />
                <StepItem
                    className='h-28'
                    altDescription=""
                    iconSrc="/images/3-get-to-free-faster.webp"
                    title="Get to free faster"
                    description="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
                    link="Learn more"
                />
            </div>
        </section>
    );
};

export default Extras;