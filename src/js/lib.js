// -------------------zodiac----------------------

export function Date(day, month) {
    this.day = day;
    this.month = month;
}

export function Zodiac(nameOfZodiac, numberOfMonth) {
    this.nameOfZodiac = nameOfZodiac;
    this.numberOfMonth = numberOfMonth;
}

export function singOfZodiac(zodiacs, birthday) {
    let result;
    for (const zodiac of zodiacs) {
        if (zodiac.numberOfMonth === birthday.month){
            if (birthday.day > 22) {
                const next = zodiacs [zodiac.numberOfMonth];
                result = next.nameOfZodiac;
            }
            else {
                result = zodiac.nameOfZodiac;
            }
        }
    }
    return result;
}

