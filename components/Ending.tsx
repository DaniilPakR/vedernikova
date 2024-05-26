import Image from "next/image"
import Link from "next/link"

export default function Ending() {
    return (
        <div className="ending flex justify-center">
            <div className="ending-child flex flex-col items-center">
                <h1 className="ending-header flex font-extrabold">
                    На этом уроке вы узнаете <br className="break-line-desktop hidden" />как создать в блоге систему, которая будет продавать за вас без ежедневных stories и стресса
                </h1>
                <Link href="#price" className="ending-link flex flex-row justify-end uppercase bg-customBlack rounded-radius30 text-white">
                    <h1 className="flex justify-self-center m-auto font-extrabold">
                        КУПИТЬ ДОСТУП
                    </h1>
                    <div className="ending-link-img bg-white rounded-radius40 flex justify-center items-center">
                        <Image src="/small-pictures/arrow-right.svg" width={25} height={25} alt="arrow-picture" className="ending-arrow flex"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}