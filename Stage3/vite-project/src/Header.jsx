import TextHelper from "./helpers/text"

function Header(){

    // const a = 10
    // const b = a + 10

    const text = "Lorem Ipsum bla bla."

    const result = TextHelper.truncate(text,5);


    return <header> HEADER: {result}</header>;
}


export default Header