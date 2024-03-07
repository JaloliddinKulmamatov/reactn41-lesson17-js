export function daraja(a) {
    return a ** 2
}

export const positive = (arr) => arr.filter(el => el > 0);

 export function soulition(num) {
    if (num < 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

