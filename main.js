window.onload = function() {
    const centralObject = document.querySelector('.central-object');
    const surroundingObjects = document.querySelectorAll('.surrounding-object');
    const radius = 300; // Radius of the circle

    const centerX = centralObject.offsetLeft + centralObject.offsetWidth / 2;
    const centerY = centralObject.offsetTop + centralObject.offsetHeight / 2;

    surroundingObjects.forEach((obj, index) => {
        const angle = ((index / surroundingObjects.length) * (2 * Math.PI)) - (Math.PI / 2);
        const x = centerX + radius * Math.cos(angle) - obj.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - obj.offsetHeight / 2;

        obj.style.left = `${x}px`;
        obj.style.top = `${y}px`;
    });
};
