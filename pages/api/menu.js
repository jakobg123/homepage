export default (req, res) => {
    res.status(200).json([
        { link: 'om sidan', url: '/projects/' },
        { link: 'cv', url: '/projects/' },
        { link: 'om mig', url: '/projects/' },
        { link: 'kontakt', url: '/projects/' },
    ]);
};
