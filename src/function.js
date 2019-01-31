import { results, temp } from './named_export';
class App {
    constructor() {
        this.lists = results;
      }
      getEvaluateResult (results){
        results.forEach(item => {
          let temp = item.marks;
          if(temp.english < 35 || temp.hindi < 35 || temp.mathematics <35){
              item.result = 'fail';
          }else{
              item.result = 'pass';
          }
              results.map(item => item.result);
        })
      }

      getPercentage (results){
        results.forEach(item =>{
          let temp = item.marks;
          item.percentage = ((temp.english + temp.hindi + temp.mathematics) / 300)*100;
          results.map(item => item.percentage);
        })
      }

      getTotalMarks (results){
        results.forEach(item =>{
          let temp = item.marks;
          item.totalMarks = temp.english + temp.hindi + temp.mathematics;
          results.map(item => item.totalMarks);
        })
      }

      getListElement (){
        for(let i=0 ; i<results.length; i++){
        var newDiv = document.createElement("div1");
        var newContent = document.createTextNode(results[i].firstName);
        newDiv.appendChild(newContent);
       var currentDiv = document.getElementById("div1");
        document.body.appendChild(newDiv, currentDiv);
     }
      }
}
export default App;
