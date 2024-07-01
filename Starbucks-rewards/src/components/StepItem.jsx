/**
 * Display a step item for a section with multiple steps
 * @param {string} altDescription
 * @param {string} iconSrc
 * @param {string} title
 * @param {string} description
 * @param {string} className
 * @param {string} link
 */
function StepItem({iconSrc, title, description, altDescription, className, link}) {
    return (
        <div className='flex flex-row md:flex-col items-center text-left md:text-center gap-3 md:w-4/12'>
            <img src={iconSrc} alt={altDescription} className={className}/>
            <div className='flex flex-col items-start md:items-center'>
                <h3 className='mt-6 mb-4 md:text-[19px] font-semibold'>{title}</h3>
                <p>{description}</p>
                {link && (
                    <a href="#" className='text-starbucks-green underline hover:no-underline my-4'>
                        {link}
                    </a>
                )}
            </div>
        </div>
    );
}

export default StepItem;