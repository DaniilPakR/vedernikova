'use client'
import Link from "next/link"
import { useState } from "react"

export default function Faq() {

    const [visibleItems, setVisibleItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
    });

    const toggleVisibility = (item) => {
        setVisibleItems(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };

    return (
        <div className="faq flex justify-center justify-self-center m-auto">
            <div className="faq-child flex flex-col">
                <div className="faq-header font-extrabold">
                    <h1>FAQ</h1>
                </div>
                <div className="faq-column">
                    <div className="faq-item-1">
                        <button className="article-button flex flex-row justify-between font-medium text-left items-center" onClick={() => toggleVisibility('item1')}>
                            <h1>Как получить доступ к уроку?</h1>
                            <div className="article-button-img rounded-radius20">

                            </div>
                        </button>
                        {visibleItems.item1 && (
                            <h1 className="article-button-text font-medium">
                                После покупки вы сразу получите письмо на указанную электронную почту с инструкцией и ссылкой для доступа к уроку. Вы сможете начать просмотр сразу после оплаты
                            </h1>
                        )}
                    </div>
                    <div className="faq-item-2">
                        <button className="article-button flex flex-row justify-between font-medium text-left items-center" onClick={() => toggleVisibility('item2')}>
                            <h1>Будут ли дополнительные затраты и нужен ли бюджет?</h1>
                            <div className="article-button-img rounded-radius20">

                            </div>
                        </button>
                        {visibleItems.item2 && (
                            <h1 className="article-button-text font-medium">
                                Реализовать контент-воронку в блоге из урока можно без вложений. Потребуется ваше вовлечение, время на просмотр уроков, умение анализировать и внедрять полученные знания на практике
                            </h1>
                        )}
                    </div>
                    <div className="faq-item-3">
                        <button className="article-button flex flex-row justify-between font-medium text-left items-center" onClick={() => toggleVisibility('item3')}>
                            <h1>На какой период предоставляется доступ?</h1>
                            <div className="article-button-img rounded-radius20">

                            </div>
                        </button>
                        {visibleItems.item3 && (
                            <h1 className="article-button-text font-medium">
                                Доступ к уроку предоставляется на 30 дней с момента покупки. Вы сможете изучать материал в удобное для вас время
                            </h1>
                        )}
                    </div>
                    <div className="faq-item-4">
                        <button className="article-button flex flex-row justify-between font-medium text-left items-center" onClick={() => toggleVisibility('item4')}>
                            <h1>Могу ли я оплатить урок, находясь за границей?</h1>
                            <div className="article-button-img rounded-radius20">

                            </div>
                        </button>
                        {visibleItems.item4 && (
                            <h1 className="article-button-text font-medium">
                                Да, вы можете оплатить урок из любой точки мира. Если у Вас возникли сложности с оплатой, напишите в наш отдел заботы <Link href="https://t.me/vedernikovazabota">@vedernikovazabota</Link>
                            </h1>
                        )}
                    </div>
                    <div className="faq-item-5">
                        <button className="article-button flex flex-row justify-between font-medium text-left items-center" onClick={() => toggleVisibility('item5')}>
                            <h1>Где будет проходить урок и сколько он длится?</h1>
                            <div className="article-button-img rounded-radius20">

                            </div>
                        </button>
                        {visibleItems.item5 && (
                            <h1 className="article-button-text font-medium">
                                Урок будет доступен на платформе GetCourse. Продолжительность урока ~ 60 минут.
                            </h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
