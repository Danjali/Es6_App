import square  from './function';
import person  from './const';
import { results, temp } from './named_export';


console.log(results);

const evaluateResult = (results) =>{
  results.forEach(item => {
      let temp = item.marks;
        if(temp.english < 35 || temp.hindi < 35 || temp.mathematics <35){
            item.result = 'fail';
        }else{
            item.result = 'pass';
        }
        results.map(item => item.result);
  })
};

const  calculatePercentage = (results) =>{
  results.forEach(item =>{
    let temp = item.marks;
    item.percentage = ((temp.english + temp.hindi + temp.mathematics) / 300)*100;
    results.map(item => item.percentage);
  })
};

const  calculateTotalMarks = (results) =>{
  results.forEach(item =>{
    let temp = item.marks;
    item.totalMarks = temp.english + temp.hindi + temp.mathematics;
    results.map(item => item.totalMarks);
  })
};
