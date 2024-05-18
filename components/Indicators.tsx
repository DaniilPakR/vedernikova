import Image from "next/image"

export default function Indicators() {
    return (
        <div className="indicators flex justify-center">
            <div className="indicators-child flex flex-col bg-customPurple rounded-radius20">
                <div className="indicators-header font-extrabold flex justify-start justify-self-center m-auto">
                    Воронка влияет<br />на многие показатели
                </div>
                <div className="indicators-column flex flex-col items-center">
                    <div className="indicators-item flex flex-row justify-between items-center bg-white rounded-radius30">
                        <h1>Клиенты</h1>
                        <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                            <Image src="/small-pictures/arrow-right-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                        </div>
                    </div>
                    <div className="indicators-item flex flex-row justify-between items-center bg-white rounded-radius30">
                        <h1>Конверсия</h1>
                        <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                            <Image src="/small-pictures/arrow-right-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                        </div>
                    </div>
                    <div className="indicators-item with-black flex flex-row justify-between items-center bg-customBlack rounded-radius30">
                        <div className="indicators-subitem flex flex-row justify-between items-center bg-white rounded-radius30">
                            <h1>Время на блог</h1>
                            <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                                <Image src="/small-pictures/arrow-left-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                            </div>
                        </div>
                    </div>
                    <div className="indicators-item flex flex-row justify-between items-center bg-white rounded-radius30">
                        <h1>Доход</h1>
                        <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                            <Image src="/small-pictures/arrow-right-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                        </div>
                    </div>
                    <div className="indicators-item flex flex-row justify-between items-center bg-white rounded-radius30">
                        <h1>Подписчики</h1>
                        <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                            <Image src="/small-pictures/arrow-right-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                        </div>
                    </div>
                    <div className="indicators-item with-black flex flex-row justify-between items-center bg-customBlack rounded-radius30">
                        <div className="indicators-subitem flex flex-row justify-between items-center bg-white rounded-radius30">
                            <h1>Стресс</h1>
                            <div className="indicators-img bg-customPurple rounded-radius20 flex justify-center items-center">
                                <Image src="/small-pictures/arrow-left-white.svg" width={22.7} height={22.7} alt="arrow-white" className="arrow-white flex" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}