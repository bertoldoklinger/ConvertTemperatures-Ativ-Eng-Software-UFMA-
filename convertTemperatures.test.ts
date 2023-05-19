import { describe, expect, test } from 'vitest';
import { ConvertTemperatures } from './convertTemperatures';

const convertTemperatures = new ConvertTemperatures();

describe('Convert Fahrenheit to celsius', () => {
  test('should convert 32°F to 0°C', () => {
    const result = convertTemperatures.convertFahrenheitToCelsius(32);

    expect(result).toBe(0);
  });

  test('should convert 212°F to 100°C', () => {
    const result = convertTemperatures.convertFahrenheitToCelsius(212);

    expect(result).toBeCloseTo(100);
  });

  test('should convert -40°F to -40°C', () => {
    const result = convertTemperatures.convertFahrenheitToCelsius(-40);

    expect(result).toBe(-40);
  });

});


describe('Convert Celsius to Fahrenheit', () => {
  test('Should convert 0°C to 32°F', () => {
    const result = convertTemperatures.convertCelsiusToFahrenheit(0);

    expect(result).toBe(32);
  });

  test('Should convert 100°C to 212°F', () => {
    const result = convertTemperatures.convertCelsiusToFahrenheit(100);

    expect(result).toBe(212);
  });

  test('should convert -40°C to -40°F', () => {
    const result = convertTemperatures.convertCelsiusToFahrenheit(-40);

    expect(result).toBe(-40);
  });
});



