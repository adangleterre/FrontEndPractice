import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from "../../components/ui/accordion.jsx";

const footerTopicsAndPages = [
    {
        title: "About Us",
        links: [
            "Our Company",
            "Our Coffee",
            "Stories and News",
            "Starbucks Archive",
            "Investor Relations",
            "Customer Service",
            "Contact Us",
        ],
    },
    {
        title: "Careers",
        links: [
            "Culture and Values",
            "Inclusion, Diversity, and Equity",
            "College Achievement Plan",
            "Alumni Community",
            "U.S. Careers",
            "International Careers",
        ],
    },
    {
        title: "Social Impact",
        links: [
            "People",
            "Planet",
            "Environmental and Social Impact Reporting",
        ],
    },
    {
        title: "For Business Partners",
        links: [
            "Landlord Support Center",
            "Suppliers",
            "Corporate Gift Card Sales",
            "Office and Foodservice Coffee",
        ],
    },
    {
        title: "Order and Pick Up",
        links: [
            "Order on the App",
            "Order on the Web",
            "Delivery",
            "Order and Pick Up Options",
            "Explore and Find Coffee for Home",
        ],
    },
];

const FooterLinks = ({links}) => (
    <nav className="flex flex-col gap-6 lg:gap-7">
        {links.map((link, index) => (
            <a
                key={index}
                href="#"
                className="text-[#00000094] hover:text-black"
            >
                {link}
            </a>
        ))}
    </nav>
);

function FooterAccordions() {
    return (
        <>
            <Accordion type="multiple" className="w-full lg:hidden">
                {footerTopicsAndPages.map((item) => (
                    <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            <FooterLinks links={item.links}/>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="hidden lg:flex gap-12 pb-8">
                {footerTopicsAndPages.map((item) => (
                    <div key={item.title} className="max-w-52">
                        <h2 className="text-[19px] mb-8">{item.title}</h2>
                        <FooterLinks links={item.links} />
                    </div>
                ))}
            </div>
        </>

    );
}

export default FooterAccordions;