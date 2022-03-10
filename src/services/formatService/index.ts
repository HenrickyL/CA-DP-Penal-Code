import {format} from 'date-fns'
import brLocale from 'date-fns/locale/pt-BR'

export function formatDate(date: string, formatDate: string = "dd MMMM yyyy") {
    return format(
        new Date(date),
        formatDate,
        {locale:brLocale}
    )
}

export function upperFirst(text:string){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatMoney(text:string):string{
    let res = Number(text).toFixed(2).toString().split('.')
    return `R$ ${res[0]},${res[1]}`
}