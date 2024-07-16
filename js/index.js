const updateTime = () => {
    let date = new Date()

    // pad a leading 0
    const pad = t => (`${t}`.length < 2) ? `0${t}` : `${t}`

    let hours = date.getHours()
    let ampm = hours < 12 ? 'AM' : 'PM'
    if (ampm === 'PM') { hours -= 12 }
    if (hours === 0)   { hours  = 12 }

    let mins = date.getMinutes()
    
    document.querySelector('#time').innerText = `${hours}:${pad(mins)} ${ampm}`
    setTimeout(updateTime, 1000);
}
updateTime()


// make sure we can re-open later without copying too much code
const saveWelcomePage = () => {
    window.__welcomepage = document
        .querySelector('.window[data-name="Welcome!"]')
        .querySelector('.window-body')
        .innerHTML
}
saveWelcomePage()

const isMobileBrowser = () => (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

/* shims for mobile */
const recalculateHeight = () => {
    document.body.style.height = `${window.innerHeight}px`
}
window.addEventListener('load', recalculateHeight)
window.addEventListener('resize', recalculateHeight)
window.addEventListener('orientationchange', recalculateHeight)
