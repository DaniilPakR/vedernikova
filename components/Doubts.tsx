import Image from "next/image"

export default function Doubts() {
    

    return (
        <div className="doubts">
            <div className="doubts-child">
                {/* <div className="item-1">
                    <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man-1" />
                    <Image src="/drawn-people/message-1.svg" width={292} height={70} alt="message" className="message message-1" />
                    <Image src="/drawn-people/message-2.svg" width={423} height={120} alt="message" className="message message-2" />
                    <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman-1" />
                </div>
                <div className="item-2">
                    <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man-2" />
                    <Image src="/drawn-people/message-3.svg" width={273} height={70} alt="message" className="message message-3" />
                    <Image src="/drawn-people/message-4.svg" width={375} height={167} alt="message" className="message message-4" />
                    <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman-2" />
                </div>
                <div className="item-3">
                    <Image src="/drawn-people/man.svg" width={286} height={353} alt="doubts-man" className="doubts-man-3" />
                    <Image src="/drawn-people/message-5.svg" width={416} height={95} alt="message" className="message message-5" />
                    <Image src="/drawn-people/message-6.svg" width={423} height={134} alt="message" className="message message-6" />
                    <Image src="/drawn-people/woman.svg" width={216} height={270} alt="doubts-woman" className="doubts-woman-3" />
                </div> */}
                <div className="doubts-text flex flex-row justify-end font-medium text-right">
                    <h1>Листай, чтобы прочитать<br />все отзывы учеников</h1>
                    <Image src="arrow.svg" width={48} height={39} alt="arrow-svg" className="pl-arrow" />
                </div>
            </div>
        </div>
    )
}