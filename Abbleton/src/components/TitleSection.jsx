function TitleSection({ title, subtext }) {
    return (
        <div className='w-10/12 mx-auto lg:w-6/12'>
            <div className='mb-32'>
                <h1 className='mb-5'>{title}</h1>
                <p className='font-normal'>{subtext}</p>
            </div>
        </div>
    )
}

export default TitleSection