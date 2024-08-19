function isFacetMapping(f) {
    // Check if f is an object and has a type property
    return typeof f === 'object' && f !== null && f.type === 'facet';
}
