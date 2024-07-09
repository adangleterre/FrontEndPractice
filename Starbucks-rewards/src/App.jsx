import Hero from "./sections/Hero.jsx";
import Starting from "./sections/Starting.jsx";
import Extras from "./sections/Extras.jsx";
import EarnStars from "./sections/EarnStars.jsx";
import RewardTabs from "./sections/RewardTabs.jsx";
import Partners from "./sections/Partners.jsx";
import AskQuestion from "./sections/AskQuestion.jsx";
import Terms from "./sections/Terms/Terms.jsx";

function App() {

    return (
        <>
            <Hero/>
            <Starting/>
            <RewardTabs/>
            <Extras/>
            <EarnStars/>
            <Partners />
            <AskQuestion />
            <Terms />
        </>
    )
}

export default App
