import App  from './function';
import person  from './const';
import { results, temp } from './named_export';
let app = new App();


app.getEvaluateResult(results);
app.getPercentage(results);
app.getTotalMarks(results);
app.getListElement();

console.log(results);
