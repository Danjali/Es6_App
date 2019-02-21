import {
	results,
	temp
} from './named_export';
class App {
	constructor() {
	}

	evaluateResult() {
		results.forEach(item => {
			const {
				marks
			} = item,
			parentClass = (marks.english < 35 || marks.hindi < 35 || marks.mathematics < 35) ? 'redbg' : '',
			percentage = (((marks.english + marks.hindi + marks.mathematics) / 300) * 100).toFixed(2)+'%',
			table = document.getElementById('resultTable'),
			list = document.createElement('li'),
			firstName = document.createElement('div'),
			lastName = document.createElement('div'),
			percentageElem = document.createElement('div');
			parentClass && list.classList.add(parentClass);
			list.classList.add('Heading');
			firstName.textContent = item.firstName;
			lastName.textContent = item.lastName;
			percentageElem.textContent = percentage;
			list.appendChild(firstName);
			list.appendChild(lastName);
			list.appendChild(percentageElem);
			table.appendChild(list);

			firstName.style.cursor = 'pointer';

			firstName.onclick = function () {

			//generate third tab of student details
			let thirdTab = document.getElementById('tabs'),
			tabList = document.createElement('li'),
			studentDetailsTab = document.createElement('a'),
			studentDetailsContent = document.createElement('div');
			parentClass && list.classList.add(parentClass);
			tabList.classList.add('active');
			studentDetailsTab.textContent = "Student Details";
			thirdTab.appendChild(tabList);
			tabList.appendChild(studentDetailsTab);

      //add properties to new tab
			let secondTab = document.getElementsByTagName("li")[1];
			secondTab.classList.remove('active');
			var h1 = document.getElementsByTagName("a")[2];
			var att = document.createAttribute("data-toggle");
			att.value = "tab";
			var att1 = document.createAttribute("href");
			att1.value = "#menu2";
			h1.setAttributeNode(att);
			h1.setAttributeNode(att1);
			var att2 = document.createAttribute("aria-expanded");
			att2.value = "true";
			h1.setAttributeNode(att2);

      //add content to third tab
      results.filter(x => {
        if(x.firstName === item.firstName){
          let englishMarks = marks.english,
              hindiMarks = marks.hindi,
              mathematicsMarks = marks.mathematics,
              totalMarksStudent = marks.english + marks.hindi + marks.mathematics,
              pecentageStudent =  (((marks.english + marks.hindi + marks.mathematics) / 300) * 100).toFixed(2)+'%';

          let table1 = document.getElementById('resultTable1'),
  			     list1 = document.createElement('li'),
  			     displayEnglish = document.createElement('div'),
  			     displayHindi = document.createElement('div'),
  		       displayMathematics = document.createElement('div'),
             displayTotalMarks = document.createElement('div'),
             displayPecentage = document.createElement('div'),
             name = document.createElement('p');
  			     parentClass && list1.classList.add(parentClass);
  			     list1.classList.add('Heading');
             name.textContent = item.firstName +' ' +item.lastName;
  			     displayEnglish.textContent = englishMarks;
  			     displayHindi.textContent = hindiMarks;
  			     displayMathematics.textContent = mathematicsMarks;
             displayTotalMarks.textContent = totalMarksStudent;
             displayPecentage.textContent = pecentageStudent;

             list1.appendChild(displayEnglish);
  			     list1.appendChild(displayHindi);
  			     list1.appendChild(displayMathematics);
             list1.appendChild(displayTotalMarks);
             list1.appendChild(displayPecentage);
  			     table1.appendChild(list1);
             list1.appendChild(name);
             
      }
      });
		};
	});
}
	// createElement = tag => document.createElement(tag);

 //evaluateResult();
}
export default App;
