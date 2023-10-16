function Remove(item: any, Array: Array<any>) {
    const index = Array.indexOf(item, 0);
    if (index > -1) {
        Array.splice(index, 1);
    }
    return Array;
}

export {
    Remove
}