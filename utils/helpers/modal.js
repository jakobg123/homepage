export const lockBody = () => {
    document.body.style.overflow = 'hidden';
    return;
};

export const unlockBody = () => {
    document.body.style.overflowY = 'scroll';
    return;
};
