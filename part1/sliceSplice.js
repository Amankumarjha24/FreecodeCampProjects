function frankenSplice(arr1, arr2, index) {
    const firstPart = arr2.slice(0, index)
    const secondPart = arr2.slice(index)

    return [...firstPart, ...arr1, ...secondPart]
}

