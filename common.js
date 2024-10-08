function randomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomArray = [12, 20, 38, 9, 59, 28, 52, 7, 40, 31, 27, 25, 19, 27, 27, 6, 47];
    let random = '';
    let attempts = 0;

    while (random.length < randomArray.length) {
        let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        attempts++;

        if (attempts % 2 === 0) {
            randomChar = randomChar.toUpperCase();
        } else {
            randomChar = randomChar.toLowerCase();
        }

        if (characters.indexOf(randomChar) === randomArray[random.length]) {
            random += randomChar;
        }

        if (attempts % 1000 === 0) {
        }
    }

    return random;
}
