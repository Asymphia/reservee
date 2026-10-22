import { ReactNode } from "react"

interface MainHeadingProps {
    title: string
    desc: string
    leftPanel?: ReactNode
    isH2?: boolean
}

const Heading = ({ title, desc, leftPanel, isH2=false }: MainHeadingProps) => {
    const Tag = isH2 ? "h1" : "h2"

    return (
        <section className="flex justify-between items-start gap-6">
            <header className={ isH2 ? "" : "max-w-200 space-y-3" }>
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