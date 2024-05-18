import Link from "next/link";
import Image from "next/image";

export default function Header() {
    
    return (
        <div className="flex justify-center">
            <div className="flex justify-between 360">
                <div className="header flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="header-text uppercase font-extrabold">практический урок</h1>
                        <Link href="https://www.instagram.com/vedernikova.natalia_/" className="header-link text-customPurple">от @vedernikova.natalia_</Link>
                    </div>
                <div className="burger-menu-btn flex bg-customPurple rounded-radius30 justify-center items-center cursor-pointer">
                    <Image src="/small-pictures/burger-menu.svg" width={25} height={25} alt="burger-menu" className="burger-menu-picture flex" />
                </div>
                <div className="header-panel hidden uppercase">
                    <Link href="#about" className="header-panel-link">Об авторе</Link>
                    <Link href="#for-who" className="header-panel-link">Для кого</Link>
                    <Link href="#practice-lesson" className="header-panel-link">Превью</Link>
                    <Link href="#reviews" className="header-panel-link">Отзывы</Link>
                    <Link href="#faq" className="header-panel-link">FAQ</Link>
                    <Link href="#footer" className="header-panel-link">Служба заботы</Link>
                    <Link href="#price" className="header-panel-last bg-customBlack rounded-radius30">
                        Купить урок
                    </Link>
                </div>
                </div>
            </div>
            <div className="burger-menu hidden bg-customPurple fixed z-50">
            <div className="burger-menu-child flex flex-col text-white">
                <div className="close flex justify-end">
                    <Image src="small-pictures/close.svg" width={27} height={27} alt="close-svg" className="close-picture flex" />
                </div>
                <Link href="#about" className="header-panel-link-burger flex">Об авторе</Link>
                <Link href="#forwho" className="header-panel-link-burger flex">Для кого</Link>
                <Link href="#practice-lesson" className="header-panel-link-burger flex">Превью</Link>
                <Link href="#reviews" className="header-panel-link-burger flex">Отзывы</Link>
                <Link href="#faq" className="header-panel-link-burger flex">FAQ</Link>
                <Link href="#footer" className="header-panel-link-burger flex">Служба заботы</Link>
                <div className="header-panel-last-burger flex">
                    <Link href="#price" className="header-panel-last-child-burger
                     flex justify-center items-center text-white bg-customBlack rounded-radius30 uppercase font-semibold">Купить урок</Link>
                </div>
                <div className="burger-socials flex">
                    <Link href="https://www.instagram.com/vedernikova.natalia_/"
                     className="burger-instagram flex justify-center bg-white rounded-radius20">
                        <Image src="small-pictures/instagram.svg" width={16} height={16} alt="instagram" className="instagram" />
                    </Link>
                    <Link href="https://t.me/VedernikovaNatasha" className="burger-telegram
                    flex justify-center bg-white rounded-radius20">
                        <Image src="small-pictures/telegram.svg" width={16} height={16} alt="telegram" className="telegram" />
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}