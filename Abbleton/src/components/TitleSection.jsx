function TitleSection({ title, subtext }) {
    return (
        <div className='w-10/12 mx-auto sm:w-8/12 lg:w-6/12'>
            <div className='mb-[8vw] lg:mb-32'>
                <h2 className='mb-5'>{title}</h2>
                <p className='font-normal'>{subtext}</p>
            </div>
        </div>
    )
}

export default TitleSection