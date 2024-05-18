import Image from "next/image"
import Link from "next/link"

export default function Price() {
    return (
        <div className="price flex justify-center">
            <div className="price-child">
                <div className="p-black-panel flex flex-col bg-customBlack rounded-radius20 text-white items-center">
                    <div className="pbp-header font-extrabold flex">
                        <h1>
                            «Внедряем воронку в reels»
                        </h1>
                    </div>
                    <div className="price-columns flex flex-col">
                        <div className="price-column-1 flex flex-col">
                            <div className="price-item-1 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        30 дней доступ к уроку в записи
                                    </h1>
                                </div>
                            </div>
                            <div className="price-item-2 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        Доступ сразу после оплаты
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="price-column-2 flex flex-col">
                            <div className="price-item-3 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        2 бонусные статьи
                                    </h1>
                                </div>
                            </div>
                            <div className="price-item-4 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        Закрытый телеграмм-чат с прямыми эфирами от Наташи
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="price-column-3 flex flex-col">
                            <div className="price-item-5 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        Сборник шрифтов и авторские пресеты для Reels
                                    </h1>
                                </div>
                            </div>
                            <div className="price-item-6 flex flex-row">
                                <div className="about-check-image bg-white rounded-radius20 flex justify-center">
                                    <Image src="/small-pictures/check.svg" width={11} height={11} alt="check-picture" />
                                </div>
                                <div className="price-text">
                                    <h1>
                                        100+ идей Reels для любого блога
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price font-medium">
                        <h1 className="price-t">
                            1.490₽
                        </h1>
                    </div>
                    <Link href="" className="price-link flex flex-row justify-end items-center bg-white text-customBlack rounded-radius30">
                        <h1 className="pl-text flex justify-self-center m-auto font-extrabold uppercase">
                            Купить урок
                        </h1>
                        <div className="price-link-img flex justify-center items-center bg-customBlack rounded-radius30">
                            <Image src="/small-pictures/arrow-right-white.svg" width={25} height={25} alt="arrow-white" className="arrow-white" />
                        </div>
                    </Link>
                    <div className="warning flex text-center">
                        <h1>
                            Внимание! Если ссылка не открывается, отключите VPN
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}