function square(size, character = '#') {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += character;
        }
        console.log(row);
    }   
}
module.exports = {square};
