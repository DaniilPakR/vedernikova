import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer flex justify-center">
            <div className="footer-child flex flex-col items-center">
                <div className="footer-header flex flex-col items-center">
                    <h1 className="footer-header-1 font-bold">
                        Остались вопросы по уроку, сложности с оплатой или нужна консультация?
                    </h1>
                    <h1 className="footer-header-2 bg-customGray font-extrabold uppercase rounded-radius30 flex justify-center items-center">
                        Нужна помощь
                    </h1>
                </div>
                <div className="footer-last bg-customGray rounded-radius20 flex flex-col">
                    <div className="footer-header-container flex flex-row hidden">
                        <div className="footer-header-desktop flex flex-col items-center hidden">
                            <h1 className="footer-header-1 font-bold">
                                Остались вопросы по уроку, сложности с оплатой или нужна консультация?
                            </h1>
                            <h1 className="footer-header-2 bg-white font-extrabold uppercase rounded-radius30 flex justify-center items-center">
                                Нужна помощь
                            </h1>
                        </div>
                        <div className="heart-image flex">
                            <Image src="/cloud-heart.png" height={52} width={49} alt="heart-image" className="heart-image-item" />
                        </div>
                    </div>
                    <div className="footer-last-first flex flex-col">
                        <h1>
                            Индивидуальный предприниматель Ведерникова Наталья Александровна
                        </h1>
                        <h1>
                            nata.vedernikova.97@bk.ru
                        </h1>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1>
                            ОГРНИП: 323595800075091
                        </h1>
                        <h1>
                            ИНН: 594812092807
                        </h1>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="pol flex flex-col">
                            <Link href="">Политика конфиденциальности</Link>
                            <Link href="">Публичная оферта</Link>
                        </div>
                        <div className="foot-socials flex">
                            <Link href="https://www.instagram.com/vedernikova.natalia_/"
                             className="foot-instagram flex justify-center bg-customPurple rounded-radius30">
                                <Image src="small-pictures/instagram-white.svg" width={20} height={20} alt="instagram" className="instagram" />
                            </Link>
                            <Link href="https://t.me/VedernikovaNatasha" 
                            className="foot-telegram flex justify-center bg-customPurple rounded-radius30">
                                <Image src="small-pictures/telegram-white.svg" width={20} height={20} alt="telegram" className="telegram" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="restriction">
                            Социальная сеть Instagram запрещена в России, Meta признана экстремистской организацией, её деятельность в России запрещена.
                        </h1>
                        <Link href="https://www.instagram.com/ivluence/" className="credit">
                            Дизайн и разработка сайта <span className="text-customPurple">@invluence</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}