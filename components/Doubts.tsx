'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Doubts() {
    return (
        <div className="doubts-container flex justify-center">
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                freeMode={{ enabled: true, sticky: false }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="doubts-slide doubts-item-1">
                    <div className="doubts-item flex flex-row">
                        <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man" />
                        <div className="messages flex flex-col">
                            <Image src="/drawn-people/message-1.svg" width={292} height={70} alt="message" className="message message-1" />
                            <Image src="/drawn-people/message-2.svg" width={423} height={120} alt="message" className="message message-2" />
                        </div>
                        <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="doubts-slide doubts-item-2">
                    <div className="doubts-item flex flex-row">
                        <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man" />
                        <div className="messages flex flex-col">
                            <Image src="/drawn-people/message-3.svg" width={273} height={70} alt="message" className="message message-3" />
                            <Image src="/drawn-people/message-4.svg" width={375} height={167} alt="message" className="message message-4" />
                        </div>
                        <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="doubts-slide doubts-item-3">
                    <div className="doubts-item flex flex-row">
                        <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man" />
                        <div className="messages flex flex-col">
                            <Image src="/drawn-people/message-5.svg" width={416} height={95} alt="message" className="message message-5" />
                            <Image src="/drawn-people/message-6.svg" width={423} height={134} alt="message" className="message message-6" />
                        </div>
                        <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
