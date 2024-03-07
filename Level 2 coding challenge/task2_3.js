function columns(strings) {
    const maxLength = Math.max(...strings.map(str => str.length));

    const paddedStrings = strings.map(str => str.padEnd(maxLength, ' '));

    const columnsArray = Array.from({ length: maxLength }, (_, i) =>
        paddedStrings.map(str => str[i] || ' ')
    );
    columnsArray.forEach(row => console.log(row.join(' ')));
}

// Example usage:
columns(["Write", "good", "code", "every", "day"]);


module.exports = {columns};   
