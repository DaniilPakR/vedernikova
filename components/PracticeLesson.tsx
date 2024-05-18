import Image from "next/image"

export default function PracticeLesson() { 
    
    return (
        <div className="practice-lesson flex justify-center relative">
            <Image src="/black-line-mobile.svg" width={515} height={504} alt="black-line-img" className="pl-bg absolute z-10" />
            <div className="practice-lesson-child flex flex-col justify-center">
                <div className="pl-header">
                    <div className="flex flex-row">
                        <h1 className="pl-small-text flex self-end font-medium">
                            Листай, чтобы увидеть все
                        </h1>
                        <Image src="arrow.svg" width={48} height={39} alt="arrow-svg" className="pl-arrow" />
                    </div>
                        <h1 className="pl-big-text font-extrabold">
                            Возникли сомнения?
                        </h1>
                </div>
                <div className="pl-content flex flex-col bg-customPurple rounded-radius20">
                    <h1 className="pl-content-big font-extrabold text-right">Практический урок</h1>
                    <h1 className="pl-content-small font-medium">После которого вы узнаете как создать в блоге систему,<br />которая будет продавать<br />за вас без ежедневных<br />сторис и выгорания.</h1>
                </div>
                <iframe width="361" height="202"
                    src="https://www.youtube.com/embed/-X4hmyIXq2M" className="video flex self-center z-20">
                </iframe> 
            </div>
        </div>
    )
}