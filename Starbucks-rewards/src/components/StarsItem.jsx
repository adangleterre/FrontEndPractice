function StarsItem({imgSource, title, description}) {
    return (
        <div className='flex gap-4 w-full md:w-6/12 lg:w-5/12 xl:w-4/12'>
            <img src={imgSource} alt="#" width='112' className='h-max'/>
            <div>
                <h3 className='font-semibold'>{title}</h3>
                <p className='pt-5'>{description}</p>
            </div>
        </div>
    );
}

export default StarsItem;