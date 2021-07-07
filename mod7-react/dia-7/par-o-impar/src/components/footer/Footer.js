function Footer({ text }) {
    const number = Number(text);

    // if (!text) {
    //     return null;
    // }

    // if (isNaN(number)) {
    //     return <div>El número introducido no es válido</div>;
    // }

    const label = number % 2 === 0 ? 'Es par' : 'Es Impar';
    return (
        text &&
        (isNaN(number) ? (
            <div>El número introducido no es válido</div>
        ) : (
            <div>{label}</div>
        ))
    );
}

export default Footer;
