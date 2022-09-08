canvas.addEventListener('mousemove', (e) => {
    var canvasRect = canvas.getBoundingClientRect()
    mouse = {
        x: Math.round(e.clientX - canvasRect.left),
        y: e.clientY - canvasRect.top,
    }
})
