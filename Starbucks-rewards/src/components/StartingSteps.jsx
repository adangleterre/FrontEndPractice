/**
 * Display a step item for a section with multiple steps
 * @param {number} stepNumber
 * @param {string} iconSrc
 * @param {string} title
 * @param {string} description
 */
function StartingSteps({stepNumber, iconSrc, title, description}) {
    return (
        <div className='flex flex-row md:flex-col items-center text-left md:text-center gap-3'>
            <img src={iconSrc} alt={'step number ' + stepNumber} className='h-12'/>
            <div className='flex flex-col items-start md:items-center'>
                <h3 className='mt-6 mb-4 md:text-[19px] font-semibold'>{title}</h3>
                <p className=''>{description}</p>
            </div>
        </div>
    );
}

export default StartingSteps;