import {useEffect, useRef, useState} from "react";

const tabsData = [
    {
        label: '25',
        title: 'Customize your drink',
        description: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
    },
    {
        label: '100',
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        description: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
    },
    {
        label: '200',
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        description: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
    },
    {
        label: '300',
        title: 'Sandwich, protein box or at-home coffee',
        description: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
    },
    {
        label: '400',
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
        <section className='bg-[#F1F8F4]'>
            <h2 className='text-center pt-12 pb-4 text-2xl font-semibold'>Get your favorites for free</h2>
            <div className="relative">
                <div className="flex shadow-md">
                    {tabsData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                ref={(el) => (tabsRef.current[idx] = el)}
                                className="border-none font-semibold text-[19px] w-1/5"
                                onClick={() => setActiveTabIndex(idx)}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
                <span
                    className="absolute bottom-0 block h-1 bg-starbucks-green transition-all duration-300"
                    style={{left: tabUnderlineLeft, width: tabUnderlineWidth}}
                />
            </div>
            <div className="py-4 bg-[#d4e9e2]">
                <p>{tabsData[activeTabIndex].title}</p>
                <p>{tabsData[activeTabIndex].description}</p>
            </div>
        </section>
    );
}

export default RewardTabs;