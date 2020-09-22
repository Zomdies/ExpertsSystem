import React from 'react'

type PageProps = {
    title: string,
    index: number,
    setWeight: any

}

const Page: React.FC<PageProps> = ({ title, index, setWeight }) => {
    return (
        <div className="Welcome">
            <p>{title}</p>
            <div className="Buttons__Block">
                <button onClick={() => setWeight(index, true)} >Да</button>
                <button onClick={() => setWeight(index, false)}>Нет</button>
            </div>
        </div>
    )
}

export default Page
