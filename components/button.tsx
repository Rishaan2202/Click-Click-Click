import Link from 'next/link'

type buttonProps = {
    text: string;
    styling?: string;
    onClick?: () => void;
}

const Button = ({ text, styling, onClick }: buttonProps) => {
    return (
        <>
            <button className={`btn ${styling || ''}`} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Button
