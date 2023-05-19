export class ConvertTemperatures {
  constructor() { }

  convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }

  convertCelsiusToFahrenheit(celsius: number): number {
    return celsius * 9 / 5 + 32;
  }

}