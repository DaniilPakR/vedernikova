import Image from "next/image"
import Link from "next/link"

export default function Hero() {

    return (
        <div className="hero flex flex-col items-center">
            <Image src="/lines/image_02.svg" width={1681} height={571} alt="br-image" className="background-image hidden" />
            <Image src="/lines/hero-background-mobile.svg" width={548} height={513} alt="hero-background-mobile" className="background-image-mobile absolute z-10" />
            <div className="woman-background absolute rounded-radius40">
            </div>
            <div className="hero-child flex flex-col">
                <div className="headings flex flex-row justify-center uppercase text-center font-semibold">
                    <h1 className="hero-heading-1">Смотри<br className="break-line" /> и внедряй</h1>
                    <Image src="/small-pictures/svg-gobbler.svg" width={14} height={14} alt="start-picture" />
                    <h1 className="hero-heading-2">Доступ<br className="break-line" /> МОМЕНТАЛЬНО</h1>
                    <Image src="/small-pictures/svg-gobbler.svg" width={14} height={14} alt="start-picture" />
                    <h1 className="hero-heading-3">Урок<br className="break-line" /> в записи</h1>
                </div>
                <div className="head-main">
                    <h1 className="font-extrabold">
                        Внедряем воронку в reels:
                    </h1>
                    <h1 className="font-medium">
                        пошаговый план, как превратить просмотры в подписки и увеличить доход
                    </h1>
                </div>
                <Link href="" className="hero-link flex flex-row justify-end uppercase bg-customBlack rounded-radius30 text-white">
                    <h1 className="flex justify-self-center m-auto font-extrabold">
                        Купить урок
                    </h1>
                    <div className="link-circle bg-white rounded-radius40 flex justify-center items-center">
                        <Image src="/small-pictures/arrow-right.svg" width={25} height={25} alt="arrow-picture" className="arrow-picture flex"/>
                    </div>
                </Link>
            </div>
            <div className="right-part z-20">
                <Image src="/woman.png" width={513} height={552} alt="woman-image" className="woman-image flex"/>
            </div>    
        </div>
    )
}