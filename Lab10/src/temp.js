export default function calculateTemp(val,unit) {
    switch (unit) {
        case 'F':
            return `${(val-32)*5/9+273.15}K\n${(val-32)*5/9}C`
        case 'C':
            return `${val/273}K\n${(val*9/5)+32}F`
        case 'K':
            return `${(val-273.15)*1.8+32}F\n${val-273}C`
        default:
            return 'unknown'
    }
  }