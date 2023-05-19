import { createInterface } from 'readline';
import { ConvertTemperatures } from './convertTemperatures';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Qual temperatura você deseja converter? (celsius ou fahrenheit) ', choice => {
  if (choice === 'celsius') {
    readline.question('Digite a temperatura em graus Celsius: ', value => {
      const convertTemperatures = new ConvertTemperatures();
      const result = convertTemperatures.convertCelsiusToFahrenheit(Number(value));

      console.log(`O valor em Fahrenheit é: ${result.toFixed(2)}`);
      readline.close();
    });
  } else if (choice === 'fahrenheit') {
    readline.question('Digite a temperatura em graus Fahrenheit: ', value => {
      const convertTemperatures = new ConvertTemperatures();
      const result = convertTemperatures.convertFahrenheitToCelsius(Number(value));

      console.log(`O valor em Celsius é: ${result.toFixed(2)}`);
      readline.close();
    });
  } else {
    console.log(new Error("Opção inválida"));
    readline.close();
  }
});