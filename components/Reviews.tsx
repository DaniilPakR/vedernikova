'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';


export default function Reviews() {
    return (
        <div className="reviews flex justify-center">
            <Swiper
                spaceBetween={-40}
                slidesPerView={4}
                freeMode={{ enabled: true, sticky: false }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="flex flex-row"
            >
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-1.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-2.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-3.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-4.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-5.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                <SwiperSlide className="reviews-slide">
                    <Image src="review-images/image-6.svg" height={400} width={365} alt="review-image" className="review-image" />
                </SwiperSlide>
                </Swiper>
        </div>
    )
}