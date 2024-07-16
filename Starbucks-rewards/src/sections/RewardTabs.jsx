import {useEffect, useRef, useState} from "react";

const tabsData = [
    {
        label: '25',
        image: '/images/illustrations/reward-25.webp',
        title: 'Customize your drink',
        description: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
    },
    {
        label: '100',
        image: '/images/illustrations/reward-100.webp',
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        description: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
    },
    {
        label: '200',
        image: '/images/illustrations/reward-200.webp',
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        description: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
    },
    {
        label: '300',
        image: '/images/illustrations/reward-300.webp',
        title: 'Sandwich, protein box or at-home coffee',
        description: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
    },
    {
        label: '400',
        image: '/images/illustrations/reward-400.webp',
        title: 'Select Starbucks® merchandise',
        description: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
    },
];

function RewardTabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);

    return (
        <section className='bg-[#F1F8F4] my-12'>
            <h2 className='text-center pt-12 pb-4 md:pb-12 text-xl md:text-[28px] font-semibold'>Get your favorites for free</h2>
            <div className="relative shadow-md">
                <div className="flex md:max-w-[540px] m-auto">
                    {tabsData.map((tab, id) => {
                        return (
                            <button
                                key={id}
                                ref={(element) => (tabsRef.current[id] = element)}
                                className="border-none font-semibold text-[19px] md:text-2xl w-1/5 p-2 pb-4"
                                onClick={() => setActiveTabIndex(id)}
                            >
                                {tab.label}
                                <span className='text-[#cba258] text-sm'>★</span>
                            </button>
                        );
                    })}
                </div>
                <span
                    className="absolute bottom-0 block h-1 bg-starbucks-green transition-all duration-300"
                    style={{left: tabUnderlineLeft, width: tabUnderlineWidth}}
                />
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center md:py-8 bg-[#d4e9e2]">
                <img src={tabsData[activeTabIndex].image} alt="test" className='py-8 md:py-0 md:pr-6 max-w-[375px]'/>
                <div className='pb-12 md:pb-0 px-4 max-w-[375px]'>
                    <p className='pb-4 font-semibold text-[19px] md:text-2xl'>{tabsData[activeTabIndex].title}</p>
                    <p>{tabsData[activeTabIndex].description}</p>
                </div>
            </div>
        </section>
    );
}

export default RewardTabs;