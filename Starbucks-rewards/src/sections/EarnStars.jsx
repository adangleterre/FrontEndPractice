import StarsItem from "../components/StarsItem.jsx";

function EarnStars() {
    return (
        <section className='bg-[#f2f0eb] py-12 px-4'>
            <div className='max-w-[1440px] m-auto'>
                <h2 className='text-2xl font-semibold pb-4 text-center pt-6'>Cash or card, you earn stars</h2>
                <p className='md:max-w-[60%] lg:max-w-[40%] m-auto text-center'>No matter how you pay, you can earn
                    Stars with your morning coffee. Those Stars add up to (really delicious) Rewards</p>
                <div className='flex flex-wrap pt-16'>
                    <div className='w-full lg:w-2/12'>
                        <p className='font-semibold text-[19px]'>1★ per dollar</p>
                        <p>Pay as you go</p>
                    </div>
                    <StarsItem
                        imgSource='/images/1A.png'
                        title='Scan and pay separately'
                        description='Use cash or credit/debit card at the register'
                    />
                    <StarsItem
                        imgSource='/images/1B.webp'
                        title='Save payment in the app'
                        description='Check-out faster by saving a credit/debit card or PayPal to your account. You’ll
                        be able to order ahead or scan and pay at the register in one step.'
                    />
                </div>
                <hr className='divide-y mt-4 mb-10 md:mt-6 md:mb-12'/>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-2/12'>
                        <p className='font-semibold text-[19px]'>2★ per dollar</p>
                        <p>Add funds in the app</p>
                    </div>
                    <StarsItem
                        imgSource='/images/2A.png'
                        title='Preload'
                        description='To save time and earn Stars twice as fast, add money to your digital
                            Starbucks Card using any payment option. Scan and pay in one step or order ahead in the
                            app.'
                    />
                    <StarsItem
                        imgSource='/images/2B.webp'
                        title='Register your gift card'
                        description='Then use it to pay through the app. You can even consolidate balances from multiple
                    cards in one place.'
                    />
                </div>
            </div>
        </section>
    );
}

export default EarnStars;