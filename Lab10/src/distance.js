export default function calculateDist(val,unit) {
    switch (unit) {
        case 'KM':
            return `${val*1000}M`
        case 'M':
            return `${val*0.001}KM`
        default:
            return 'unknown'
    }
  }