const showCake = () => {
    document.querySelector('#cake-holder').classList.add('done');
    confetti({
    particleCount: 150,
    spread: 180,
    origin: { y: 0.6 }
});
    document.querySelector('#photoMemories').classList.add('is-visible');
}