//================================Chap NO 38 to 42===============================
//==========Task 1============
 
// function pow(){
// var a=+prompt("Enter the value of Base")
//     var b=+prompt("Enter the value of power")
//     var result=Math.pow(a,b)
//     alert( "The result is " + result)
// }

//==========Task 2============

// var year = prompt("Enter an Year");


// function LeapYear() {
//     if ((parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0) {
//         document.write( year+ ' is a Leap Year');
//     } else {
//         alert(year+' is a Not Leap Year');
//     }
// }


// LeapYear();


//==========Task 3============

// function s(a, b, c) {
//     return (a + b + c) / 2;
// }


// function area(a, b, c) {
//     var S = s(a, b, c);
//     return S * (S - a) * (S - b) * (S - c);
// }


// alert(area(+prompt("Enter 1st value"), +prompt("Enter 2nd value"), +prompt("Enter third value")))

//==========Task 4============
// function receivedMarks() {
//     var arr = [85, 80, 50];
//     var totalMarks = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalMarks += arr[i]
//     }


//     return totalMarks;
// }


// function average() {
//     return 'Average:' + receivedMarks() / 3;
// }


// function percentage() {
//     return 'Percentage: ' + (receivedMarks() / 300) * 100 + '%';
// }


// function main() {
//     alert(average());
//     alert(percentage());
// }


// main()

//==========Task 5============

// var exp= 'Hello world'
// console.log(exp.indexOf('l'))
// var word="Hello worlds";
// function remove(){
// for (i=0; i>5 ; i++ )

// }

// var Z = 'HELLO WORLD';

// function findIndex(index) {
//     for (let i = 0; i < Z.length; i++) {
//         if (Z[i] == index) {
//             document.write(i)
//             break;
//         }
//     }
// }


// findIndex('L')


//==========Task 6============

// function delVowels(sentance) {
//     var removeVovels = '';


//     for (let i = 0; i < sentance.length; i++) {
//         if (sentance[i] != 'A' && sentance[i] != 'E' && sentance[i] != 'I' && sentance[i] != 'O' && sentance[i] != 'U' && sentance[i] != 'a' && sentance[i] != 'e' && sentance[i] != 'i' && sentance[i] != 'o' && sentance[i] != 'u') {
//             removeVovels += sentance[i]


//         }
//     }
//     document.write(removeVovels);
// }


// delVowels('Write a function to delete all vowels from a sentence');


//==========Task 7============

// function find() {
//     var sentance = "Pleases read this application and give me gratuity";
//     var characters = sentance.toLowerCase();
//     var count = 0;


//     for (let i = 0; i < characters.length; i++) {
//         var firstChar = characters[i];
//         var secondChar = characters[i + 1];


//         if (vowelsCheck(firstChar) && vowelsCheck(secondChar)) {
//             count++
//             document.write(firstChar + secondChar + ' ')
//         }
//     }
//     document.write('<br> Count: ' + count)
//     return count;
// }

// function vowelsCheck(firstChar) {
//     switch (firstChar) {
//         case 'a':
//             return true;
//         case 'e':
//             return true;
//         case 'i':
//             return true;
//         case 'o':
//             return true;
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// find();

//==========Task 8============
// var dis = prompt('Enter distance between two cities');


// function meters() {
//     return parseInt(dis) * 1000;
// }


// function feet() {
//     return parseInt(dis) * 3280.8;
// }


// function inches() {
//     return parseInt(dis) * 39370;
// }


// function centimeters() {
//     return parseInt(dis) * 100000;
// }


// document.write('Meters: ' + meters() + ' m');
// document.write('<br> Foot: ' + feet() + ' ft');
// document.write('<br> Inches: ' + inches() + ' in');
// document.write('<br> Centimeters: ' + centimeters() + ' cm');

//==========Task 9============

// var time= prompt("Enter Time of Employee Worked in hours")
// var overTime, overTimePay = 0;


// if (time > 40) {
//     overTime = time - 40;
//     overTimePay = overTimePay + (12 * overTime);
// }


// document.write('Total over timE ' + overTimePay);

//==========Task 10============


// var withdrawer = prompt('Enter Amount')


// var hundred = parseInt(withdrawer) / 100;
// var fifty = (parseInt(withdrawer) % 100) / 50;
// var tens = ((parseInt(withdrawer) % 100) % 50) / 10;


// document.write(parseInt(hundred) + ' hundred notes ' + parseInt(fifty) + ' fifty notes ' + parseInt(tens) + ' tens notes');

//================================Chap NO 43 to 48===============================

//==========Task 1============

// function popup() {
//     alert('Hi,This is javascript assignment by mian Hamad Tariq...')
// }

//==========Task 2============

// function popup() {
//     alert('Thank you for clicking here...')
// }

//==========Task 3============

// function delet(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }


//==========Task 4============

// function Change() {
//     document.getElementsByTagName('img')[0].src = '02.jpg';
// }


// function ReChange() {
//     document.getElementsByTagName('img')[0].src = '03.jpg';
// }


//==========Task 5============



// var a = 0;
// function increase() {
//     a++;
//     document.getElementsByTagName('label')[0].innerText = a;
// }
// function decrease() {
//     a--;
//     document.getElementsByTagName('label')[0].innerText = a;
// }

//================================Chap NO 49 to 52===============================

//==========Task 1============


// function Data() {
//     var name = document.getElementsByTagName('input')[0].value
//     var email = document.getElementsByTagName('input')[1].value


//     document.write('Name: ' + name + '<br>');
//     document.write('EMail: ' + email)
// }
//==========Task 2============



// function readMore() {
//     var sentance = 'The idea that communication can break down is widely accepted. Generally, people assume that communication has broken down when one person has failed to accurately interpret the communicationbehavior of another person. While this frequently happens, it does not mean communication has physically broken down. Rather, it means that we have been ineffective in communicating.'
//     document.getElementsByTagName('a')[0].innerHTML = '';
//     document.getElementsByTagName('p')[0].innerText += sentance;
// }
//==========Task 3============




// function showData() {
//     var id = document.getElementsByTagName('input')[0].value
//     var name = document.getElementsByTagName('input')[1].value


//     var table = document.createElement('table')
//     var tableRow = document.createElement('tr')
//     var tableDivision1 = document.createElement('td')
//     var tableDivision2 = document.createElement('td')
//     var editButton = document.createElement('button')
//     var deleteButton = document.createElement('button')


//     var idText = document.createTextNode(id)
//     var nameText = document.createTextNode(name)


//     document.body.appendChild(table)
//     document.getElementsByTagName('table')[0].appendChild(tableRow)


//     tableDivision1.appendChild(idText)
//     tableDivision2.appendChild(nameText)


//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);


//     cell1.appendChild(tableDivision1)
//     cell2.appendChild(tableDivision2)
//     cell3.appendChild(editButton)
//     cell4.appendChild(deleteButton)


//     table.setAttribute('border', '1px')
//     deleteButton.setAttribute('onClick', 'deleteRow(this)')
//     editButton.setAttribute('onClick', 'editRow()')
//     editButton.setAttribute('id', 'edit')
//     deleteButton.setAttribute('id', 'delete')
//     document.getElementById('edit').innerText = 'Edit'
//     document.getElementById('delete').innerText = 'Delete'
// }


// function deleteRow(button) {
//     var row = button.parentNode.parentNode
//     row.parentNode.removeChild(row)
// }


// function editRow() {
//     document.getElementsByTagName('form')[1].style.display = 'block'


//     var td1 = document.getElementsByTagName('td')[1].innerText
//     var td2 = document.getElementsByTagName('td')[3].innerText


//     document.getElementsByTagName('input')[3].value = td1
//     document.getElementsByTagName('input')[4].value = td2


// }


// function editRow1() {
//     var id = document.getElementsByTagName('input')[3].value
//     var name = document.getElementsByTagName('input')[4].value


//     document.getElementsByTagName('td')[1].innerText = id
//     document.getElementsByTagName('td')[3].innerText = name


//     document.getElementsByTagName('form')[1].style.display = 'none'
// }


//================================Chap NO 53 to 67===============================

	

	var Content = document.getElementById('main-content').childNodes
	for (i = 0; i < Content.length; i++) {
	    document.write(Content[i].nodeName + "<br>")
	}
	

	var renderClass = document.getElementsByClassName('render')
	for (let i = 0; i < renderClass.length; i++) {
	    document.write(renderClass[i].innerHTML)
	}
	

	document.getElementById('frst-name').value = "ABCD"
	document.getElementById('last-name').value = "XYZ"
	document.getElementById('email').value = "ABCD@XYZ.COM"
	

	// 2
	// var nodeType = document.getElementById('main-content')
	// document.write(nodeType.nodeType)
	

	// var nodeType1 = document.getElementById('last-name')
	// document.write(nodeType1.nodeType)
	

	// var nodeType2 = document.getElementById('last-name').childNodes
	// document.write(nodeType2.nodeType)
	

	// var a = document.getElementById('last-name').childNodes
	// document.write(a.textContent = "AAA")
	

	// var getChild = document.getElementById('main-content')
	// document.write(getChild.firstChild.nodeName)
	// document.write(getChild.lastChild.nodeName)
	

	// var getSibling = document.getElementById('lastName')
	// document.write(getSibling.nextSibling.nodeName)
	// document.write(getSibling.previousSibling.nodeName)
	

	// var getParentNodeAndNodeType = document.getElementById('email')
	// document.write(getParentNodeAndNodeType.parentNode.nodeName)
	// document.write(getParentNodeAndNodeType.nodeType)




