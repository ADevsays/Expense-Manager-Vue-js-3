const currencyFormater = new Intl.NumberFormat(("es-CO"), {
    style: "currency", currency: "COP"
});

export default currencyFormater;