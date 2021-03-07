export const fetchData = async (slug) => {
    const host = process.env.HOST;
    const data = await fetch(`http://${host}/api${slug}`);
    return await data.json();
};
