import Link from 'next/link'

type buttonProps = {
    text: string;
    link?: string;
}

const Button = ({ text, link }: buttonProps) => {
    return (
        <>
            <Link href={link || '#'} >
                {text}
            </Link>
        </>
    )
}

export default Button
