# calculator-currency-weather-simoneaa

Emmpleando el framework VUE, se nos solicitaba crear una aplicación que requiera únicamente una vista y que cumpla las siguientes funciones:  
- Calculadora
- Conversor de divisas
- El Tiempo

## ✨ Requisitos

1. **Calculadora**  
- La calculadora deberá poder realizar las operaciones básicas: suma, resta, multiplica, división
- Teclas obligatorias:
  - Númericas del 0 al 9
  - Suma, resta, multiplicar, división
  - Signo "igual"
  - Signo "." para la coma
  - CE (para resetear)
- Control de errores
2. **Conversor de divisas**  
- Deberá estar integrado en la calculadora
- Divisas a utilizar : Euro (€), Dólar ($), Yen (¥)
- Se deberá utilizar la siguiente API: https://currencyfreaks.com/
3. **El Tiempo**
- Se deberá utilizar la siguiente API: https://www.el-tiempo.net/api
- Mostrar una imagen en función del "StateSky"
- Se puede elegir entre la información nacional o de una provincia (Asturias)

## 🛠️ Tecnologías empleadas e instalación

- HTML 5
- CSS 3
- Javascript
- Vue
- Vitest
- Playwright
- Tailwind  

**Instalar dependencias del proyecto**
```
npm install
```

**Instalar dependencias adicionales**
```
npm install axios
npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
```

**Instalar navegadores para Playwright**
```
npx playwright install
```

## 💻 Resultado final

El cambio entre las diferentes vistas sin emplear el router se utiliza a través de los botones en la parte superior, empleando "v-show".

# Ejecutar programa
```
npm run dev
```

<img src="/calculator-currency-weather-simoneaa/src/assets/calculator.png">
<img src="/calculator-currency-weather-simoneaa/src/assets/currency.png">
<img src="/calculator-currency-weather-simoneaa/src/assets/weather.png">

## 🧪 Testing

**Ejecutar tests unitarios**
```
npm run test:unit
```

**Ejecutar tests E2E (con el servidor activo)**
```
npm run test:e2e
```

<img src="/calculator-currency-weather-simoneaa/src/assets/vitest.jpg">
<img src="/calculator-currency-weather-simoneaa/src/assets/playwright.png">

## 👩‍💻 Autora

Simone Ávila Arranz - Factoría F5 Curso P5
