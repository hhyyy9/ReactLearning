type GreetProps = {
    name: string,
    messageNumber?: number,
    isLoginIn: boolean
}

export const Greet = (props: GreetProps) => {
    const {messageNumber = 100} = props;
    return(
        <div>
            <h2>
            {
                props.isLoginIn 
                ? `Welcome ${props.name}! You have ${messageNumber} unread messages.` 
                : 'Welcome Guest'
            }
            </h2>
        </div>
    )
}