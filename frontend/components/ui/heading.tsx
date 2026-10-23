import { ReactNode } from "react"

interface MainHeadingProps {
    title: string
    desc: string | ReactNode
    leftPanel?: ReactNode
    isH2?: boolean
    className?: string
}

const Heading = ({ title, desc, leftPanel, isH2=false, className="" }: MainHeadingProps) => {
    const Tag = isH2 ? "h2" : "h1"

    return (
        <section className={`flex justify-between items-start gap-6 ${ className }`}>
            <header className={ isH2 ? "" : "max-w-200 space-y-4" }>
                <Tag className={ isH2 ? "text-xl" : "text-5xl" }>
                    { title }
                </Tag>

                <p>
                    { desc }
                </p>
            </header>

            {
                leftPanel && leftPanel
            }
        </section>
    )
}

export default Heading