import { isEmpty }  from '@ember/utils';

export function number2percent(value,fixed=0) {
    if(isEmpty(value)) {
        return value;
    }
    return (Number(value)*100).toFixed(fixed)
}
export function number2thousand(number,fixed=0) {
    let result = '',
    fixedNumber = fixed;

    if (isEmpty(number)) {
        return number;
    }
    if (!isEmpty(fixedNumber) && !isEmpty(number)) {
        number = Number(number).toFixed(fixedNumber);
    }
    result = number.toString().indexOf('.') !== -1 ? number.toLocaleString() : number.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

    return result;
}