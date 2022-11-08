goTo = (keyword) => {
    const identifier = '#' + keyword;
    const portfolio = document.querySelector(identifier);
    portfolio.scrollIntoView({behavior: 'smooth'});
}