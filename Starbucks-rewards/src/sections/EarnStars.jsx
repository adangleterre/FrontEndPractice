function EarnStars() {
    return (
        <section className='bg-[#f2f0eb] py-12 px-4'>
            <div className='pb-16'>
                <h2 className='text-2xl font-semibold pb-4 text-center pt-6'>Cash or card, you earn stars</h2>
                <p className='md:max-w-[60%] lg:max-w-[40%] m-auto text-center'>No matter how you pay, you can earn
                    Stars with your morning coffee. Those Stars add up to (really delicious) Rewards</p>
            </div>
            <div className='flex flex-col gap-8'>
                <div>
                    <p className='font-semibold text-[19px]'>1★ per dollar</p>
                    <p>Pay as you go</p>
                </div>
                <div className='flex gap-4'>
                    <img src="/images/1A.png" alt="#" width='112'/>
                    <div>
                        <h3 className='font-semibold'>Scan and pay separately</h3>
                        <p className='pt-5'>Use cash or credit/debit card at the register</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src="/images/1B.webp" alt="#" width='112'/>
                    <div>
                        <h3 className='font-semibold'>Save payment in the app</h3>
                        <p className='pt-5'>Check-out faster by saving a credit/debit card or PayPal to your account.
                            You’ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>
            <hr className='divide-y mt-4 mb-10 md:mt-6 md:mb-12'/>
            <div>
                <p className='font-semibold text-[19px]'>2★ per dollar</p>
                <p>Add funds in the app</p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <img src="/images/2A.png" alt="#" width='112'/>
                    <div>
                        <h3 className='font-semibold'>Preload</h3>
                        <p className='pt-5'>To save time and earn Stars twice as fast, add money to your digital
                            Starbucks Card using any payment option. Scan and pay in one step or order ahead in the
                            app.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src="/images/2B.webp" alt="#" width='112'/>
                    <div>
                        <h3 className='font-semibold'>Register your gift card</h3>
                        <p className='pt-5'>Then use it to pay through the app. You can even consolidate balances from
                            multiple cards in one place.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EarnStars;