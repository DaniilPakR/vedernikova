import Image from "next/image"

export default function ForWho() {
    return (
        <div>
            <div className="for-who flex justify-center">
                <div className="for-who-child flex flex-col justify-center">
                    <div className="for-who-header flex text-customBlack font-extrabold">
                        <h1>Кому подойдёт урок?</h1>
                    </div>
                    <div className="for-who-panels flex flex-col justify-between">
                        <div className="panel-1 flex flex-col justify-between border border-solid border-customPurple rounded-radius20">
                            <h1 className="panel-1-header uppercase bg-customPurple rounded-radius30 self-start font-medium">
                                Новичкам
                            </h1>
                            <h2 className="panel-1-text text-customBlack font-medium">
                                Разберетесь, <span className="font-bold">что такое контент-воронка</span> и как пошагово внедрить ее в любой блог
                            </h2>
                        </div>
                        <div className="panel-2 flex flex-col justify-between border border-solid border-customPurple rounded-radius20">
                            <h1 className="panel-2-header uppercase bg-customPurple rounded-radius30 self-start font-medium">
                                экспертам
                            </h1>
                            <h2 className="panel-2-text text-customBlack font-medium">
                                Поймете, как создать <span className="font-bold">регулярные продажи</span> (услуги, наставничество, консультации)
                                в блоге — без запусков, выгорания и слива денег на рекламу
                            </h2>
                        </div>
                        <div className="panel-3 flex flex-col justify-between border border-solid border-customPurple rounded-radius20">
                            <h1 className="panel-3-header uppercase bg-customPurple rounded-radius30 self-start font-medium">
                                предпринимателям
                            </h1>
                            <h2 className="panel-3-text text-customBlack font-medium" >
                                Получите <span className="font-bold">схему прогрева через актуальные,</span> которая позволит эффективно прогревать аудиторию к покупке вашего продукта
                            </h2>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="for-who-2 flex justify-center">
                <div className="black-panel-parent flex">
                    <div className="for-who-black-panel flex flex-col bg-customBlack rounded-radius40">
                        <div className="black-panel-header relative text-white font-extrabold">
                            Урок для Вас, если Вы:
                        </div>
                        <div className="for-who-columns flex flex-col">
                            <div className="for-who-column-1">
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        Собираете просмотры, <span className="font-bold">но не можете превратить</span> их в подписки
                                    </h1>
                                </div>
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        <span className="font-bold">Нет стабильных продаж</span> в блоге — живете от запуска к запуску
                                    </h1>
                                </div>
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        Ежедневно снимаете stories и reels, но <span className="font-bold">никто не реагирует</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="for-who-column-2">
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        Оформили актуальные “обо мне”, “отзывы”, “услуги”, но они уже <span className="font-bold">не продают</span>
                                    </h1>
                                </div>
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        Регулярно <span className="font-bold">сливаете бюджет на рекламу,</span> но не растете в доходе
                                    </h1>
                                </div>
                                <div className="for-who-item flex flex-row bg-white rounded-radius40 items-center">
                                    <div className="for-who-check flex bg-black rounded-radius30 justify-center items-center">
                                        <Image src="/small-pictures/check-white.svg" height={30} width={30} alt="check-white" className="white-check flex" />
                                    </div>
                                    <h1 className="for-who-text font-medium">
                                        Снимаете тренды и копируете конкурентов, <span className="font-bold">но все безрезультатно</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}