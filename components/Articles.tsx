import Image from "next/image"

export default function Articles() {
    return (
        <div className="articles flex justify-center">
            <div className="articles-child flex flex-col items-center">
                <div className="articles-header">
                    <h1>При покупке урока вы получаете</h1>
                    <h1 className="font-extrabold">2 бонусные статьи:</h1>
                </div>
                <div className="articles-column flex flex-col items-center text-center">
                    <div className="articles-item-1 flex flex-col">
                        <Image src="/article-pictures/article-1.webp" height={151} width={202} alt="article-img-1" className="article-img-1 justify-self-center m-auto" />
                        <h1 className="article-text font-semibold">
                            “Как создать и оформить<br />лид-магнит”
                        </h1>
                    </div>
                    <Image src="/small-pictures/svg-gobbler.svg" width={24} height={24} alt="start-picture" />
                    <div className="articles-item-2 flex flex-col">
                        <Image src="/article-pictures/article-2.webp" height={188} width={172} alt="article-img-2" className="article-img-2 justify-self-center m-auto" />
                        <h1 className="article-text font-semibold">
                            “Разбор воронки по шагам, которая принесла мне 1.5 млн. рублей за 3 месяца”
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}