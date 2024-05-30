function FooterCategory({Category: category, links}) {
    return (
        <div className="flex flex-col w-6/12 mb-12 lg:w-3/12">
            <h3 className="mb-4 text-2xl font-bold">{category}</h3>
            {links.map((linkText, index) => (
                <a key={index} href="#">{linkText}</a>
            ))}
        </div>
    )
}

export default FooterCategory