import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from "../../components/ui/accordion.jsx";

const accordionData = [
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

const AccordionLinks = ({links}) => (
    <nav className="flex flex-col gap-6">
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
        <Accordion type="multiple" className="w-full">
            {accordionData.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                        <AccordionLinks links={item.links}/>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default FooterAccordions;