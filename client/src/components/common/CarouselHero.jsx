import React from 'react'
import { Carousel } from 'flowbite-react'

function CarouselHero() {

    const images = [
        'user-banner-3.png',
        'user-banner-1.jpg',
        'user-banner-2.jpg',
        'user-banner-3.png',
        'user-banner-1.jpg'
    ]

    return (
        <div className="h-40 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel >
                {
                    images.map((image,index) => {
                        return <img className=''
                            key={index}
                            src={image}
                            alt="..."
                        />
                        
                    })
                }
            </Carousel>
        </div>
    )
}

export default CarouselHero