const onClick = e => {
    import('./maps/44200.js').then(obj => {
        obj.notify();
    })
}

document.getElementById("map").addEventListener("click", onClick)