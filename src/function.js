import {
	results,
	temp
} from './named_export';
class App {
	constructor() {
		this.lists = results;
	}

	evaluateResult() {
		results.forEach(item => {
			const {
				marks
			} = item,
			parentClass = (marks.english < 35 || marks.hindi < 35 || marks.mathematics < 35) ? 'redbg' : '',
			percentage = (((marks.english + marks.hindi + marks.mathematics) / 300) * 100).toFixed(2),
			totalMarks = marks.english + marks.hindi + marks.mathematics,
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

			};
		});
	}
	// createElement = tag => document.createElement(tag);

}
export default App;
