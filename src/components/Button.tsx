type Props = {
    onClick: () => void
    children: string
}

function Button({onClick, children}: Props) {
    return <button onClick={onClick}>{children}</button>
}

export default Button