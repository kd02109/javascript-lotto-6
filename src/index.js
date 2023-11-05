import App from './App.js';
import LottoValidation from './validation/LottoValidation.js';

const app = new App();
await app.play();
LottoValidation.checkLength([1, 2, 3, 4]);
