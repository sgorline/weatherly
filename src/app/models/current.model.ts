export class Current {
    
    constructor() {
        this.main = {temp: ''}
        this.name = ''
        this.weather = [{}]
    }
    
    id: number
    main: {
        temp: string
    }
    name: string
    weather: Array<{}>
    
}