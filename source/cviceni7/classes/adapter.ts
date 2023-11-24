interface GetTemperature {
  ToFarenheit(celsius: number): number
}






class Farenheit {
  public KelvinToFarenheit(Kelvin: number): number {
    return Kelvin * (9 / 5) - 459.67
  }
}



class Converter implements GetTemperature {
  private faren: Farenheit
  constructor(farenheit: Farenheit) {
    this.faren = farenheit
  }
  public ToFarenheit(celsius: number): number {
    const Kelvin = celsius + 273.15
    return this.faren.KelvinToFarenheit(Kelvin)
  }
}


class Celsius{
  private converter: Converter
  constructor(farenheit: Farenheit) {
    this.converter = new Converter(farenheit)
  }
  public ToFarenheit(celsius: number): number {
    return this.converter.ToFarenheit(celsius)
  }
 }




function Client(Temp: number, GetTemperatur: GetTemperature): void {
  console.log(Temp.toFixed(0) + '°C')
  const celsius = GetTemperatur.ToFarenheit(Temp)
  console.log(celsius.toFixed(0) + '°F')
}

export const main = () => {
  const FarenHeit = new Farenheit()
  const Adapted = new Celsius(FarenHeit)
  Client(35, Adapted)
}
