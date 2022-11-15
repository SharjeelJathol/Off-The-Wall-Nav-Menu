let as = document.getElementsByTagName('a');
for (let i = 0; i < as.length; i++) {
    as[i].onmousemove = e => {
        const rect = as[i].getBoundingClientRect(),
        img = as[i].querySelector('img');
        console.log('Cursor position', e.clientX, e.clientY)
        console.log('img position', img.style.left, img.style.top);
        console.log('a position', rect.left, rect.top);
        e.clientX-rect.left>0?img.style.left = `${e.clientX-rect.left}px`:void(0);
        e.clientY-rect.top>0?img.style.top = `${e.clientY-rect.top}px`:void(0);
        // img.style.left = `${e.clientX-rect.left}px`;
        // img.style.top = `${e.clientY-rect.top}px`;
        console.log('img position', img.style.left, img.style.top);
    }
};