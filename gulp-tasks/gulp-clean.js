async function clean() {
    const del = (await import('del')).default;

    return del(['dist']);
}

module.exports = clean;
