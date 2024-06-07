function FooterCategory({category, links}) {
    return (
        <>
            <p className='mb-4 font-bold sm:mb-8'>{category}</p>
            {links.map((linkText, index) => (
                <a key={index} href="#">
                    <p className="mb-4 sm:mb-6">{linkText}</p>
                </a>
            ))}
        </>
    )
}

export default FooterCategory