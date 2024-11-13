const getYYYY = () => {
    const dt = new Date();
    const YYYY = dt.getFullYear()
    return YYYY;
}

window.onload = () => {
    document.getElementById("year-placeholder").textContent = getYYYY()
}