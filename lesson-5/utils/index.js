const getProjection = (queryParams) => {
    const mapProjection = {};
    for (const key in queryParams) {
        mapProjection[key] = Number(queryParams[key]);
    }
    return mapProjection;
}
export {
    getProjection
}