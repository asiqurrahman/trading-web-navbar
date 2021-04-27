window.onscroll = () => {
    const nav = document.querySelector('#navbar2');
    if(this.scrollY <= 700) nav.className = ''; else nav.className = 'scroll';
};