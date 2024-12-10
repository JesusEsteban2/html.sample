console.log(makePassword(5));

function countWords(sentence = "") {
    let result = 0;
    sentence.search;
    return result;
}

function makePassword(lengPass = 0) {
    const letters = "abcdefghijklmnñopqrstuvxyz";
    let result = "";

    lengPass = lengPass < 6 ? 6 : lengPass;

    for (let index = 0; index < lengPass; index++) {
        const typeOfRandom = makeRandom(2);
        switch (typeOfRandom) {
            case 0:
                result = result + makeRandom(9).toString();
                break;
            case 1:
                result = result + letters[makeRandom(letters.length - 1)];
                break;

            case 2:
                result =
                    result +
                    letters[makeRandom(letters.length - 1)].toUpperCase();
                break;
            default:
                break;
        }
    }

    return result;
}

function makeRandom(maxNum = 0) {
    const result = Math.trunc(Math.random() * (maxNum + 1));
    return result;
}
