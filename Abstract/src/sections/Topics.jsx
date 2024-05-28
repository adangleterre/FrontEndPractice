import FaqTopic from "../components/FaqTopic"
import AuthenticateIcon from "../assets/Authenticate.png"
import BillingIcon from "../assets/Billing.png"
import ManageAccountIcon from "../assets/ManageAccount.png"
import ManageProjectIcon from "../assets/ManageProjects.png"
import SuppportIcon from "../assets/Support.png"
import UsingAbstractIcon from "../assets/UsingAbstract.png"

function Topics() {
    return (
        <div className="grid grid-cols-1 gap-12 lg:mx-auto mt-16 mx-6 lg:w-4/5 md:grid-cols-2 md:mt-40 max-w-screen-[1600px]">
            <FaqTopic iconSrc={UsingAbstractIcon} topic="Using Abstract" description="Abstract lets you manage, version, and document your designs in one place." />
            <FaqTopic iconSrc={ManageAccountIcon} topic="Manage your account" description="Configure your account settings, such as your email, profile details, and password." />
            <FaqTopic iconSrc={ManageProjectIcon} topic="Manage organizations, teams, and projects" description="Use Abstract organizations, teams, and projects to organize your people and your work." />
            <FaqTopic iconSrc={BillingIcon} topic="Manage billing" description="Change subscriptions and payment details." />
            <FaqTopic iconSrc={AuthenticateIcon} topic="Authenticate to Abstract" description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
            <FaqTopic iconSrc={SuppportIcon} topic="Abstract support" description="Get in touch with a human." />
        </div>
    )
}

export default Topics