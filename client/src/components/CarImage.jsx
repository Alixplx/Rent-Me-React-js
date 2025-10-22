import React, { useEffect, useState } from 'react'

const CarImage = ({car}) => {

    const [image, setImage] = useState(null)
  
    useEffect(() => {

        if (car) {

            setImage(car.images[0])
        }
    }, [car])

    return (
        
        <div className='flex flex-col gap-5'>
            
            { /* Main Images*/ }
            <div className='bg-primary rounded-2xl overflow-hidden flexCenter w-full h-[244px] lg:h-[322px]'>

                <img src={image} loading='eager' className='max-w-full max-h-full object-contain' />
            </div>

            { /* Thumbnail Grid */ }
            <div className='grid grid-cols-2 gap-5'>

                {
                    car.images.map((item, index) => (

                        <button key={index} onClick={() => setImage(item)} type='button' 
                                className={`bg-primary rounded-2xl cursor-pointer overflow-hidden flexCenter w-full h-[111px] lg:n-[122px] transition-transform duration-500 
                                ${item === image ? 'border-8 border-solid/10 scale-[101%]' : 'hover:scale-[101%]'}`}
                        >

                            <img src={item} alt={`thumb-${index}`} loading='lazy' className='max-w-full max-h-full object-contain' />
                        </button>
                    ))
                }
            </div>


        </div>
    )
}

export default CarImage