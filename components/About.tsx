import Image from "next/image"
import Link from "next/link"

export default function About() {

    return (
        <div className="about flex justify-center z-50">
            <div className="about-child flex flex-col bg-customBlack rounded-radius20 text-white z-50">
                <div className="about-headings flex justify-between">
                    <h1>Автор урока</h1>
                    <Link href="https://www.instagram.com/vedernikova.natalia_/">@vedernikova.natalia_</Link>
                </div>
                <div className="about-name">
                    <h1 className="uppercase font-semibold">Наташа Ведерникова</h1>
                    <h1>— эксперт, блогер и предприниматель</h1>
                </div>
                <div className="about-list">
                    <div className="about-list-1 flex items-center">
                        <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                            <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                        </div>
                        <h1>Набрала бесплатно более 70.000 аудитории в Instagram* и 8.000+ в телеграм-канал</h1>
                    </div>
                    <div className="about-list-2 flex items-center">
                        <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                            <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                        </div>
                        <h1>5 лет опыта в онлайн-продажах и продвижении бизнеса</h1>
                    </div>
                    <div className="about-list-3 flex items-center">
                        <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                            <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                        </div>
                        <h1>Обучила более 550 человек</h1>
                    </div>
                </div>
                <div className="about-numbers flex flex-col">
                    <div className="about-numbers-1">
                        <h1 className="font-medium">15.400.000</h1>
                        <h1>на блоге за 1 год — с нуля и без ежедневных stories</h1>
                    </div>
                    <div className="about-numbers-2">
                        <h1 className="font-medium">180.000+</h1>
                        <h1>подписчиков набирают ученики за счёт воронки, реализуют запуски с миллионными оборотами и развивают бизнес</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}