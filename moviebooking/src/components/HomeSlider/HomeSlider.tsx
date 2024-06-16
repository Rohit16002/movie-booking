import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Calculate dimensions on the client-side
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        // Update dimensions on window resize
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    const banners = [
        {
            imgUrl: 'https://d388d59m61mm0v.cloudfront.net/optimized/content/banner/common/page/banners/banners-banner-irx8ynjlb1.jpeg'
        },
        {
            imgUrl: 'https://d388d59m61mm0v.cloudfront.net/optimized/content/banner/common/page/banners/banners-banner-erg7iu8bgc7.jpeg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={banner.imgUrl}
                        alt=""
                        width={width}
                        height={height / 2}
                        style={{ objectFit: 'cover' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;





//**************************** Not Working ******************************************* */
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import Image from 'next/image';

// const width = window.innerWidth;
// const height = window.innerHeight;
// const HomeSlider = () => {

//     const [banners, setBanners] = useState([
//         {
//             imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg'
//         },
//         {
//             imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
//         }
//     ])



//     return (
//         <Swiper
//             cssMode={true}
//             navigation={true}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper"
//         >
//             {
//                 banners.map((banner, index) => {
//                     return (
//                         <SwiperSlide key={index}>
//                             <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
//                                 style={{
//                                     objectFit: "cover"
//                                 }} />
//                         </SwiperSlide>
//                     )
//                 })
//             }
//         </Swiper>
//     )
// }

// export default HomeSlider