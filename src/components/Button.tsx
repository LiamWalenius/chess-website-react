type Props = {
    children: string
    onClick: () => void
}

function Button({children, onClick}: Props) {
    return <button onClick={onClick}>{children}</button>
}

export default Button