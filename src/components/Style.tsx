type StyleProps = {
    styles : React.CSSProperties
}

export const Style = (props: StyleProps) => {
    return (
        <div style={props.styles}>
            Text content goes here.
        </div>
    )
}