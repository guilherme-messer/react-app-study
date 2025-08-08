
function Message() {
    // o codigo é compilado para js, mesmo que pareça ser html
    const name = 'Mosh';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;