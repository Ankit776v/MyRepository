let a = 0;
document.addEventListener('DOMContentLoaded', function(){
  var recentElement1 = document.querySelector('.recently');
  var recentElement2 = document.querySelector('.suggestion');
  let button1 = document.getElementById('b1');
  let button2 = document.getElementById('b2');
  let button3 = document.getElementById('b3');
  let button4 = document.getElementById('b4');
  let button5 = document.getElementById('b5');
  let button6 = document.getElementById('b6');
  let button7 = document.getElementById('b7');
  let button8 = document.getElementById('b8');
  let button9 = document.getElementById('b9');
  let button10 = document.getElementById('b10');
  let button11 = document.getElementById('b11');
  let button12 = document.getElementById('b12');
  let button13 = document.getElementById('b13');
  let button14 = document.getElementById('b14');
  let button15 = document.getElementById('b15');
  let button16 = document.getElementById('b16');
  let pp = document.getElementById('pp');
  moviepage();
  contentpage();
  shortonly();
  moviesonly();
  seriesonly();
  if(pp){
    pp.style.display = 'none';
  }
  if(button1){
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
  }
  let num = getMaxId();
  if(button4 && button5){
    button1.style.display = 'flex';
    button2.style.display = 'flex';
    button3.style.display = 'flex';
  }
  if(recentElement1 || recentElement2){
    for( let show = num; show >= num-9; show--){
      let content = document.getElementById(show);
      if(content)
      content.style.display = 'inline-block';
  }
  hover();
  a = getMaxId();
  console.log(a);
}
const counterDisplay = document.getElementById('c1');
const incrementBtns = document.querySelectorAll('.incre1'); // Select all buttons with class 'incre1'

  // Initialize counter value from localStorage, or set it to 0 if not present
  let counter1 = localStorage.getItem('counter1') ? parseInt(localStorage.getItem('counter1')) : 0;
  if (counterDisplay) counterDisplay.innerText = counter1;

  // Add click event listener to each download button
  incrementBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default link behavior
      counter1++; // Increase the counter value
      if (counterDisplay) counterDisplay.innerText = counter1; // Update the displayed value
      localStorage.setItem('counter1', counter1); // Store the updated value in localStorage
    });
  });
})
function seriesonly(){
  var recentElement = document.querySelector('.Seriesonly');
  
  if(recentElement){
    allcontent(recentElement);
    let numbersArray = [11, 12, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    for (u = numbersArray.length-10; u<=numbersArray.length-1; u++){
      let content = document.getElementById(numbersArray[u]);
      if(content)
      content.style.display = 'inline-block';
    }
    a=numbersArray.length-1;
    console.log(a);
  }
}
function shortonly(){
  var recentElement = document.querySelector('.Shortonly');

  if(recentElement){
    allcontent(recentElement);
    let numbersArray = [76, 147, 148, ];
    for (u = numbersArray.length-10; u<=numbersArray.length-1; u++){
      let content = document.getElementById(numbersArray[u]);
      if(content)
      content.style.display = 'inline-block';
    }
    a=numbersArray.length-1;
    console.log(a);
  }
}
function moviesonly(){
  var recentElement = document.querySelector('.Moviesonly');

  if(recentElement){
    allcontent(recentElement);
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 101, 102, 103, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 149, 151, 152, 153, 154, 155];
    
    for (u = numbersArray.length-10; u<=numbersArray.length-1; u++){
      let content = document.getElementById(numbersArray[u]);
      if(content)
      content.style.display = 'inline-block';
    }
    
    console.log(numbersArray);
    a = numbersArray.length-1;
    console.log(a);
  }
}

function moviepage(){
  var recentElement = document.querySelector('.recently');
  
  if(recentElement){
    allcontent(recentElement);
  }
}
function prevpage(){
  let num = getMaxId();
  let button1 = document.getElementById('b1');
  let button2 = document.getElementById('b2');
  let button3 = document.getElementById('b3');
  let button4 = document.getElementById('b4');
  let button5 = document.getElementById('b5');
  let button6 = document.getElementById('b6');
  let button7 = document.getElementById('b7');
  let button8 = document.getElementById('b8');
  let button9 = document.getElementById('b9');
  let button10 = document.getElementById('b10');
  let button11 = document.getElementById('b11');
  let button12 = document.getElementById('b12');
  let button13 = document.getElementById('b13');
  let button14 = document.getElementById('b14');
  let button15 = document.getElementById('b15');
  let button16 = document.getElementById('b16');
  let np = document.getElementById('np');
  let pp = document.getElementById('pp');
  button1.style.display='none';
  button2.style.display='none';
  button3.style.display='none';
  button4.style.display='none';
  button5.style.display='none';
  button6.style.display='none';
  button7.style.display='none';
  button8.style.display='none';
  button9.style.display='none';
  button10.style.display='none';
  button11.style.display='none';
  button12.style.display='none';
  button13.style.display='none';
  button14.style.display='none';
  button15.style.display='none';
  button16.style.display='none';
  for(hide = num; hide>=1; hide--){
    let pc =document.getElementById(hide);
    pc.style.display = 'none';
  }
  if(a>getMaxId()){
    a = getMaxId();
  }
  if(a<0){
    a+=10;
  }
  a+=10;
  np.style.display = a < 10 ? 'none' : 'flex';
  pp.style.display = a === num ? 'none' : 'flex';
  console.log(a);
  let v = (getMaxId() - a)/10;
  console.log(v);
  if(v===0||v===1){
    button1.style.display='flex';
    button2.style.display='flex';
    button3.style.display='flex';
  }
  if(v===2){
    button2.style.display='flex';
    button3.style.display='flex';
    button4.style.display='flex';
  }
  if(v===3){
    button3.style.display='flex';
    button4.style.display='flex';
    button5.style.display='flex';
  }
  if(v===4){
    button4.style.display='flex';
    button5.style.display='flex';
    button6.style.display='flex';
  }
  if(v===5){
    button5.style.display='flex';
    button6.style.display='flex';
    button7.style.display='flex';
  }
  if(v===6){
    button6.style.display='flex';
    button7.style.display='flex';
    button8.style.display='flex';
  }
  if(v===7){
    button7.style.display='flex';
    button8.style.display='flex';
    button9.style.display='flex';
  }
  if(v===8){
    button8.style.display='flex';
    button9.style.display='flex';
    button10.style.display='flex';
  }
  if(v===9){
    button9.style.display='flex';
    button10.style.display='flex';
    button11.style.display='flex';
  }
  if(v===10){
    button10.style.display='flex';
    button11.style.display='flex';
    button12.style.display='flex';
  }
  if(v===11){
    button11.style.display='flex';
    button12.style.display='flex';
    button13.style.display='flex';
  }
  if(v===12){
    button12.style.display='flex';
    button13.style.display='flex';
    button14.style.display='flex';
  }
  if(v===13){
    button13.style.display='flex';
    button14.style.display='flex';
    button15.style.display='flex';
  }
  if(v===14){
    button14.style.display='flex';
    button15.style.display='flex';
    button16.style.display='flex';
  }
  if(v===15){
    button15.style.display='flex';
    button16.style.display='flex';
  }
  for(let show = a; show>= a-9; show--){
    let content = document.getElementById(show);
    if (content) {
      content.style.display = 'inline-block';
  }
}
}
function nextpage(){
  let num = getMaxId();
  let button1 = document.getElementById('b1');
  let button2 = document.getElementById('b2');
  let button3 = document.getElementById('b3');
  let button4 = document.getElementById('b4');
  let button5 = document.getElementById('b5');
  let button6 = document.getElementById('b6');
  let button7 = document.getElementById('b7');
  let button8 = document.getElementById('b8');
  let button9 = document.getElementById('b9');
  let button10 = document.getElementById('b10');
  let button11 = document.getElementById('b11');
  let button12 = document.getElementById('b12');
  let button13 = document.getElementById('b13');
  let button14 = document.getElementById('b14');
  let button15 = document.getElementById('b15');
  let button16 = document.getElementById('b16');
  let np = document.getElementById('np');
  let pp = document.getElementById('pp');
  button1.style.display='none';
  button2.style.display='none';
  button3.style.display='none';
  button4.style.display='none';
  button5.style.display='none';
  button6.style.display='none';
  button7.style.display='none';
  button8.style.display='none';
  button9.style.display='none';
  button10.style.display='none';
  button11.style.display='none';
  button12.style.display='none';
  button13.style.display='none';
  button14.style.display='none';
  button15.style.display='none';
  button16.style.display='none';
  for(hide = num; hide>=1; hide--){
    let pc =document.getElementById(hide);
    pc.style.display = 'none';
  }
  if(a>getMaxId()){
    a = getMaxId();
  }
  if(a<0){
    a+=10;
  }
  a-=10;
  np.style.display = a < 10 ? 'none' : 'flex';
  pp.style.display = a === num ? 'none' : 'flex';
  let v = (getMaxId() - a)/10;
  console.log(v);
  if(v===0||v===1){
    button1.style.display='flex';
    button2.style.display='flex';
    button3.style.display='flex';
  }
  if(v===2){
    button2.style.display='flex';
    button3.style.display='flex';
    button4.style.display='flex';
  }
  if(v===3){
    button3.style.display='flex';
    button4.style.display='flex';
    button5.style.display='flex';
  }
  if(v===4){
    button4.style.display='flex';
    button5.style.display='flex';
    button6.style.display='flex';
  }
  if(v===5){
    button5.style.display='flex';
    button6.style.display='flex';
    button7.style.display='flex';
  }
  if(v===6){
    button6.style.display='flex';
    button7.style.display='flex';
    button8.style.display='flex';
  }
  if(v===7){
    button7.style.display='flex';
    button8.style.display='flex';
    button9.style.display='flex';
  }
  if(v===8){
    button8.style.display='flex';
    button9.style.display='flex';
    button10.style.display='flex';
  }
  if(v===9){
    button9.style.display='flex';
    button10.style.display='flex';
    button11.style.display='flex';
  }
  if(v===10){
    button10.style.display='flex';
    button11.style.display='flex';
    button12.style.display='flex';
  }
  if(v===11){
    button11.style.display='flex';
    button12.style.display='flex';
    button13.style.display='flex';
  }
  if(v===12){
    button12.style.display='flex';
    button13.style.display='flex';
    button14.style.display='flex';
  }
  if(v===13){
    button13.style.display='flex';
    button14.style.display='flex';
    button15.style.display='flex';
  }
  if(v===14){
    button14.style.display='flex';
    button15.style.display='flex';
    button16.style.display='flex';
  }
  if(v===15){
    button15.style.display='flex';
    button16.style.display='flex';
  }
  console.log(a);
  for(let show = a; show>= a-9; show--){
    let content = document.getElementById(show);
    if (content) {
      content.style.display = 'inline-block';
  }
}
}
function pagecontent(pn){
  let button1 = document.getElementById('b1');
  let button2 = document.getElementById('b2');
  let button3 = document.getElementById('b3');
  let button4 = document.getElementById('b4');
  let button5 = document.getElementById('b5');
  let button6 = document.getElementById('b6');
  let button7 = document.getElementById('b7');
  let button8 = document.getElementById('b8');
  let button9 = document.getElementById('b9');
  let button10 = document.getElementById('b10');
  let button11 = document.getElementById('b11');
  let button12 = document.getElementById('b12');
  let button13 = document.getElementById('b13');
  let button14 = document.getElementById('b14');
  let button15 = document.getElementById('b15');
  let button16 = document.getElementById('b16');
  let np = document.getElementById('np');
  let pp = document.getElementById('pp');
  button1.style.display='none';
  button2.style.display='none';
  button3.style.display='none';
  button4.style.display='none';
  button5.style.display='none';
  button6.style.display='none';
  button7.style.display='none';
  button8.style.display='none';
  button9.style.display='none';
  button10.style.display='none';
  button11.style.display='none';
  button12.style.display='none';
  button13.style.display='none';
  button14.style.display='none';
  button15.style.display='none';
  button16.style.display='none';
  if(pn===0||pn===1){
    button1.style.display='flex';
    button2.style.display='flex';
    button3.style.display='flex';
  }
  if(pn===2){
    button2.style.display='flex';
    button3.style.display='flex';
    button4.style.display='flex';
  }
  if(pn===3){
    button3.style.display='flex';
    button4.style.display='flex';
    button5.style.display='flex';
  }
  if(pn===4){
    button4.style.display='flex';
    button5.style.display='flex';
    button6.style.display='flex';
  }
  if(pn===5){
    button5.style.display='flex';
    button6.style.display='flex';
    button7.style.display='flex';
  }
  if(pn===6){
    button6.style.display='flex';
    button7.style.display='flex';
    button8.style.display='flex';
  }
  if(pn===7){
    button7.style.display='flex';
    button8.style.display='flex';
    button9.style.display='flex';
  }
  if(pn===8){
    button8.style.display='flex';
    button9.style.display='flex';
    button10.style.display='flex';
  }
  if(pn===9){
    button9.style.display='flex';
    button10.style.display='flex';
    button11.style.display='flex';
  }
  if(pn===10){
    button10.style.display='flex';
    button11.style.display='flex';
    button12.style.display='flex';
  }
  if(pn===11){
    button11.style.display='flex';
    button12.style.display='flex';
    button13.style.display='flex';
  }
  if(pn===12){
    button12.style.display='flex';
    button13.style.display='flex';
    button14.style.display='flex';
  }
  if(pn===13){
    button13.style.display='flex';
    button14.style.display='flex';
    button15.style.display='flex';
  }
  if(pn===14){
    button14.style.display='flex';
    button15.style.display='flex';
    button16.style.display='flex';
  }
  if(pn===15){
    button15.style.display='flex';
    button16.style.display='flex';
  }
  let num = getMaxId();
  for(hide = num; hide>=1; hide--){
    let pc =document.getElementById(hide);
    pc.style.display = 'none';
  }
  num = num-pn*10;
  a = num;
  if(a>getMaxId()){
    a = getMaxId();
  }
  if(a<0){
    a+=10;
  }
  np.style.display = a < 10 ? 'none' : 'flex';
  pp.style.display = a === getMaxId() ? 'none' : 'flex';
  for( let show = a; show >= a-9; show--){
    let content = document.getElementById(show);
    if (content) {
      content.style.display = 'inline-block';
  }
}
console.log(a);
}
let searchvalue; // Declare searchvalue outside the function to make it accessible globally

function searchshow() {
  let searchInput = document.getElementById('searchInput');
  let contentElement = document.querySelector('.content');
  let recentElement = document.querySelector('.recent');
  let suggestion = document.querySelector('.suggestion');
  if (searchInput.style.display !== 'flex') {
    searchInput.style.display = 'flex';
  } else {
    searchvalue = document.getElementById('searchInput').value.toLowerCase();
    

    // Loop from 10 to 1
    for (let f = getMaxId(); f >= 1; f--) {
      readSpanValue(f);
    }
    if (window.innerWidth < 456 && contentElement) {
      let spanElement = suggestion.querySelector('h1');
      contentElement.style.display = 'none';
      spanElement.style.display = 'none';
      recentElement.style.display = 'none';
    }
  }
}

// Function to read the value of the span element inside the container with a specified ID
function readSpanValue(containerId) {
  // Get the container element using the provided ID
  var containerElement = document.getElementById(containerId);
  containerElement.style.display = 'inline-block';

  // Check if the container element exists
  if (containerElement) {
    // Find the span element within the container
    var spanElement = containerElement.querySelector('span');

    // Check if the span element exists
    if (spanElement) {
      // Access the text content of the span element
      var spanValue = spanElement.textContent.toLowerCase();

      // Log the span value to the console (you can use it as needed)
      console.log("Span Value:", spanValue);

      // Check similarity only if the stringSimilarity library is available
      if (typeof stringSimilarity !== 'undefined') {
        var similarity = stringSimilarity.compareTwoStrings(spanValue, searchvalue);
        console.log('Similarity:', similarity);

        if (similarity < 0.3) {
          containerElement.style.display = 'none';
        }
      } else {
        console.error('stringSimilarity library is not loaded');
      }
    } else {
      // Log an error if the span element is not found inside the container
      console.error("Span element not found inside the container with ID:", containerId);
    }
  } else {
    // Log an error if the container element is not found
    console.error("Container element not found with ID:", containerId);
  }
}

function getMaxId() {
  let maxId = 0;
  
  // Select all elements with class "container"
  let containers = document.querySelectorAll('.container');
  
  // Iterate over the containers
  containers.forEach(function(container) {
    // Extract the numerical part from the ID
    let containerId = parseInt(container.id);

    // Check if it's a valid number
    if (!isNaN(containerId)) {
      // Update maxId if the current IDis greater than the current maxId
      maxId = Math.max(maxId, containerId);
    }
  });
  console.log(maxId);
  return maxId;
}
  
  function menushow(){
    let options = document.getElementById('options');
    let content = document.getElementById('content');
    let close = document.getElementById('close');
    content.style.transition = '2s ease';
    options.style.display = 'none';
    content.style.display = 'flex';
    close.style.display = 'flex';
  }
  
  function closebar(){
    let close = document.getElementById('close');
    let content = document.getElementById('content');
    content.style.transition = '2s ease';
    content.style.display = 'none';
    options.style.display = 'flex';
    close.style.display = 'none';
  }
  function moviecontent(pn){
    var recentElement = document.querySelector('.Moviesonly');
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    if(pn===0||pn===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(pn===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(pn===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(pn===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(pn===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(pn===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(pn===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(pn===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(pn===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(pn===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(pn===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(pn===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(pn===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(pn===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(pn===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    
    allcontent(recentElement);
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 101, 102, 103, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146];
    let num = numbersArray.length;
    for(hide = num-1; hide>=1; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    num = num-pn*10;
    a = num;
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === numbersArray.length ? 'none' : 'flex';
    for( let show = a-1; show >= a-10; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function seriescontent(pn){
    var recentElement = document.querySelector('.Seriesonly');
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    if(pn===0||pn===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(pn===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(pn===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(pn===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(pn===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(pn===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(pn===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(pn===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(pn===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(pn===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(pn===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(pn===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(pn===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(pn===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(pn===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    
    allcontent(recentElement);
    let numbersArray = [11, 12, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    let num = numbersArray.length-1;
    for(hide = num; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    num = num-pn*10;
    a = num;
    console.log(a);
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === numbersArray.length-1 ? 'none' : 'flex';
    for( let show = a; show >= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function prevmpage(){
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 101, 102, 103, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146];
    let num = numbersArray.length;
    for(hide = num-1; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    if(a>num){
      a = num;
    }
    if(a<0){
      a+=10;
    }
    a+=10;
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    console.log(a);
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function nextmpage(){
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 101, 102, 103, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146];
    let num = numbersArray.length-1;
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    for(hide = num; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    console.log(a);
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    a-=10;
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    console.log(a);
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function prevspage(){
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    let numbersArray = [11, 12, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    let num = numbersArray.length-1;
    for(hide = num-1; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    if(a>num){
      a = num;
    }
    if(a<0){
      a+=10;
    }
    a+=10;
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    console.log(a);
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function nextspage(){
    let numbersArray = [11, 12, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
    let num = numbersArray.length-1;
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    for(hide = num; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    a-=10;
    console.log(a);
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    console.log(a);
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function prevsspage(){
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    let numbersArray = [76, 147, 148];
    let num = numbersArray.length-1;
    for(hide = num-1; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    if(a>num){
      a = num;
    }
    if(a<0){
      a+=10;
    }
    a+=10;
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    console.log(a);
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function nextsspage(){
    let numbersArray = [76, 147, 148];
    let num = numbersArray.length-1;
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    for(hide = num; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    a-=10;
    console.log(a);
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === num ? 'none' : 'flex';
    let v = (num - a)/10;
    console.log(v);
    if(v===0||v===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(v===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(v===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(v===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(v===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(v===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(v===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(v===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(v===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(v===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(v===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(v===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(v===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(v===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(v===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    console.log(a);
    for(let show = a; show>= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
  function shortcontent(pn){
    var recentElement = document.querySelector('.Shortonly');
    let button1 = document.getElementById('b1');
    let button2 = document.getElementById('b2');
    let button3 = document.getElementById('b3');
    let button4 = document.getElementById('b4');
    let button5 = document.getElementById('b5');
    let button6 = document.getElementById('b6');
    let button7 = document.getElementById('b7');
    let button8 = document.getElementById('b8');
    let button9 = document.getElementById('b9');
    let button10 = document.getElementById('b10');
    let button11 = document.getElementById('b11');
    let button12 = document.getElementById('b12');
    let button13 = document.getElementById('b13');
    let button14 = document.getElementById('b14');
    let button15 = document.getElementById('b15');
    let button16 = document.getElementById('b16');
    let np = document.getElementById('np');
    let pp = document.getElementById('pp');
    button1.style.display='none';
    button2.style.display='none';
    button3.style.display='none';
    button4.style.display='none';
    button5.style.display='none';
    button6.style.display='none';
    button7.style.display='none';
    button8.style.display='none';
    button9.style.display='none';
    button10.style.display='none';
    button11.style.display='none';
    button12.style.display='none';
    button13.style.display='none';
    button14.style.display='none';
    button15.style.display='none';
    button16.style.display='none';
    if(pn===0||pn===1){
      button1.style.display='flex';
      button2.style.display='flex';
      button3.style.display='flex';
    }
    if(pn===2){
      button2.style.display='flex';
      button3.style.display='flex';
      button4.style.display='flex';
    }
    if(pn===3){
      button3.style.display='flex';
      button4.style.display='flex';
      button5.style.display='flex';
    }
    if(pn===4){
      button4.style.display='flex';
      button5.style.display='flex';
      button6.style.display='flex';
    }
    if(pn===5){
      button5.style.display='flex';
      button6.style.display='flex';
      button7.style.display='flex';
    }
    if(pn===6){
      button6.style.display='flex';
      button7.style.display='flex';
      button8.style.display='flex';
    }
    if(pn===7){
      button7.style.display='flex';
      button8.style.display='flex';
      button9.style.display='flex';
    }
    if(pn===8){
      button8.style.display='flex';
      button9.style.display='flex';
      button10.style.display='flex';
    }
    if(pn===9){
      button9.style.display='flex';
      button10.style.display='flex';
      button11.style.display='flex';
    }
    if(pn===10){
      button10.style.display='flex';
      button11.style.display='flex';
      button12.style.display='flex';
    }
    if(pn===11){
      button11.style.display='flex';
      button12.style.display='flex';
      button13.style.display='flex';
    }
    if(pn===12){
      button12.style.display='flex';
      button13.style.display='flex';
      button14.style.display='flex';
    }
    if(pn===13){
      button13.style.display='flex';
      button14.style.display='flex';
      button15.style.display='flex';
    }
    if(pn===14){
      button14.style.display='flex';
      button15.style.display='flex';
      button16.style.display='flex';
    }
    if(pn===15){
      button15.style.display='flex';
      button16.style.display='flex';
    }
    allcontent(recentElement);
    let numbersArray = [76, 147, 148];
    let num = numbersArray.length-1;
    for(hide = num; hide>=0; hide--){
      let pc =document.getElementById(numbersArray[hide]);
      pc.style.display = 'none';
    }
    num = num-pn*10;
    a = num;
    console.log(a);
    if(a>numbersArray.length){
      a = numbersArray.length;
    }
    if(a<0){
      a+=10;
    }
    np.style.display = a < 10 ? 'none' : 'flex';
    pp.style.display = a === numbersArray.length-1 ? 'none' : 'flex';
    for( let show = a; show >= a-9; show--){
      let content = document.getElementById(numbersArray[show]);
      if (content) {
        content.style.display = 'inline-block';
    }
  }
  }
function allcontent(recentElement){
  var Container173 = document.createElement('div');
  Container173.id= "173";
  Container173.className = 'container';
  var Anchor173 = document.createElement('a');
  Anchor173.href= './Movie Pages/173.html';
  var Image173 = document.createElement('img');
  Image173.src = 'https://i.pinimg.com/originals/61/66/0d/61660d4a95555450ff66f6a068b7bbc5.jpg';
  Image173.alt = 'Morbius';
  var Span173 = document.createElement('span');
  Span173.textContent = 'Morbius';
  Anchor173.appendChild(Image173);
  Anchor173.appendChild(Span173);
  Container173.appendChild(Anchor173);
  recentElement.appendChild(Container173);

  var Container172 = document.createElement('div');
  Container172.id= "172";
  Container172.className = 'container';
  var Anchor172 = document.createElement('a');
  Anchor172.href= './Movie Pages/172.html';
  var Image172 = document.createElement('img');
  Image172.src = 'https://i.pinimg.com/736x/2c/03/23/2c0323623da613f1d6cf17edae6729ae.jpg';
  Image172.alt = 'Venom Let there be Carnage';
  var Span172 = document.createElement('span');
  Span172.textContent = 'Venom Let there be Carnage';
  Anchor172.appendChild(Image172);
  Anchor172.appendChild(Span172);
  Container172.appendChild(Anchor172);
  recentElement.appendChild(Container172);

  var Container171 = document.createElement('div');
  Container171.id= "171";
  Container171.className = 'container';
  var Anchor171 = document.createElement('a');
  Anchor171.href= './Movie Pages/171.html';
  var Image171 = document.createElement('img');
  Image171.src = 'https://i.pinimg.com/736x/12/c6/99/12c6992772f2b69b39209991fe1edea1.jpg';
  Image171.alt = 'Venom';
  var Span171 = document.createElement('span');
  Span171.textContent = 'Venom';
  Anchor171.appendChild(Image171);
  Anchor171.appendChild(Span171);
  Container171.appendChild(Anchor171);
  recentElement.appendChild(Container171);

  var Container170 = document.createElement('div');
  Container170.id= "170";
  Container170.className = 'container';
  var Anchor170 = document.createElement('a');
  Anchor170.href= './Movie Pages/170.html';
  var Image170 = document.createElement('img');
  Image170.src = 'https://i.pinimg.com/736x/3d/09/fc/3d09fca4a1704b0a49d8dfae29fc3780.jpg';
  Image170.alt = 'Maidaan';
  var Span170 = document.createElement('span');
  Span170.textContent = 'Maidaan';
  Anchor170.appendChild(Image170);
  Anchor170.appendChild(Span170);
  Container170.appendChild(Anchor170);
  recentElement.appendChild(Container170);

  var Container169 = document.createElement('div');
  Container169.id= "169";
  Container169.className = 'container';
  var Anchor169 = document.createElement('a');
  Anchor169.href= './Movie Pages/169.html';
  var Image169 = document.createElement('img');
  Image169.src = 'https://saarangcinema.com/uploads/Bade-Miyan-Chote-Miyan.webp';
  Image169.alt = 'Bade Miyan Chhote Miyan';
  var Span169 = document.createElement('span');
  Span169.textContent = 'Bade Miyan Chhote Miyan';
  Anchor169.appendChild(Image169);
  Anchor169.appendChild(Span169);
  Container169.appendChild(Anchor169);
  recentElement.appendChild(Container169);

  var Container168 = document.createElement('div');
  Container168.id= "168";
  Container168.className = 'container';
  var Anchor168 = document.createElement('a');
  Anchor168.href= './Movie Pages/168.html';
  var Image168 = document.createElement('img');
  Image168.src = 'https://preview.redd.it/official-poster-for-godzilla-x-kong-the-new-empire-v0-c0mi78pv454c1.jpg?width=640&crop=smart&auto=webp&s=589db55535ca0647e1a09ce6e3f45f8d2a50cd9d';
  Image168.alt = 'Godzilla x Kong : The New Empire';
  var Span168 = document.createElement('span');
  Span168.textContent = 'Godzilla x Kong : The New Empire';
  Anchor168.appendChild(Image168);
  Anchor168.appendChild(Span168);
  Container168.appendChild(Anchor168);
  recentElement.appendChild(Container168);

  var Container167 = document.createElement('div');
  Container167.id= "167";
  Container167.className = 'container';
  var Anchor167 = document.createElement('a');
  Anchor167.href= './Movie Pages/167.html';
  var Image167 = document.createElement('img');
  Image167.src = 'https://m.media-amazon.com/images/M/MV5BZjM0ZDk5NDAtZDY2MC00ZWFmLWIxOTQtNTg2Y2RjMTRjZWFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg';
  Image167.alt = 'Godzilla vs Kong';
  var Span167 = document.createElement('span');
  Span167.textContent = 'Godzilla vs Kong';
  Anchor167.appendChild(Image167);
  Anchor167.appendChild(Span167);
  Container167.appendChild(Anchor167);
  recentElement.appendChild(Container167);

  var Container166 = document.createElement('div');
  Container166.id= "166";
  Container166.className = 'container';
  var Anchor166 = document.createElement('a');
  Anchor166.href= './Movie Pages/166.html';
  var Image166 = document.createElement('img');
  Image166.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwJsO5t09a3ofaB9Jw4UIIZT3LHMzE08nmH7wjI74pw&s';
  Image166.alt = 'Godzilla: King of the Monsters';
  var Span166 = document.createElement('span');
  Span166.textContent = 'Godzilla: King of the Monsters';
  Anchor166.appendChild(Image166);
  Anchor166.appendChild(Span166);
  Container166.appendChild(Anchor166);
  recentElement.appendChild(Container166);

  var Container165 = document.createElement('div');
  Container165.id= "165";
  Container165.className = 'container';
  var Anchor165 = document.createElement('a');
  Anchor165.href= './Movie Pages/165.html';
  var Image165 = document.createElement('img');
  Image165.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcG3fPbpcUI76ro_8vhSJdSdYeq4QLfEqtJiBmzKvBw&s';
  Image165.alt = 'Kong: Skull Island';
  var Span165 = document.createElement('span');
  Span165.textContent = 'Kong: Skull Island';
  Anchor165.appendChild(Image165);
  Anchor165.appendChild(Span165);
  Container165.appendChild(Anchor165);
  recentElement.appendChild(Container165);

  var Container164 = document.createElement('div');
  Container164.id= "164";
  Container164.className = 'container';
  var Anchor164 = document.createElement('a');
  Anchor164.href= './Movie Pages/164.html';
  var Image164 = document.createElement('img');
  Image164.src = 'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg';
  Image164.alt = 'Godzilla';
  var Span164 = document.createElement('span');
  Span164.textContent = 'Godzilla';
  Anchor164.appendChild(Image164);
  Anchor164.appendChild(Span164);
  Container164.appendChild(Anchor164);
  recentElement.appendChild(Container164);

  var Container163 = document.createElement('div');
  Container163.id= "163";
  Container163.className = 'container';
  var Anchor163 = document.createElement('a');
  Anchor163.href= './Movie Pages/163.html';
  var Image163 = document.createElement('img');
  Image163.src = 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/a3/cb9eb578f50c8b5cd67578539a551415_300x442.jpg?t=1710470995';
  Image163.alt = 'Crew';
  var Span163 = document.createElement('span');
  Span163.textContent = 'Crew';
  Anchor163.appendChild(Image163);
  Anchor163.appendChild(Span163);
  Container163.appendChild(Anchor163);
  recentElement.appendChild(Container163);

  var Container162 = document.createElement('div');
  Container162.id= "162";
  Container162.className = 'container';
  var Anchor162 = document.createElement('a');
  Anchor162.href= './Movie Pages/162.html';
  var Image162 = document.createElement('img');
  Image162.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtEC1_ZYP_GrsV4q3TTtH_88pTjqCbbUdb-wDzUgWHA&s';
  Image162.alt = 'Swatantra Veer Sawarkar';
  var Span162 = document.createElement('span');
  Span162.textContent = 'Swatantra Veer Sawarkar';
  Anchor162.appendChild(Image162);
  Anchor162.appendChild(Span162);
  Container162.appendChild(Anchor162);
  recentElement.appendChild(Container162);

  var Container161 = document.createElement('div');
  Container161.id= "161";
  Container161.className = 'container';
  var Anchor161 = document.createElement('a');
  Anchor161.href= './Movie Pages/161.html';
  var Image161 = document.createElement('img');
  Image161.src = 'https://img.republicworld.com/rimages/WhatsApp-Image-2024-01-15-1705313475616.webp?tr=w-600';
  Image161.alt = 'Bastar : The Naxal Story';
  var Span161 = document.createElement('span');
  Span161.textContent = 'Bastar : The Naxal Story';
  Anchor161.appendChild(Image161);
  Anchor161.appendChild(Span161);
  Container161.appendChild(Anchor161);
  recentElement.appendChild(Container161);

  var Container160 = document.createElement('div');
  Container160.id= "160";
  Container160.className = 'container';
  var Anchor160 = document.createElement('a');
  Anchor160.href= './Movie Pages/160.html';
  var Image160 = document.createElement('img');
  Image160.src = 'https://m.media-amazon.com/images/M/MV5BMTgzZTMwNjYtYWM3NC00Nzc4LTg5YzAtZGQ2MTE0MDc1NjY4XkEyXkFqcGdeQXVyNjUwMjYwMjE@._V1_.jpg';
  Image160.alt = 'Yodha';
  var Span160 = document.createElement('span');
  Span160.textContent = 'Yodha';
  Anchor160.appendChild(Image160);
  Anchor160.appendChild(Span160);
  Container160.appendChild(Anchor160);
  recentElement.appendChild(Container160);

  var Container159 = document.createElement('div');
  Container159.id= "159";
  Container159.className = 'container';
  var Anchor159 = document.createElement('a');
  Anchor159.href= './Movie Pages/159.html';
  var Image159 = document.createElement('img');
  Image159.src = 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-02/whatsapp_image_2024-02-20_at_10.06.40_am.jpeg?VersionId=TY_3kQPkqjwzxL2.uudeg7cPhdduCbZW&size=750:*';
  Image159.alt = 'Shaitaan';
  var Span159 = document.createElement('span');
  Span159.textContent = 'Shaitaan';
  Anchor159.appendChild(Image159);
  Anchor159.appendChild(Span159);
  Container159.appendChild(Anchor159);
  recentElement.appendChild(Container159);

  var Container158 = document.createElement('div');
  Container158.id= "158";
  Container158.className = 'container';
  var Anchor158 = document.createElement('a');
  Anchor158.href= './Movie Pages/158.html';
  var Image158 = document.createElement('img');
  Image158.src = 'https://preview.redd.it/another-new-dune-part-two-official-poster-v0-l2zxnp3s6fec1.jpeg?auto=webp&s=b95670d76758b6c6b8a66f418852bf07116e5a86';
  Image158.alt = 'Dune : Part Two';
  var Span158 = document.createElement('span');
  Span158.textContent = 'Dune : Part Two';
  Anchor158.appendChild(Image158);
  Anchor158.appendChild(Span158);
  Container158.appendChild(Anchor158);
  recentElement.appendChild(Container158);

  var Container157 = document.createElement('div');
  Container157.id= "157";
  Container157.className = 'container';
  var Anchor157 = document.createElement('a');
  Anchor157.href= './Movie Pages/157.html';
  var Image157 = document.createElement('img');
  Image157.src = 'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  Image157.alt = 'Dune : Part one';
  var Span157 = document.createElement('span');
  Span157.textContent = 'Dune : Part one';
  Anchor157.appendChild(Image157);
  Anchor157.appendChild(Span157);
  Container157.appendChild(Anchor157);
  recentElement.appendChild(Container157);

  var Container156 = document.createElement('div');
  Container156.id= "156";
  Container156.className = 'container';
  var Anchor156 = document.createElement('a');
  Anchor156.href= './Movie Pages/156.html';
  var Image156 = document.createElement('img');
  Image156.src = 'https://cdn.posteritati.com/posters/000/000/063/161/dune-md-web.jpg';
  Image156.alt = 'Dune';
  var Span156 = document.createElement('span');
  Span156.textContent = 'Dune';
  Anchor156.appendChild(Image156);
  Anchor156.appendChild(Span156);
  Container156.appendChild(Anchor156);
  recentElement.appendChild(Container156);

  var Container155 = document.createElement('div');
  Container155.id= "155";
  Container155.className = 'container';
  var Anchor155 = document.createElement('a');
  Anchor155.href= './Movie Pages/155.html';
  var Image155 = document.createElement('img');
  Image155.src = 'https://mellowplex.s3.amazonaws.com/uploads/item_media/asset/50219/Operation_Valentine_Article_2.jpeg';
  Image155.alt = 'Operation Valentine';
  var Span155 = document.createElement('span');
  Span155.textContent = 'Operation Valentine';
  Anchor155.appendChild(Image155);
  Anchor155.appendChild(Span155);
  Container155.appendChild(Anchor155);
  recentElement.appendChild(Container155);

  var Container154 = document.createElement('div');
  Container154.id= "154";
  Container154.className = 'container';
  var Anchor154 = document.createElement('a');
  Anchor154.href= './Movie Pages/154.html';
  var Image154 = document.createElement('img');
  Image154.src = 'https://external-preview.redd.it/character-posters-for-madame-web-v0-sypS1z9S5LwsSFrxwFfHE0SzFYYzHW2an31heU0jcZg.jpg?auto=webp&s=c4f47c5773ae05529dcd9a11372c994705940c83';
  Image154.alt = 'Madame Web';
  var Span154 = document.createElement('span');
  Span154.textContent = 'Madame Web';
  Anchor154.appendChild(Image154);
  Anchor154.appendChild(Span154);
  Container154.appendChild(Anchor154);
  recentElement.appendChild(Container154);

  var Container153 = document.createElement('div');
  Container153.id= "153";
  Container153.className = 'container';
  var Anchor153 = document.createElement('a');
  Anchor153.href= './Movie Pages/153.html';
  var Image153 = document.createElement('img');
  Image153.src = 'https://m.media-amazon.com/images/M/MV5BMGYzM2QxNWEtY2EwZC00OTE2LWExZDEtNjQ0NDAyMjYzNGJlXkEyXkFqcGdeQXVyMTY1MjAwNDU0._V1_FMjpg_UX1000_.jpg';
  Image153.alt = 'Article 370';
  var Span153 = document.createElement('span');
  Span153.textContent = 'Article 370';
  Anchor153.appendChild(Image153);
  Anchor153.appendChild(Span153);
  Container153.appendChild(Anchor153);
  recentElement.appendChild(Container153);

  var Container152 = document.createElement('div');
  Container152.id= "152";
  Container152.className = 'container';
  var Anchor152 = document.createElement('a');
  Anchor152.href= './Movie Pages/152.html';
  var Image152 = document.createElement('img');
  Image152.src = 'https://m.media-amazon.com/images/M/MV5BOGMzNmUwMGEtYmJkYS00MjgyLWIyNWMtNjBlNTExNGEwZmQwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_UY1200_CR165,0,630,1200_AL_.jpg';
  Image152.alt = 'Crakk';
  var Span152 = document.createElement('span');
  Span152.textContent = 'Crakk';
  Anchor152.appendChild(Image152);
  Anchor152.appendChild(Span152);
  Container152.appendChild(Anchor152);
  recentElement.appendChild(Container152);

  var Container151 = document.createElement('div');
  Container151.id= "151";
  Container151.className = 'container';
  var Anchor151 = document.createElement('a');
  Anchor151.href= './Movie Pages/151.html';
  var Image151 = document.createElement('img');
  Image151.src = 'https://english.idreampost.com/wp-content/uploads/2024/02/Teri-Baaton-Mein-Aisa-Uljha-Jiya-poster-card.jpg';
  Image151.alt = 'Teri Baaton Mein Esa Uljha Jiya';
  var Span151 = document.createElement('span');
  Span151.textContent = 'Teri Baaton Mein Esa Uljha Jiya';
  Anchor151.appendChild(Image151);
  Anchor151.appendChild(Span151);
  Container151.appendChild(Anchor151);
  recentElement.appendChild(Container151);

  var Container150 = document.createElement('div');
  Container150.id= "150";
  Container150.className = 'container';
  var Anchor150 = document.createElement('a');
  Anchor150.href= './Movie Pages/150.html';
  var Image150 = document.createElement('img');
  Image150.src = 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-12/f886dmbwaaai9lb.jpeg?VersionId=ZJ49rNKj_oIsMZ8Z6wnAFNXqcrr0X_lB';
  Image150.alt = 'Indian Police Force';
  var Span150 = document.createElement('span');
  Span150.textContent = 'Indian Police Force';
  Anchor150.appendChild(Image150);
  Anchor150.appendChild(Span150);
  Container150.appendChild(Anchor150);
  recentElement.appendChild(Container150);

  var Container149 = document.createElement('div');
  Container149.id= "149";
  Container149.className = 'container';
  var Anchor149 = document.createElement('a');
  Anchor149.href= './Movie Pages/149.html';
  var Image149 = document.createElement('img');
  Image149.src = 'https://pbs.twimg.com/media/Fzj-XnvaMAAVn7v?format=jpg&name=4096x4096';
  Image149.alt = 'Fighter';
  var Span149 = document.createElement('span');
  Span149.textContent = 'Fighter';
  Anchor149.appendChild(Image149);
  Anchor149.appendChild(Span149);
  Container149.appendChild(Anchor149);
  recentElement.appendChild(Container149);
  
  var Container148 = document.createElement('div');
  Container148.id= "148";
  Container148.className = 'container';
  var Anchor148 = document.createElement('a');
  Anchor148.href= './Movie Pages/148.html';
  var Image148 = document.createElement('img');
  Image148.src = 'https://posterspy.com/wp-content/uploads/2022/05/GOTG-Holiday-Special-Poster_MS_Final_72dpi.png';
  Image148.alt = 'Guardians of the Galaxy Holiday Special';
  var Span148 = document.createElement('span');
  Span148.textContent = 'Guardians of the Galaxy Holiday Special';
  Anchor148.appendChild(Image148);
  Anchor148.appendChild(Span148);
  Container148.appendChild(Anchor148);
  recentElement.appendChild(Container148);

  var Container147 = document.createElement('div');
  Container147.id= "147";
  Container147.className = 'container';
  var Anchor147 = document.createElement('a');
  Anchor147.href= './Movie Pages/147.html';
  var Image147 = document.createElement('img');
  Image147.src = 'https://www.themoviedb.org/t/p/original/udCVr1O19nLHQnEWbwOvgaJdAx9.jpg';
  Image147.alt = 'Werewolf By Night';
  var Span147 = document.createElement('span');
  Span147.textContent = 'Werewolf By Night';
  Anchor147.appendChild(Image147);
  Anchor147.appendChild(Span147);
  Container147.appendChild(Anchor147);
  recentElement.appendChild(Container147);

  var Container146 = document.createElement('div');
  Container146.id= "146";
  Container146.className = 'container';
  var Anchor146 = document.createElement('a');
  Anchor146.href= './Movie Pages/146.html';
  var Image146 = document.createElement('img');
  Image146.src = 'https://i.redd.it/5340uy7qfyr81.jpg';
  Image146.alt = 'Spider-Man Across the Spider-verse';
  var Span146 = document.createElement('span');
  Span146.textContent = 'Spider-Man Across the Spider-verse';
  Anchor146.appendChild(Image146);
  Anchor146.appendChild(Span146);
  Container146.appendChild(Anchor146);
  recentElement.appendChild(Container146);

  var Container145 = document.createElement('div');
  Container145.id= "145";
  Container145.className = 'container';
  var Anchor145 = document.createElement('a');
  Anchor145.href= './Movie Pages/145.html';
  var Image145 = document.createElement('img');
  Image145.src = 'https://pbs.twimg.com/media/Fv8Lf9RWwAEsv-u?format=jpg&name=4096x4096';
  Image145.alt = 'Guardians of the Galaxy Vol. 3';
  var Span145 = document.createElement('span');
  Span145.textContent = 'Guardians of the Galaxy Vol. 3';
  Anchor145.appendChild(Image145);
  Anchor145.appendChild(Span145);
  Container145.appendChild(Anchor145);
  recentElement.appendChild(Container145);

  var Container144 = document.createElement('div');
  Container144.id= "144";
  Container144.className = 'container';
  var Anchor144 = document.createElement('a');
  Anchor144.href= './Movie Pages/144.html';
  var Image144 = document.createElement('img');
  Image144.src = 'https://cdna.artstation.com/p/assets/images/images/059/197/190/large/vindz-henchman-bf919a83-511f-460f-8bdd-2626eeb3c134.jpg?1675857236';
  Image144.alt = 'Ant-Man and the Wasp Quantumania';
  var Span144 = document.createElement('span');
  Span144.textContent = 'Ant-Man and the Wasp Quantumania';
  Anchor144.appendChild(Image144);
  Anchor144.appendChild(Span144);
  Container144.appendChild(Anchor144);
  recentElement.appendChild(Container144);

  var Container143 = document.createElement('div');
  Container143.id= "143";
  Container143.className = 'container';
  var Anchor143 = document.createElement('a');
  Anchor143.href= './Movie Pages/143.html';
  var Image143 = document.createElement('img');
  Image143.src = 'https://i.redd.it/68ka12lvrqc91.jpg';
  Image143.alt = 'Black Panther: Wakanda Forever';
  var Span143 = document.createElement('span');
  Span143.textContent = 'Black Panther: Wakanda Forever';
  Anchor143.appendChild(Image143);
  Anchor143.appendChild(Span143);
  Container143.appendChild(Anchor143);
  recentElement.appendChild(Container143);

  var Container142 = document.createElement('div');
  Container142.id= "142";
  Container142.className = 'container';
  var Anchor142 = document.createElement('a');
  Anchor142.href= './Movie Pages/142.html';
  var Image142 = document.createElement('img');
  Image142.src = 'https://i.etsystatic.com/37166133/r/il/0f5b32/4226342298/il_fullxfull.4226342298_t0py.jpg';
  Image142.alt = 'Thor Love and Thunder';
  var Span142 = document.createElement('span');
  Span142.textContent = 'Thor Love and Thunder';
  Anchor142.appendChild(Image142);
  Anchor142.appendChild(Span142);
  Container142.appendChild(Anchor142);
  recentElement.appendChild(Container142);

  var Container141 = document.createElement('div');
  Container141.id= "141";
  Container141.className = 'container';
  var Anchor141 = document.createElement('a');
  Anchor141.href= './Movie Pages/141.html';
  var Image141 = document.createElement('img');
  Image141.src = 'https://hedwig-cf.netmarble.com/forum-common/mherosgb/futurefight_en/thumbnail/48331ec4b81f4205a9d95918f08395b4_1644822375546_d.jpg';
  Image141.alt = 'Dr. Strange in the Multiverse of Madness';
  var Span141 = document.createElement('span');
  Span141.textContent = 'Dr. Strange in the Multiverse of Madness';
  Anchor141.appendChild(Image141);
  Anchor141.appendChild(Span141);
  Container141.appendChild(Anchor141);
  recentElement.appendChild(Container141);

  var Container140 = document.createElement('div');
  Container140.id= "140";
  Container140.className = 'container';
  var Anchor140 = document.createElement('a');
  Anchor140.href= './Movie Pages/140.html';
  var Image140 = document.createElement('img');
  Image140.src = 'https://m.media-amazon.com/images/I/81KWTMl0JUL._AC_UF1000,1000_QL80_.jpg';
  Image140.alt = 'Spider-Man No Way Home';
  var Span140 = document.createElement('span');
  Span140.textContent = 'Spider-Man No Way Home';
  Anchor140.appendChild(Image140);
  Anchor140.appendChild(Span140);
  Container140.appendChild(Anchor140);
  recentElement.appendChild(Container140);

  var Container139 = document.createElement('div');
  Container139.id= "139";
  Container139.className = 'container';
  var Anchor139 = document.createElement('a');
  Anchor139.href= './Movie Pages/139.html';
  var Image139 = document.createElement('img');
  Image139.src = 'https://myhotposters.com/cdn/shop/products/mL5735_1024x1024.jpg?v=1636403352';
  Image139.alt = 'Eternals';
  var Span139 = document.createElement('span');
  Span139.textContent = 'Eternals';
  Anchor139.appendChild(Image139);
  Anchor139.appendChild(Span139);
  Container139.appendChild(Anchor139);
  recentElement.appendChild(Container139);

  var Container138 = document.createElement('div');
  Container138.id= "138";
  Container138.className = 'container';
  var Anchor138 = document.createElement('a');
  Anchor138.href= './Movie Pages/138.html';
  var Image138 = document.createElement('img');
  Image138.src = 'https://posterspy.com/wp-content/uploads/2021/08/shang-chi-2.jpg';
  Image138.alt = 'Shang Chi and the Legends of Ten Rings';
  var Span138 = document.createElement('span');
  Span138.textContent = 'Shang Chi and the Legends of Ten Rings';
  Anchor138.appendChild(Image138);
  Anchor138.appendChild(Span138);
  Container138.appendChild(Anchor138);
  recentElement.appendChild(Container138);

  var Container137 = document.createElement('div');
  Container137.id= "137";
  Container137.className = 'container';
  var Anchor137 = document.createElement('a');
  Anchor137.href= './Movie Pages/137.html';
  var Image137 = document.createElement('img');
  Image137.src = 'https://image.over-blog.com/5TOo9ZUIqE1HgcX8EkU-hg5npf4=/filters:no_upscale()/image%2F1837269%2F20210103%2Fob_b2022b_black-widow-3-1.jpg';
  Image137.alt = 'Black Widow';
  var Span137 = document.createElement('span');
  Span137.textContent = 'Black Widow';
  Anchor137.appendChild(Image137);
  Anchor137.appendChild(Span137);
  Container137.appendChild(Anchor137);
  recentElement.appendChild(Container137);

  var Container136 = document.createElement('div');
  Container136.id= "136";
  Container136.className = 'container';
  var Anchor136 = document.createElement('a');
  Anchor136.href= './Movie Pages/136.html';
  var Image136 = document.createElement('img');
  Image136.src = 'https://i.redd.it/xh45hyv7vy631.jpg';
  Image136.alt = 'Spider-Man Far From Home';
  var Span136 = document.createElement('span');
  Span136.textContent = 'Spider-Man Far From Home';
  Anchor136.appendChild(Image136);
  Anchor136.appendChild(Span136);
  Container136.appendChild(Anchor136);
  recentElement.appendChild(Container136);

  var Container135 = document.createElement('div');
  Container135.id= "135";
  Container135.className = 'container';
  var Anchor135 = document.createElement('a');
  Anchor135.href= './Movie Pages/135.html';
  var Image135 = document.createElement('img');
  Image135.src = 'https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90';
  Image135.alt = 'Avengers Endgame';
  var Span135 = document.createElement('span');
  Span135.textContent = 'Avengers Endgame';
  Anchor135.appendChild(Image135);
  Anchor135.appendChild(Span135);
  Container135.appendChild(Anchor135);
  recentElement.appendChild(Container135);

  var Container134 = document.createElement('div');
  Container134.id= "134";
  Container134.className = 'container';
  var Anchor134 = document.createElement('a');
  Anchor134.href= './Movie Pages/134.html';
  var Image134 = document.createElement('img');
  Image134.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dctmaca-c8d960ef-e836-4aa3-8ad8-47789dd3136d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3NGIzNmYwLTc3NzEtNDE4OC1iMzgyLWFkZTJkNDk1NTQ0YVwvZGN0bWFjYS1jOGQ5NjBlZi1lODM2LTRhYTMtOGFkOC00Nzc4OWRkMzEzNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W64jpwFONlTxUNrhRbIW4gbqB4rghatAlJQAXXBMMh0';
  Image134.alt = 'Captain Marvel';
  var Span134 = document.createElement('span');
  Span134.textContent = 'Captain Marvel';
  Anchor134.appendChild(Image134);
  Anchor134.appendChild(Span134);
  Container134.appendChild(Anchor134);
  recentElement.appendChild(Container134);

  var Container133 = document.createElement('div');
  Container133.id= "133";
  Container133.className = 'container';
  var Anchor133 = document.createElement('a');
  Anchor133.href= './Movie Pages/133.html';
  var Image133 = document.createElement('img');
  Image133.src = 'https://wallpapers.com/images/hd/spider-man-into-the-spider-verse-cool-poster-wnb6jid6d3rhlanc.jpg';
  Image133.alt = 'Spider-Man into the Spider-Verse';
  var Span133 = document.createElement('span');
  Span133.textContent = 'Spider-Man into the Spider-Verse';
  Anchor133.appendChild(Image133);
  Anchor133.appendChild(Span133);
  Container133.appendChild(Anchor133);
  recentElement.appendChild(Container133);

  var Container132 = document.createElement('div');
  Container132.id= "132";
  Container132.className = 'container';
  var Anchor132 = document.createElement('a');
  Anchor132.href= './Movie Pages/132.html';
  var Image132 = document.createElement('img');
  Image132.src = 'https://collider.com/wp-content/uploads/2018/06/ant-man-and-the-wasp-imax-poster.jpg';
  Image132.alt = 'Ant-Man and the Wasp';
  var Span132 = document.createElement('span');
  Span132.textContent = 'Ant-Man and the Wasp';
  Anchor132.appendChild(Image132);
  Anchor132.appendChild(Span132);
  Container132.appendChild(Anchor132);
  recentElement.appendChild(Container132);

  var Container131 = document.createElement('div');
  Container131.id= "131";
  Container131.className = 'container';
  var Anchor131 = document.createElement('a');
  Anchor131.href= './Movie Pages/131.html';
  var Image131 = document.createElement('img');
  Image131.src = 'https://i.etsystatic.com/35681979/r/il/cf791c/3900202876/il_570xN.3900202876_1cw9.jpg';
  Image131.alt = 'Avengers Infinity War';
  var Span131 = document.createElement('span');
  Span131.textContent = 'Avengers Infinity War';
  Anchor131.appendChild(Image131);
  Anchor131.appendChild(Span131);
  Container131.appendChild(Anchor131);
  recentElement.appendChild(Container131);

  var Container130 = document.createElement('div');
  Container130.id= "130";
  Container130.className = 'container';
  var Anchor130 = document.createElement('a');
  Anchor130.href= './Movie Pages/130.html';
  var Image130 = document.createElement('img');
  Image130.src = 'https://rukminim2.flixcart.com/image/850/1000/ji6b2q80/poster/u/x/m/medium-mv3315-black-panther-7-original-imaf6yyjcuraxhch.jpeg?q=20';
  Image130.alt = 'Black Panther';
  var Span130 = document.createElement('span');
  Span130.textContent = 'Black Panther';
  Anchor130.appendChild(Image130);
  Anchor130.appendChild(Span130);
  Container130.appendChild(Anchor130);
  recentElement.appendChild(Container130);

  var Container129 = document.createElement('div');
  Container129.id= "129";
  Container129.className = 'container';
  var Anchor129 = document.createElement('a');
  Anchor129.href= './Movie Pages/129.html';
  var Image129 = document.createElement('img');
  Image129.src = 'https://alternativemovieposters.com/wp-content/uploads/2022/05/JohnDunn_Ragnarok.jpg';
  Image129.alt = 'Thor Ragnarok';
  var Span129 = document.createElement('span');
  Span129.textContent = 'Thor Ragnarok';
  Anchor129.appendChild(Image129);
  Anchor129.appendChild(Span129);
  Container129.appendChild(Anchor129);
  recentElement.appendChild(Container129);

  var Container128 = document.createElement('div');
  Container128.id= "128";
  Container128.className = 'container';
  var Anchor128 = document.createElement('a');
  Anchor128.href= './Movie Pages/128.html';
  var Image128 = document.createElement('img');
  Image128.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d718f854430629.595b64116b15c.jpg';
  Image128.alt = 'Spider-Man Homecoming';
  var Span128 = document.createElement('span');
  Span128.textContent = 'Spider-Man Homecoming';
  Anchor128.appendChild(Image128);
  Anchor128.appendChild(Span128);
  Container128.appendChild(Anchor128);
  recentElement.appendChild(Container128);

  var Container127 = document.createElement('div');
  Container127.id= "127";
  Container127.className = 'container';
  var Anchor127 = document.createElement('a');
  Anchor127.href= './Movie Pages/127.html';
  var Image127 = document.createElement('img');
  Image127.src = 'https://i.etsystatic.com/12729518/r/il/a1129c/1974320142/il_fullxfull.1974320142_s7jp.jpg';
  Image127.alt = 'Guardians of The Galaxy Vol. 2';
  var Span127 = document.createElement('span');
  Span127.textContent = 'Guardians of The Galaxy Vol. 2';
  Anchor127.appendChild(Image127);
  Anchor127.appendChild(Span127);
  Container127.appendChild(Anchor127);
  recentElement.appendChild(Container127);

  var Container126 = document.createElement('div');
  Container126.id= "126";
  Container126.className = 'container';
  var Anchor126 = document.createElement('a');
  Anchor126.href= './Movie Pages/126.html';
  var Image126 = document.createElement('img');
  Image126.src = 'https://i.pinimg.com/originals/bf/2e/91/bf2e91ff2203add4e60dd8b913135698.jpg';
  Image126.alt = 'Doctor Strange';
  var Span126 = document.createElement('span');
  Span126.textContent = 'Doctor Strange';
  Anchor126.appendChild(Image126);
  Anchor126.appendChild(Span126);
  Container126.appendChild(Anchor126);
  recentElement.appendChild(Container126);

  var Container125 = document.createElement('div');
  Container125.id= "125";
  Container125.className = 'container';
  var Anchor125 = document.createElement('a');
  Anchor125.href= './Movie Pages/125.html';
  var Image125 = document.createElement('img');
  Image125.src = 'https://www.themoviedb.org/t/p/original/iLWcIeNzgvCT3i19dds6EIIjWZS.jpg';
  Image125.alt = 'Captain America Civil War';
  var Span125 = document.createElement('span');
  Span125.textContent = 'Captain America Civil War';
  Anchor125.appendChild(Image125);
  Anchor125.appendChild(Span125);
  Container125.appendChild(Anchor125);
  recentElement.appendChild(Container125);

  var Container124 = document.createElement('div');
  Container124.id= "124";
  Container124.className = 'container';
  var Anchor124 = document.createElement('a');
  Anchor124.href= './Movie Pages/124.html';
  var Image124 = document.createElement('img');
  Image124.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/eb63f426694999.563590f04945e.jpg';
  Image124.alt = 'Ant-Man';
  var Span124 = document.createElement('span');
  Span124.textContent = 'Ant-Man';
  Anchor124.appendChild(Image124);
  Anchor124.appendChild(Span124);
  Container124.appendChild(Anchor124);
  recentElement.appendChild(Container124);

  var Container123 = document.createElement('div');
  Container123.id= "123";
  Container123.className = 'container';
  var Anchor123 = document.createElement('a');
  Anchor123.href= './Movie Pages/123.html';
  var Image123 = document.createElement('img');
  Image123.src = 'https://rukminim2.flixcart.com/image/850/1000/k4ehnrk0/poster/c/n/r/medium-the-avengers-age-of-ultron-captain-america-black-widow-original-imafn4shuqq5z9hc.jpeg?q=90';
  Image123.alt = 'Avengers Age of Ultron';
  var Span123 = document.createElement('span');
  Span123.textContent = 'Avengers Age of Ultron';
  Anchor123.appendChild(Image123);
  Anchor123.appendChild(Span123);
  Container123.appendChild(Anchor123);
  recentElement.appendChild(Container123);

  var Container122 = document.createElement('div');
  Container122.id= "122";
  Container122.className = 'container';
  var Anchor122 = document.createElement('a');
  Anchor122.href= './Movie Pages/122.html';
  var Image122 = document.createElement('img');
  Image122.src = 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2014/07/GOTG_Bus-Shelter_Ronan_v1_lg.jpg';
  Image122.alt = 'Guardians of the Galaxy';
  var Span122 = document.createElement('span');
  Span122.textContent = 'Guardians of the Galaxy';
  Anchor122.appendChild(Image122);
  Anchor122.appendChild(Span122);
  Container122.appendChild(Anchor122);
  recentElement.appendChild(Container122);

  var Container121 = document.createElement('div');
  Container121.id= "121";
  Container121.className = 'container';
  var Anchor121 = document.createElement('a');
  Anchor121.href= './Movie Pages/121.html';
  var Image121 = document.createElement('img');
  Image121.src = 'https://posterspy.com/wp-content/uploads/2022/06/THE-AMAZING-SPIDERMAN.jpg';
  Image121.alt = 'The Amazing Spider-Man 2';
  var Span121 = document.createElement('span');
  Span121.textContent = 'The Amazing Spider-Man 2';
  Anchor121.appendChild(Image121);
  Anchor121.appendChild(Span121);
  Container121.appendChild(Anchor121);
  recentElement.appendChild(Container121);

  var Container120 = document.createElement('div');
  Container120.id= "120";
  Container120.className = 'container';
  var Anchor120 = document.createElement('a');
  Anchor120.href= './Movie Pages/120.html';
  var Image120 = document.createElement('img');
  Image120.src = 'https://i.pinimg.com/originals/c7/79/20/c77920e3bf2549cc27858cf0e57771f1.jpg';
  Image120.alt = 'Captain America The Winter Soldier';
  var Span120 = document.createElement('span');
  Span120.textContent = 'Captain America The Winter Soldier';
  Anchor120.appendChild(Image120);
  Anchor120.appendChild(Span120);
  Container120.appendChild(Anchor120);
  recentElement.appendChild(Container120);

  var Container119 = document.createElement('div');
  Container119.id= "119";
  Container119.className = 'container';
  var Anchor119 = document.createElement('a');
  Anchor119.href= './Movie Pages/119.html';
  var Image119 = document.createElement('img');
  Image119.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6fbkuh-86805423-1675-442e-9678-5d1b20c0381f.png/v1/fill/w_1024,h_1326/thor__the_dark_world___poster_ii_by_mrsteiners_d6fbkuh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyNiIsInBhdGgiOiJcL2ZcL2M1NjZiMzYwLWRjYzAtNGY4ZC04MTU0LTA1ZTgxMjNkMGQzNlwvZDZmYmt1aC04NjgwNTQyMy0xNjc1LTQ0MmUtOTY3OC01ZDFiMjBjMDM4MWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J2XG4GAcEbHFywbZ0kkYzZEXlDrnHt7-G3GHpvsgHyA';
  Image119.alt = 'Thor The Dark World';
  var Span119 = document.createElement('span');
  Span119.textContent = 'Thor The Dark World';
  Anchor119.appendChild(Image119);
  Anchor119.appendChild(Span119);
  Container119.appendChild(Anchor119);
  recentElement.appendChild(Container119);

  var Container118 = document.createElement('div');
  Container118.id= "118";
  Container118.className = 'container';
  var Anchor118 = document.createElement('a');
  Anchor118.href= './Movie Pages/118.html';
  var Image118 = document.createElement('img');
  Image118.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42895cc9-92d1-4cbe-8753-4bae740457ec/d5wmyho-87e711d4-1148-4034-a661-965a877a63e3.png/v1/fill/w_1024,h_1420,q_80,strp/iron_man_3__fan_made__movie_poster_v8_by_diamonddesignhd_d5wmyho-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyODk1Y2M5LTkyZDEtNGNiZS04NzUzLTRiYWU3NDA0NTdlY1wvZDV3bXloby04N2U3MTFkNC0xMTQ4LTQwMzQtYTY2MS05NjVhODc3YTYzZTMucG5nIiwiaGVpZ2h0IjoiPD0xNDIwIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDI4OTVjYzktOTJkMS00Y2JlLTg3NTMtNGJhZTc0MDQ1N2VjXC9kaWFtb25kZGVzaWduaGQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.Ido-luYQ-hXj8Bp3I0sJL215UsXTKqUNQYqsrcKm7-0';
  Image118.alt = 'Iron Man 3';
  var Span118 = document.createElement('span');
  Span118.textContent = 'Iron Man 3';
  Anchor118.appendChild(Image118);
  Anchor118.appendChild(Span118);
  Container118.appendChild(Anchor118);
  recentElement.appendChild(Container118);

  var Container117 = document.createElement('div');
  Container117.id= "117";
  Container117.className = 'container';
  var Anchor117 = document.createElement('a');
  Anchor117.href= './Movie Pages/117.html';
  var Image117 = document.createElement('img');
  Image117.src = 'https://img.wonderhowto.com/img/19/28/63472258645915/0/avengers-2012-poster-and-fan-art.w1456.jpg';
  Image117.alt = 'The Avengers';
  var Span117 = document.createElement('span');
  Span117.textContent = 'The Avengers';
  Anchor117.appendChild(Image117);
  Anchor117.appendChild(Span117);
  Container117.appendChild(Anchor117);
  recentElement.appendChild(Container117);

  var Container116 = document.createElement('div');
  Container116.id= "116";
  Container116.className = 'container';
  var Anchor116 = document.createElement('a');
  Anchor116.href= './Movie Pages/116.html';
  var Image116 = document.createElement('img');
  Image116.src = 'https://i.pinimg.com/originals/6d/26/08/6d2608f2fd20562f61a443d92929e042.jpg';
  Image116.alt = 'The Amazing Spider-Man';
  var Span116 = document.createElement('span');
  Span116.textContent = 'The Amazing Spider-Man';
  Anchor116.appendChild(Image116);
  Anchor116.appendChild(Span116);
  Container116.appendChild(Anchor116);
  recentElement.appendChild(Container116);

  var Container115 = document.createElement('div');
  Container115.id= "115";
  Container115.className = 'container';
  var Anchor115 = document.createElement('a');
  Anchor115.href= './Movie Pages/115.html';
  var Image115 = document.createElement('img');
  Image115.src = 'https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg';
  Image115.alt = 'Captain America The First Avenger';
  var Span115 = document.createElement('span');
  Span115.textContent = 'Captain America The First Avenger';
  Anchor115.appendChild(Image115);
  Anchor115.appendChild(Span115);
  Container115.appendChild(Anchor115);
  recentElement.appendChild(Container115);

  var Container114 = document.createElement('div');
  Container114.id= "114";
  Container114.className = 'container';
  var Anchor114 = document.createElement('a');
  Anchor114.href= './Movie Pages/114.html';
  var Image114 = document.createElement('img');
  Image114.src = 'https://i.pinimg.com/736x/ba/f9/b9/baf9b9b65668a5d4bac2ce68aeb5fb7d.jpg';
  Image114.alt = 'Thor';
  var Span114 = document.createElement('span');
  Span114.textContent = 'Thor';
  Anchor114.appendChild(Image114);
  Anchor114.appendChild(Span114);
  Container114.appendChild(Anchor114);
  recentElement.appendChild(Container114);
  
  var Container113 = document.createElement('div');
  Container113.id= "113";
  Container113.className = 'container';
  var Anchor113 = document.createElement('a');
  Anchor113.href= './Movie Pages/113.html';
  var Image113 = document.createElement('img');
  Image113.src = 'https://i.pinimg.com/originals/1f/e9/88/1fe9882091f41910fae12f881c6de592.jpg';
  Image113.alt = 'Iron Man 2';
  var Span113 = document.createElement('span');
  Span113.textContent = 'Iron Man 2';
  Anchor113.appendChild(Image113);
  Anchor113.appendChild(Span113);
  Container113.appendChild(Anchor113);
  recentElement.appendChild(Container113);

  var Container112 = document.createElement('div');
  Container112.id= "112";
  Container112.className = 'container';
  var Anchor112 = document.createElement('a');
  Anchor112.href= './Movie Pages/112.html';
  var Image112 = document.createElement('img');
  Image112.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/c9cc26104258611.5f5f69fcc5dce.jpg';
  Image112.alt = 'The Incredible Hulk';
  var Span112 = document.createElement('span');
  Span112.textContent = 'The Incredible Hulk';
  Anchor112.appendChild(Image112);
  Anchor112.appendChild(Span112);
  Container112.appendChild(Anchor112);
  recentElement.appendChild(Container112);

  var Container111 = document.createElement('div');
  Container111.id= "111";
  Container111.className = 'container';
  var Anchor111 = document.createElement('a');
  Anchor111.href= './Movie Pages/111.html';
  var Image111 = document.createElement('img');
  Image111.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/4627fe72571409.5bebed617acbb.jpg';
  Image111.alt = 'Iron Man';
  var Span111 = document.createElement('span');
  Span111.textContent = 'Iron Man';
  Anchor111.appendChild(Image111);
  Anchor111.appendChild(Span111);
  Container111.appendChild(Anchor111);
  recentElement.appendChild(Container111);

  var Container110 = document.createElement('div');
  Container110.id= "110";
  Container110.className = 'container';
  var Anchor110 = document.createElement('a');
  Anchor110.href= './Movie Pages/110.html';
  var Image110 = document.createElement('img');
  Image110.src = 'https://play-lh.googleusercontent.com/nOvXZXRd6f0d51eSaTnwQccS6_QguJv92MgwaUvIC8F0OeZI1NutnZyUAkBTkIZi_UL69g=w240-h480-rw';
  Image110.alt = 'Spider-Man 3';
  var Span110 = document.createElement('span');
  Span110.textContent = 'Spider-Man 3';
  Anchor110.appendChild(Image110);
  Anchor110.appendChild(Span110);
  Container110.appendChild(Anchor110);
  recentElement.appendChild(Container110);

  var Container109 = document.createElement('div');
  Container109.id= "109";
  Container109.className = 'container';
  var Anchor109 = document.createElement('a');
  Anchor109.href= './Movie Pages/109.html';
  var Image109 = document.createElement('img');
  Image109.src = 'https://www.themoviedb.org/t/p/original/sH8hK05NQSaiq7riNl2lLlfmRiV.jpg';
  Image109.alt = 'Spider-Man 2';
  var Span109 = document.createElement('span');
  Span109.textContent = 'Spider-Man 2';
  Anchor109.appendChild(Image109);
  Anchor109.appendChild(Span109);
  Container109.appendChild(Anchor109);
  recentElement.appendChild(Container109);

  var Container108 = document.createElement('div');
  Container108.id= "108";
  Container108.className = 'container';
  var Anchor108 = document.createElement('a');
  Anchor108.href= './Movie Pages/108.html';
  var Image108 = document.createElement('img');
  Image108.src = 'https://www.themoviedb.org/t/p/original/kjdJntyBeEvqm9w97QGBdxPptzj.jpg';
  Image108.alt = 'Spider-Man';
  var Span108 = document.createElement('span');
  Span108.textContent = 'Spider-Man';
  Anchor108.appendChild(Image108);
  Anchor108.appendChild(Span108);
  Container108.appendChild(Anchor108);
  recentElement.appendChild(Container108);

  var Container107 = document.createElement('div');
  Container107.id= "107";
  Container107.className = 'container';
  var Anchor107 = document.createElement('a');
  Anchor107.href= './Movie Pages/107.html';
  var Image107 = document.createElement('img');
  Image107.src = 'https://cdn.europosters.eu/image/750/posters/ben-10-omniverse-i14157.jpg';
  Image107.alt = 'Ben 10 Omniverse';
  var Span107 = document.createElement('span');
  Span107.textContent = 'Ben 10 Omniverse';
  Anchor107.appendChild(Image107);
  Anchor107.appendChild(Span107);
  Container107.appendChild(Anchor107);
  recentElement.appendChild(Container107);

  var Container106 = document.createElement('div');
  Container106.id= "106";
  Container106.className = 'container';
  var Anchor106 = document.createElement('a');
  Anchor106.href= './Movie Pages/106.html';
  var Image106 = document.createElement('img');
  Image106.src = 'https://m.media-amazon.com/images/M/MV5BNzgxYjcwNDUtZTcxZS00NmIyLWI3OTAtNTQ3NzZjM2RkMTFkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg';
  Image106.alt = 'Ben 10 Ultimate Aliens';
  var Span106 = document.createElement('span');
  Span106.textContent = 'Ben 10 Ultimate Aliens';
  Anchor106.appendChild(Image106);
  Anchor106.appendChild(Span106);
  Container106.appendChild(Anchor106);
  recentElement.appendChild(Container106);

  var Container105 = document.createElement('div');
  Container105.id= "105";
  Container105.className = 'container';
  var Anchor105 = document.createElement('a');
  Anchor105.href= './Movie Pages/105.html';
  var Image105 = document.createElement('img');
  Image105.src = 'https://xl.movieposterdb.com/10_02/2009/1327701/xl_1327701_2f0e9a4b.jpg';
  Image105.alt = 'Ben 10 Alien Swarm';
  var Span105 = document.createElement('span');
  Span105.textContent = 'Ben 10 Alien Swarm';
  Anchor105.appendChild(Image105);
  Anchor105.appendChild(Span105);
  Container105.appendChild(Anchor105);
  recentElement.appendChild(Container105);

  var Container104 = document.createElement('div');
  Container104.id= "104";
  Container104.className = 'container';
  var Anchor104 = document.createElement('a');
  Anchor104.href= './Movie Pages/104.html';
  var Image104 = document.createElement('img');
  Image104.src = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ZhAoGTvqL._AC_UF894,1000_QL80_.jpg';
  Image104.alt = 'Ben 10 Alien Force';
  var Span104 = document.createElement('span');
  Span104.textContent = 'Ben 10: Alien Force';
  Anchor104.appendChild(Image104);
  Anchor104.appendChild(Span104);
  Container104.appendChild(Anchor104);
  recentElement.appendChild(Container104);

  var Container103 = document.createElement('div');
  Container103.id= "103";
  Container103.className = 'container';
  var Anchor103 = document.createElement('a');
  Anchor103.href= './Movie Pages/103.html';
  var Image103 = document.createElement('img');
  Image103.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Ben_10_race_against_time_poster.jpg/220px-Ben_10_race_against_time_poster.jpg';
  Image103.alt = 'Ben 10 Race Against Time';
  var Span103 = document.createElement('span');
  Span103.textContent = 'Ben 10 Race Against Time';
  Anchor103.appendChild(Image103);
  Anchor103.appendChild(Span103);
  Container103.appendChild(Anchor103);
  recentElement.appendChild(Container103);

  var Container102 = document.createElement('div');
  Container102.id= "102";
  Container102.className = 'container';
  var Anchor102 = document.createElement('a');
  Anchor102.href= './Movie Pages/102.html';
  var Image102 = document.createElement('img');
  Image102.src = 'https://pics.filmaffinity.com/Ben_10_Destroy_All_Aliens_TV-837070270-large.jpg';
  Image102.alt = 'Ben 10 Destroy All Aliens';
  var Span102 = document.createElement('span');
  Span102.textContent = 'Ben 10 Destroy All Aliens';
  Anchor102.appendChild(Image102);
  Anchor102.appendChild(Span102);
  Container102.appendChild(Anchor102);
  recentElement.appendChild(Container102);

  var Container101 = document.createElement('div');
  Container101.id= "101";
  Container101.className = 'container';
  var Anchor101 = document.createElement('a');
  Anchor101.href= './Movie Pages/101.html';
  var Image101 = document.createElement('img');
  Image101.src = 'https://www.picclickimg.com/ezYAAOSw25dfJnm-/56sealed-Ben-10-Secret-Of-The-Omnitrix-R4.webp';
  Image101.alt = 'Ben 10 Secret of the Omnitrix';
  var Span101 = document.createElement('span');
  Span101.textContent = 'Ben 10 Secret of the Omnitrix';
  Anchor101.appendChild(Image101);
  Anchor101.appendChild(Span101);
  Container101.appendChild(Anchor101);
  recentElement.appendChild(Container101);
  
  var Container100 = document.createElement('div');
  Container100.id = '100';
  Container100.className = 'container';
  var Anchor100 = document.createElement('a');
  Anchor100.href = './Movie Pages/100.html';
  var Image100 = document.createElement('img');
  Image100.src = 'https://i.pinimg.com/474x/0d/dd/b8/0dddb82efd7661a0d612afe5d9215890.jpg';
  Image100.alt = 'Ben 10 (2005)';
  var Span100 = document.createElement('span');
  Span100.textContent = 'Ben 10 (2005)';
  Anchor100.appendChild(Image100);
  Anchor100.appendChild(Span100);
  Container100.appendChild(Anchor100);
  recentElement.appendChild(Container100);

  var Container99 = document.createElement('div');
  Container99.id = '99';
  Container99.className = 'container';
  var Anchor99 = document.createElement('a');
  Anchor99.href = './Movie Pages/99.html';
  var Image99 = document.createElement('img');
  Image99.src = 'https://preview.redd.it/power-rangers-cosmic-fury-fanmade-poster-v0-or9vr5xss7pb1.jpg?width=2824&format=pjpg&auto=webp&s=c0af78d12e26572332f322058e6b62d10a369e6c';
  Image99.alt = 'Power Rangers Cosmic Fury'
  var Span99 = document.createElement('span');
  Span99.textContent = 'Power Rangers Cosmic Fury'
  Anchor99.appendChild(Image99);
  Anchor99.appendChild(Span99);
  Container99.appendChild(Anchor99);
  recentElement.appendChild(Container99);

  var Container98 = document.createElement('div');
  Container98.id = '98';
  Container98.className = 'container';
  var Anchor98 = document.createElement('a');
  Anchor98.href = './Movie Pages/98.html';
  var Image98 = document.createElement('img');
  Image98.src = 'https://m.media-amazon.com/images/M/MV5BNTg1YjE4MWItNGM5MS00ODM4LWE5ODktODdjM2ExYjMxNjBlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg';
  Image98.alt = 'Power Rangers Dino Fury'
  var Span98 = document.createElement('span');
  Span98.textContent = 'Power Rangers Dino Fury'
  Anchor98.appendChild(Image98);
  Anchor98.appendChild(Span98);
  Container98.appendChild(Anchor98);
  recentElement.appendChild(Container98);

  var Container97 = document.createElement('div');
  Container97.id = '97';
  Container97.className = 'container';
  var Anchor97 = document.createElement('a');
  Anchor97.href = './Movie Pages/97.html';
  var Image97 = document.createElement('img');
  Image97.src = 'https://www.themoviedb.org/t/p/original/pw9Za2j51TFbkQr23IuWfpKCXrk.jpg';
  Image97.alt = 'Power Rangers Beast Morphers'
  var Span97 = document.createElement('span');
  Span97.textContent = 'Power Rangers Beast Morphers'
  Anchor97.appendChild(Image97);
  Anchor97.appendChild(Span97);
  Container97.appendChild(Anchor97);
  recentElement.appendChild(Container97);

  var Container96 = document.createElement('div');
  Container96.id = '96';
  Container96.className = 'container';
  var Anchor96 = document.createElement('a');
  Anchor96.href = './Movie Pages/96.html';
  var Image96 = document.createElement('img');
  Image96.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c663d6a-c832-4424-acaf-a00a6a095a29/dbppsry-f7c9ba06-f987-4339-87db-1354ea5c9fdb.png/v1/fill/w_400,h_500/power_rangers_super_ninja_steel_by_andiemasterson_dbppsry-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjNjYzZDZhLWM4MzItNDQyNC1hY2FmLWEwMGE2YTA5NWEyOVwvZGJwcHNyeS1mN2M5YmEwNi1mOTg3LTQzMzktODdkYi0xMzU0ZWE1YzlmZGIucG5nIiwiaGVpZ2h0IjoiPD01MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzNjNjYzZDZhLWM4MzItNDQyNC1hY2FmLWEwMGE2YTA5NWEyOVwvYW5kaWVtYXN0ZXJzb24tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.EDj7LoPjMLnuKC8Z2ldODcw8UEV0pUqCdpCJzO6MOog';
  Image96.alt = 'Power Rangers Ninja Steel'
  var Span96 = document.createElement('span');
  Span96.textContent = 'Power Rangers Ninja Steel'
  Anchor96.appendChild(Image96);
  Anchor96.appendChild(Span96);
  Container96.appendChild(Anchor96);
  recentElement.appendChild(Container96);

  var Container95 = document.createElement('div');
  Container95.id = '95';
  Container95.className = 'container';
  var Anchor95 = document.createElement('a');
  Anchor95.href = './Movie Pages/95.html';
  var Image95 = document.createElement('img');
  Image95.src = 'https://i.pinimg.com/736x/5d/6f/4d/5d6f4dbeca3131806fbc2b43c16ebd86.jpg';
  Image95.alt = 'Power Rangers Dino Charge'
  var Span95 = document.createElement('span');
  Span95.textContent = 'Power Rangers Dino Charge'
  Anchor95.appendChild(Image95);
  Anchor95.appendChild(Span95);
  Container95.appendChild(Anchor95);
  recentElement.appendChild(Container95);

  var Container94 = document.createElement('div');
  Container94.id = '94';
  Container94.className = 'container';
  var Anchor94 = document.createElement('a');
  Anchor94.href = './Movie Pages/94.html';
  var Image94 = document.createElement('img');
  Image94.src = 'https://i.pinimg.com/originals/c4/a0/73/c4a0736b041000d32244f38b1379d196.jpg';
  Image94.alt = 'Power Rangers Megaforce'
  var Span94 = document.createElement('span');
  Span94.textContent = 'Power Rangers Megaforce'
  Anchor94.appendChild(Image94);
  Anchor94.appendChild(Span94);
  Container94.appendChild(Anchor94);
  recentElement.appendChild(Container94);

  var Container93 = document.createElement('div');
  Container93.id = '93';
  Container93.className = 'container';
  var Anchor93 = document.createElement('a');
  Anchor93.href = './Movie Pages/93.html';
  var Image93 = document.createElement('img');
  Image93.src = 'https://i.pinimg.com/564x/e7/b3/64/e7b3644574487292d92bcd3ffd801ce3.jpg';
  Image93.alt = 'Power Rangers Samurai'
  var Span93 = document.createElement('span');
  Span93.textContent = 'Power Rangers Samurai'
  Anchor93.appendChild(Image93);
  Anchor93.appendChild(Span93);
  Container93.appendChild(Anchor93);
  recentElement.appendChild(Container93);

  var Container92 = document.createElement('div');
  Container92.id = '92';
  Container92.className = 'container';
  var Anchor92 = document.createElement('a');
  Anchor92.href = './Movie Pages/92.html';
  var Image92 = document.createElement('img');
  Image92.src = 'https://i.redd.it/sxwgvq2njdca1.jpg';
  Image92.alt = 'Power Rangers RPM'
  var Span92 = document.createElement('span');
  Span92.textContent = 'Power Rangers RPM'
  Anchor92.appendChild(Image92);
  Anchor92.appendChild(Span92);
  Container92.appendChild(Anchor92);
  recentElement.appendChild(Container92);

  var Container91 = document.createElement('div');
  Container91.id = '91';
  Container91.className = 'container';
  var Anchor91 = document.createElement('a');
  Anchor91.href = './Movie Pages/91.html';
  var Image91 = document.createElement('img');
  Image91.src = 'https://m.media-amazon.com/images/M/MV5BOTM1N2Y4ZjMtODU2NC00OWRjLWFhMDAtOGZiZGQ1ZTYyOTgzXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_FMjpg_UX1000_.jpg';
  Image91.alt = 'Power Rangers Jungle Fury'
  var Span91 = document.createElement('span');
  Span91.textContent = 'Power Rangers Jungle Fury'
  Anchor91.appendChild(Image91);
  Anchor91.appendChild(Span91);
  Container91.appendChild(Anchor91);
  recentElement.appendChild(Container91);

  var Container90 = document.createElement('div');
  Container90.id = '90';
  Container90.className = 'container';
  var Anchor90 = document.createElement('a');
  Anchor90.href = './Movie Pages/90.html';
  var Image90 = document.createElement('img');
  Image90.src = 'https://www.themoviedb.org/t/p/original/zOOvRQ8Sl3lNHRVFUppcP2UX6FJ.jpg';
  Image90.alt = 'Power Rangers Operation Overdrive'
  var Span90 = document.createElement('span');
  Span90.textContent = 'Power Rangers Operation Overdrive'
  Anchor90.appendChild(Image90);
  Anchor90.appendChild(Span90);
  Container90.appendChild(Anchor90);
  recentElement.appendChild(Container90);

  var Container89 = document.createElement('div');
  Container89.id = '89';
  Container89.className = 'container';
  var Anchor89 = document.createElement('a');
  Anchor89.href = './Movie Pages/89.html';
  var Image89 = document.createElement('img');
  Image89.src = 'https://m.media-amazon.com/images/I/51UvzYuuy9L.jpg';
  Image89.alt = 'Power Rangers Mystic Force'
  var Span89 = document.createElement('span');
  Span89.textContent = 'Power Rangers Mystic Force'
  Anchor89.appendChild(Image89);
  Anchor89.appendChild(Span89);
  Container89.appendChild(Anchor89);
  recentElement.appendChild(Container89);

  var Container88 = document.createElement('div');
  Container88.id = '88';
  Container88.className = 'container';
  var Anchor88 = document.createElement('a');
  Anchor88.href = './Movie Pages/88.html';
  var Image88 = document.createElement('img');
  Image88.src = 'https://m.media-amazon.com/images/M/MV5BMWJkZmIxZDQtZGQyMS00YzY4LWE0Y2QtM2UwNDc0YTBlNmI0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg';
  Image88.alt = 'Power Rangers S.P.D.'
  var Span88 = document.createElement('span');
  Span88.textContent = 'Power Rangers S.P.D.'
  Anchor88.appendChild(Image88);
  Anchor88.appendChild(Span88);
  Container88.appendChild(Anchor88);
  recentElement.appendChild(Container88);

  var Container87 = document.createElement('div');
  Container87.id = '87';
  Container87.className = 'container';
  var Anchor87 = document.createElement('a');
  Anchor87.href = './Movie Pages/87.html';
  var Image87 = document.createElement('img');
  Image87.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5dc7d01-7118-4009-8906-0a8f2b348da0/derg3p5-f593af61-b628-4730-8a90-9df65013e927.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1ZGM3ZDAxLTcxMTgtNDAwOS04OTA2LTBhOGYyYjM0OGRhMFwvZGVyZzNwNS1mNTkzYWY2MS1iNjI4LTQ3MzAtOGE5MC05ZGY2NTAxM2U5MjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JjOFWcZcQY49gj1g-G5sc21vTz-TV2EqFVTFJnWIqd0';
  Image87.alt = 'Power Rangers Dino Thunder'
  var Span87 = document.createElement('span');
  Span87.textContent = 'Power Rangers Dino Thunder'
  Anchor87.appendChild(Image87);
  Anchor87.appendChild(Span87);
  Container87.appendChild(Anchor87);
  recentElement.appendChild(Container87);

  var Container86 = document.createElement('div');
  Container86.id = '86';
  Container86.className = 'container';
  var Anchor86 = document.createElement('a');
  Anchor86.href = './Movie Pages/86.html';
  var Image86 = document.createElement('img');
  Image86.src = 'https://pics.filmaffinity.com/Power_Rangers_Ninja_Storm_TV_Series-557303130-large.jpg';
  Image86.alt = 'Power Rangers Ninja Storm'
  var Span86 = document.createElement('span');
  Span86.textContent = 'Power Rangers Ninja Storm'
  Anchor86.appendChild(Image86);
  Anchor86.appendChild(Span86);
  Container86.appendChild(Anchor86);
  recentElement.appendChild(Container86);

  var Container85 = document.createElement('div');
  Container85.id = '85';
  Container85.className = 'container';
  var Anchor85 = document.createElement('a');
  Anchor85.href = './Movie Pages/85.html';
  var Image85 = document.createElement('img');
  Image85.src = 'https://pics.filmaffinity.com/power_rangers_wild_force-873378807-large.jpg';
  Image85.alt = 'Power Rangers Wild Force'
  var Span85 = document.createElement('span');
  Span85.textContent = 'Power Rangers Wild Force'
  Anchor85.appendChild(Image85);
  Anchor85.appendChild(Span85);
  Container85.appendChild(Anchor85);
  recentElement.appendChild(Container85);

  var Container84 = document.createElement('div');
  Container84.id = '84';
  Container84.className = 'container';
  var Anchor84 = document.createElement('a');
  Anchor84.href = './Movie Pages/84.html';
  var Image84 = document.createElement('img');
  Image84.src = 'https://i.pinimg.com/1200x/47/89/ef/4789ef6562b5cedfea69e0b26da5f062.jpg';
  Image84.alt = 'Power Rangers Time Force'
  var Span84 = document.createElement('span');
  Span84.textContent = 'Power Rangers Time Force'
  Anchor84.appendChild(Image84);
  Anchor84.appendChild(Span84);
  Container84.appendChild(Anchor84);
  recentElement.appendChild(Container84);

  var Container83 = document.createElement('div');
  Container83.id = '83';
  Container83.className = 'container';
  var Anchor83 = document.createElement('a');
  Anchor83.href = './Movie Pages/83.html';
  var Image83 = document.createElement('img');
  Image83.src = 'https://www.themoviedb.org/t/p/original/qyrqyg8N8kd5Yo1ZH3W0t6HVO45.jpg';
  Image83.alt = 'Power Rangers Lightspeed Rescue'
  var Span83 = document.createElement('span');
  Span83.textContent = 'Power Rangers Lightspeed Rescue'
  Anchor83.appendChild(Image83);
  Anchor83.appendChild(Span83);
  Container83.appendChild(Anchor83);
  recentElement.appendChild(Container83);

  var Container82 = document.createElement('div');
  Container82.id = '82';
  Container82.className = 'container';
  var Anchor82 = document.createElement('a');
  Anchor82.href = './Movie Pages/82.html';
  var Image82 = document.createElement('img');
  Image82.src = 'https://m.media-amazon.com/images/M/MV5BMjA0NTE0MTU2Nl5BMl5BanBnXkFtZTcwMzk3NzAzMQ@@._V1_FMjpg_UX1000_.jpg';
  Image82.alt = 'Power Rangers Lost Galaxy'
  var Span82 = document.createElement('span');
  Span82.textContent = 'Power Rangers Lost Galaxy'
  Anchor82.appendChild(Image82);
  Anchor82.appendChild(Span82);
  Container82.appendChild(Anchor82);
  recentElement.appendChild(Container82);

  var Container81 = document.createElement('div');
  Container81.id = '81';
  Container81.className = 'container';
  var Anchor81 = document.createElement('a');
  Anchor81.href = './Movie Pages/81.html';
  var Image81 = document.createElement('img');
  Image81.src = 'https://pics.filmaffinity.com/Power_Rangers_in_Space_TV_Series-849501180-large.jpg';
  Image81.alt = 'Power Rangers In Space'
  var Span81 = document.createElement('span');
  Span81.textContent = 'Power Rangers In Space'
  Anchor81.appendChild(Image81);
  Anchor81.appendChild(Span81);
  Container81.appendChild(Anchor81);
  recentElement.appendChild(Container81);

  var Container80 = document.createElement('div');
  Container80.id = '80';
  Container80.className = 'container';
  var Anchor80 = document.createElement('a');
  Anchor80.href = './Movie Pages/80.html';
  var Image80 = document.createElement('img');
  Image80.src = 'https://m.media-amazon.com/images/M/MV5BNGExYzJjMzUtNGExMy00YTgwLTgzOTUtMjM5MDEwMTJkMTM1XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg';
  Image80.alt = 'Power Rangers Turbo'
  var Span80 = document.createElement('span');
  Span80.textContent = 'Power Rangers Turbo'
  Anchor80.appendChild(Image80);
  Anchor80.appendChild(Span80);
  Container80.appendChild(Anchor80);
  recentElement.appendChild(Container80);

  var Container79 = document.createElement('div');
  Container79.id = '79';
  Container79.className = 'container';
  var Anchor79 = document.createElement('a');
  Anchor79.href = './Movie Pages/79.html';
  var Image79 = document.createElement('img');
  Image79.src = 'https://i.pinimg.com/originals/7a/c7/ba/7ac7ba3a686489dd2a56393c181ceb5c.jpg';
  Image79.alt = 'Power Rangers Zeo'
  var Span79 = document.createElement('span');
  Span79.textContent = 'Power Rangers Zeo'
  Anchor79.appendChild(Image79);
  Anchor79.appendChild(Span79);
  Container79.appendChild(Anchor79);
  recentElement.appendChild(Container79);

  var Container78 = document.createElement('div');
  Container78.id = '78';
  Container78.className = 'container';
  var Anchor78 = document.createElement('a');
  Anchor78.href = './Movie Pages/78.html';
  var Image78 = document.createElement('img');
  Image78.src = 'https://diamondpainting5d.com/wp-content/uploads/2023/01/power-rangers-Mighty-morphin-poster-diamond-by-diamonds.bak_-scaled.jpg';
  Image78.alt = 'Mighty Morphin Power Rangers'
  var Span78 = document.createElement('span');
  Span78.textContent = 'Mighty Morphin Power Rangers'
  Anchor78.appendChild(Image78);
  Anchor78.appendChild(Span78);
  Container78.appendChild(Anchor78);
  recentElement.appendChild(Container78);

  var Container77 = document.createElement('div');
  Container77.id = '77';
  Container77.className = 'container';
  var Anchor77 = document.createElement('a');
  Anchor77.href = './Movie Pages/77.html';
  var Image77 = document.createElement('img');
  Image77.src = 'https://m.media-amazon.com/images/M/MV5BMTlmNzdiOWUtZmZiYi00ODkyLTk5ZGMtMTcwNzk1MmNjNjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg';
  Image77.alt = 'Power Rangers Once & Always'
  var Span77 = document.createElement('span');
  Span77.textContent = 'Power Rangers Once & Always'
  Anchor77.appendChild(Image77);
  Anchor77.appendChild(Span77);
  Container77.appendChild(Anchor77);
  recentElement.appendChild(Container77);

  var Container76 = document.createElement('div');
  Container76.id = '76';
  Container76.className = 'container';
  var Anchor76 = document.createElement('a');
  Anchor76.href = './Movie Pages/76.html';
  var Image76 = document.createElement('img');
  Image76.src = 'https://cdn.marvel.com/content/1x/lp_site.jpg';
  Image76.alt = 'I am Groot'
  var Span76 = document.createElement('span');
  Span76.textContent = 'I am Groot'
  Anchor76.appendChild(Image76);
  Anchor76.appendChild(Span76);
  Container76.appendChild(Anchor76);
  recentElement.appendChild(Container76);

  var Container75 = document.createElement('div');
  Container75.id = '75';
  Container75.className = 'container';
  var Anchor75 = document.createElement('a');
  Anchor75.href = './Movie Pages/75.html';
  var Image75 = document.createElement('img');
  Image75.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/The_Boys_Season_1.jpg/220px-The_Boys_Season_1.jpg';
  Image75.alt = 'The Boys Season 1'
  var Span75 = document.createElement('span');
  Span75.textContent = 'The Boys Season 1'
  Anchor75.appendChild(Image75);
  Anchor75.appendChild(Span75);
  Container75.appendChild(Anchor75);
  recentElement.appendChild(Container75);
  
  var Container74 = document.createElement('div');
  Container74.id = '74';
  Container74.className = 'container';
  var Anchor74 = document.createElement('a');
  Anchor74.href = './Movie Pages/74.html';
  var Image74 = document.createElement('img');
  Image74.src = 'https://resizing.flixster.com/9uPRG7s0BvJfYbt1SybFvZs6HRk=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16826251_b_v13_af.jpg';
  Image74.alt = 'The Boys Season 2'
  var Span74 = document.createElement('span');
  Span74.textContent = 'The Boys Season 2'
  Anchor74.appendChild(Image74);
  Anchor74.appendChild(Span74);
  Container74.appendChild(Anchor74);
  recentElement.appendChild(Container74);
  
  var Container73 = document.createElement('div');
  Container73.id = '73';
  Container73.className = 'container';
  var Anchor73 = document.createElement('a');
  Anchor73.href = './Movie Pages/73.html';
  var Image73 = document.createElement('img');
  Image73.src = 'https://i.redd.it/7glrwkpttms51.jpg';
  Image73.alt = 'The Boys Season 3'
  var Span73 = document.createElement('span');
  Span73.textContent = 'The Boys Season 3'
  Anchor73.appendChild(Image73);
  Anchor73.appendChild(Span73);
  Container73.appendChild(Anchor73);
  recentElement.appendChild(Container73);

  var Container72 = document.createElement('div');
  Container72.id = '72';
  Container72.className = 'container';
  var Anchor72 = document.createElement('a');
  Anchor72.href = './Movie Pages/72.html';
  var Image72 = document.createElement('img');
  Image72.src = 'https://www.themoviedb.org/t/p/original/5mpAi9CAoVItqTfVEcwJUCBLPLw.jpg';
  Image72.alt = 'DareDevil Season 1'
  var Span72 = document.createElement('span');
  Span72.textContent = 'DareDevil Season 1'
  Anchor72.appendChild(Image72);
  Anchor72.appendChild(Span72);
  Container72.appendChild(Anchor72);
  recentElement.appendChild(Container72);
  
  var Container71 = document.createElement('div');
  Container71.id = '71';
  Container71.className = 'container';
  var Anchor71 = document.createElement('a');
  Anchor71.href = './Movie Pages/71.html';
  var Image71 = document.createElement('img');
  Image71.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65425a1c-1d61-429b-bfa0-7dc046b30c9e/d9vl9pt-12bea807-600b-4d7b-9e91-75c5a89b72c0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NDI1YTFjLTFkNjEtNDI5Yi1iZmEwLTdkYzA0NmIzMGM5ZVwvZDl2bDlwdC0xMmJlYTgwNy02MDBiLTRkN2ItOWU5MS03NWM1YTg5YjcyYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fKyMYWCMsHhqGYBXM35hAsK0-Cv9SELtjEv1uB3W2FM';
  Image71.alt = 'DareDevil Season 2'
  var Span71 = document.createElement('span');
  Span71.textContent = 'DareDevil Season 2'
  Anchor71.appendChild(Image71);
  Anchor71.appendChild(Span71);
  Container71.appendChild(Anchor71);
  recentElement.appendChild(Container71);
  
  var Container70 = document.createElement('div');
  Container70.id = '70';
  Container70.className = 'container';
  var Anchor70 = document.createElement('a');
  Anchor70.href = './Movie Pages/70.html';
  var Image70 = document.createElement('img');
  Image70.src = 'https://posterspy.com/wp-content/uploads/2023/05/daredevil-s3-genzo-1280.jpg';
  Image70.alt = 'DareDevil Season 3'
  var Span70 = document.createElement('span');
  Span70.textContent = 'DareDevil Season 3'
  Anchor70.appendChild(Image70);
  Anchor70.appendChild(Span70);
  Container70.appendChild(Anchor70);
  recentElement.appendChild(Container70);
  
  var Container69 = document.createElement('div');
  Container69.id = '69';
  Container69.className = 'container';
  var Anchor69 = document.createElement('a');
  Anchor69.href = './Movie Pages/69.html';
  var Image69 = document.createElement('img');
  Image69.src = 'https://alternativemovieposters.com/wp-content/uploads/2021/06/AndyFairhurst_Wandavision.jpg';
  Image69.alt = 'WandaVision'
  var Span69 = document.createElement('span');
  Span69.textContent = 'WandaVision'
  Anchor69.appendChild(Image69);
  Anchor69.appendChild(Span69);
  Container69.appendChild(Anchor69);
  recentElement.appendChild(Container69);
  
  var Container68 = document.createElement('div');
  Container68.id = '68';
  Container68.className = 'container';
  var Anchor68 = document.createElement('a');
  Anchor68.href = './Movie Pages/68.html';
  var Image68 = document.createElement('img');
  Image68.src = 'https://pbs.twimg.com/media/Ew9-dILWUAI3jdP.jpg:large';
  Image68.alt = 'The Falcon And The Winter Soldier'
  var Span68 = document.createElement('span');
  Span68.textContent = 'The Falcon And The Winter Soldier'
  Anchor68.appendChild(Image68);
  Anchor68.appendChild(Span68);
  Container68.appendChild(Anchor68);
  recentElement.appendChild(Container68);
  
  var Container67 = document.createElement('div');
  Container67.id = '67';
  Container67.className = 'container';
  var Anchor67 = document.createElement('a');
  Anchor67.href = './Movie Pages/67.html';
  var Image67 = document.createElement('img');
  Image67.src = 'https://i.etsystatic.com/18242346/r/il/1c2d51/3186724525/il_570xN.3186724525_ocm2.jpg';
  Image67.alt = 'Loki'
  var Span67 = document.createElement('span');
  Span67.textContent = 'Loki'
  Anchor67.appendChild(Image67);
  Anchor67.appendChild(Span67);
  Container67.appendChild(Anchor67);
  recentElement.appendChild(Container67);
  
  var Container66 = document.createElement('div');
  Container66.id = '66';
  Container66.className = 'container';
  var Anchor66 = document.createElement('a');
  Anchor66.href = './Movie Pages/66.html';
  var Image66 = document.createElement('img');
  Image66.src = 'https://i.pinimg.com/736x/62/d4/3b/62d43b73f36577a47210938e3b93f309.jpg';
  Image66.alt = 'What if...?'
  var Span66 = document.createElement('span');
  Span66.textContent = 'What if...?'
  Anchor66.appendChild(Image66);
  Anchor66.appendChild(Span66);
  Container66.appendChild(Anchor66);
  recentElement.appendChild(Container66);
  
  var Container65 = document.createElement('div');
  Container65.id = '65';
  Container65.className = 'container';
  var Anchor65 = document.createElement('a');
  Anchor65.href = './Movie Pages/65.html';
  var Image65 = document.createElement('img');
  Image65.src = 'https://www.themoviedb.org/t/p/original/ieouVhOTA7UkwbkMx9IrQXLF3Pg.jpg';
  Image65.alt = 'Hawkeye'
  var Span65 = document.createElement('span');
  Span65.textContent = 'Hawkeye'
  Anchor65.appendChild(Image65);
  Anchor65.appendChild(Span65);
  Container65.appendChild(Anchor65);
  recentElement.appendChild(Container65);
  
  var Container64 = document.createElement('div');
  Container64.id = '64';
  Container64.className = 'container';
  var Anchor64 = document.createElement('a');
  Anchor64.href = './Movie Pages/64.html';
  var Image64 = document.createElement('img');
  Image64.src = 'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg';
  Image64.alt = 'Moonknight'
  var Span64 = document.createElement('span');
  Span64.textContent = 'Moonknight'
  Anchor64.appendChild(Image64);
  Anchor64.appendChild(Span64);
  Container64.appendChild(Anchor64);
  recentElement.appendChild(Container64);
  
  var Container63 = document.createElement('div');
  Container63.id = '63';
  Container63.className = 'container';
  var Anchor63 = document.createElement('a');
  Anchor63.href = './Movie Pages/63.html';
  var Image63 = document.createElement('img');
  Image63.src = 'https://www.themoviedb.org/t/p/original/owaVvXR4nCOBVJgSnUw2pC6hvEw.jpg';
  Image63.alt = 'Ms. Marvel'
  var Span63 = document.createElement('span');
  Span63.textContent = 'Ms. Marvel'
  Anchor63.appendChild(Image63);
  Anchor63.appendChild(Span63);
  Container63.appendChild(Anchor63);
  recentElement.appendChild(Container63);

  var Container62 = document.createElement('div');
  Container62.id = '62';
  Container62.className = 'container';
  var Anchor62 = document.createElement('a');
  Anchor62.href = './Movie Pages/62.html';
  var Image62 = document.createElement('img');
  Image62.src = 'https://i.redd.it/n3m3a51ht6s41.jpg';
  Image62.alt = 'She-Hulk : Attorney At Law'
  var Span62 = document.createElement('span');
  Span62.textContent = 'She-Hulk : Attorney At Law'
  Anchor62.appendChild(Image62);
  Anchor62.appendChild(Span62);
  Container62.appendChild(Anchor62);
  recentElement.appendChild(Container62);
  
  var Container61 = document.createElement('div');
  Container61.id = '61';
  Container61.className = 'container';
  var Anchor61 = document.createElement('a');
  Anchor61.href = './Movie Pages/61.html';
  var Image61 = document.createElement('img');
  Image61.src = 'https://www.themoviedb.org/t/p/original/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg';
  Image61.alt = 'Gen V'
  var Span61 = document.createElement('span');
  Span61.textContent = 'Gen V'
  Anchor61.appendChild(Image61);
  Anchor61.appendChild(Span61);
  Container61.appendChild(Anchor61);
  recentElement.appendChild(Container61);

  var Container60 = document.createElement('div');
  Container60.id = '60';
  Container60.className = 'container';
  var Anchor60 = document.createElement('a');
  Anchor60.href = './Movie Pages/60.html';
  var Image60 = document.createElement('img');
  Image60.src = 'https://pbs.twimg.com/media/FLLbWEiXIAgiJMm?format=jpg&name=large';
  Image60.alt = 'Secret Invasion'
  var Span60 = document.createElement('span');
  Span60.textContent = 'Secret Invasion'
  Anchor60.appendChild(Image60);
  Anchor60.appendChild(Span60);
  Container60.appendChild(Anchor60);
  recentElement.appendChild(Container60);

  var Container59 = document.createElement('div');
  Container59.id = '59';
  Container59.className = 'container';
  var Anchor59 = document.createElement('a');
  Anchor59.href = './Movie Pages/59.html';
  var Image59 = document.createElement('img');
  Image59.src = 'https://i.pinimg.com/originals/2b/30/14/2b30142f7429ba12c770648ef6cbfe10.jpg';
  Image59.alt = 'Echo'
  var Span59 = document.createElement('span');
  Span59.textContent = 'Echo'
  Anchor59.appendChild(Image59);
  Anchor59.appendChild(Span59);
  Container59.appendChild(Anchor59);
  recentElement.appendChild(Container59);

  var Container58 = document.createElement('div');
  Container58.id = '58';
  Container58.className = 'container';
  var Anchor58 = document.createElement('a');
  Anchor58.href = './Movie Pages/58.html';
  var Image58 = document.createElement('img');
  Image58.src = 'https://preview.redd.it/official-poster-for-what-if-season-2-v0-gzhlaqwpmj0c1.jpg?auto=webp&s=0abeb307c9ac17aea5c23033444eeca48bcf4178';
  Image58.alt = 'What if...? Season 2'
  var Span58 = document.createElement('span');
  Span58.textContent = 'What if...? Season 2'
  Anchor58.appendChild(Image58);
  Anchor58.appendChild(Span58);
  Container58.appendChild(Anchor58);
  recentElement.appendChild(Container58);

  var Container57 = document.createElement('div');
  Container57.className = 'container';
  Container57.id = '57';
  var Anchor57 = document.createElement('a');
  Anchor57.href = './Movie Pages/57.html';
  var Image57 = document.createElement('img');
  Image57.src = 'https://sportshub.cbsistatic.com/i/2023/09/14/392140fb-e73e-47d2-87cd-3dab3d71e856/f6adchwbiaa0iro.jpg?auto=webp&width=810&height=1200&crop=0.675:1,smart';
  Image57.alt = 'Aquaman and the lost kingdom';
  var Span57 = document.createElement('span');
  Span57.textContent = 'Aquaman and the lost kingdom';
  Anchor57.appendChild(Image57);
  Anchor57.appendChild(Span57);
  Container57.appendChild(Anchor57);
  recentElement.appendChild(Container57);

  var Container56 = document.createElement('div');
  Container56.className = 'container';
  Container56.id = '56';
  var Anchor56 = document.createElement('a');
  Anchor56.href = './Movie Pages/56.html';
  var Image56 = document.createElement('img');
  Image56.src = 'https://images.news18.com/ibnlive/uploads/2022/10/aksdj.jpg';
  Image56.alt = 'Drishyam 2';
  var Span56 = document.createElement('span');
  Span56.textContent = 'Drishyam 2';
  Anchor56.appendChild(Image56);
  Anchor56.appendChild(Span56);
  Container56.appendChild(Anchor56);
  recentElement.appendChild(Container56);
  
  var Container55 = document.createElement('div');
  Container55.className = 'container';
  Container55.id = '55';
  var Anchor55 = document.createElement('a');
  Anchor55.href = './Movie Pages/55.html';
  var Image55 = document.createElement('img');
  Image55.src = 'https://m.media-amazon.com/images/M/MV5BZjliNDVlOTMtOTIzYi00NjZhLWJhYWUtZmY5Y2ZkMDE2MGRkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  Image55.alt = 'Dono';
  var Span55 = document.createElement('span');
  Span55.textContent = 'Dono';
  Anchor55.appendChild(Image55);
  Anchor55.appendChild(Span55);
  Container55.appendChild(Anchor55);
  recentElement.appendChild(Container55);
  
  var Container54 = document.createElement('div');
  Container54.className = 'container';
  Container54.id = '54';
  var Anchor54 = document.createElement('a');
  Anchor54.href = './Movie Pages/54.html';
  var Image54 = document.createElement('img');
  Image54.src = 'https://m.media-amazon.com/images/M/MV5BNzg3MDg3ZTItNzc4OS00YzdiLTgwMTEtNzNkN2E3OWYzZWMzXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg';
  Image54.alt = 'Kuttey';
  var Span54 = document.createElement('span');
  Span54.textContent = 'Kuttey';
  Anchor54.appendChild(Image54);
  Anchor54.appendChild(Span54);
  Container54.appendChild(Anchor54);
  recentElement.appendChild(Container54);
  
  var Container53 = document.createElement('div');
  Container53.className = 'container';
  Container53.id = '53';
  var Anchor53 = document.createElement('a');
  Anchor53.href = './Movie Pages/53.html';
  var Image53 = document.createElement('img');
  Image53.src = 'https://m.media-amazon.com/images/M/MV5BYTYwYmI0NGItYmFkYi00NzViLWIwMGEtNGNjYjQwYjY1NTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  Image53.alt = 'Mission Majnu';
  var Span53 = document.createElement('span');
  Span53.textContent = 'Mission Majnu';
  Anchor53.appendChild(Image53);
  Anchor53.appendChild(Span53);
  Container53.appendChild(Anchor53);
  recentElement.appendChild(Container53);
  
  var Container52 = document.createElement('div');
  Container52.className = 'container';
  Container52.id = '52';
  var Anchor52 = document.createElement('a');
  Anchor52.href = './Movie Pages/52.html';
  var Image52 = document.createElement('img');
  Image52.src = 'https://static.toiimg.com/thumb/imgsize-23456,msid-96541939,width-600,resizemode-4/96541939.jpg';
  Image52.alt = 'Gandhi Godse - Ek Yudh';
  var Span52 = document.createElement('span');
  Span52.textContent = 'Gandhi Godse - Ek Yudh';
  Anchor52.appendChild(Image52);
  Anchor52.appendChild(Span52);
  Container52.appendChild(Anchor52);
  recentElement.appendChild(Container52);
  
  var Container51 = document.createElement('div');
  Container51.className = 'container';
  Container51.id = '51';
  var Anchor51 = document.createElement('a');
  Anchor51.href = './Movie Pages/51.html';
  var Image51 = document.createElement('img');
  Image51.src = 'https://m.media-amazon.com/images/M/MV5BOWM1YzgzM2EtZjBmYy00Zjg1LTk4NWQtN2MyYTdmN2Q0ZTI5XkEyXkFqcGdeQXVyMjIwOTg2NjU@._V1_FMjpg_UX1000_.jpg';
  Image51.alt = 'Operation Fryday';
  var Span51 = document.createElement('span');
  Span51.textContent = 'Operation Fryday';
  Anchor51.appendChild(Image51);
  Anchor51.appendChild(Span51);
  Container51.appendChild(Anchor51);
  recentElement.appendChild(Container51);
  
  var Container50 = document.createElement('div');
  Container50.className = 'container';
  Container50.id = '50';
  var Anchor50 = document.createElement('a');
  Anchor50.href = './Movie Pages/50.html';
  var Image50 = document.createElement('img');
  Image50.src = 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/shehzada-03.jpg';
  Image50.alt = 'Shehzada';
  var Span50 = document.createElement('span');
  Span50.textContent = 'Shehzada';
  Anchor50.appendChild(Image50);
  Anchor50.appendChild(Span50);
  Container50.appendChild(Anchor50);
  recentElement.appendChild(Container50);
  
  var Container49 = document.createElement('div');
  Container49.className = 'container';
  Container49.id = '49';
  var Anchor49 = document.createElement('a');
  Anchor49.href = './Movie Pages/49.html';
  var Image49 = document.createElement('img');
  Image49.src = 'https://pbs.twimg.com/media/FI5KErHagAAX_76.jpg:large';
  Image49.alt = 'Selfiee';
  var Span49 = document.createElement('span');
  Span49.textContent = 'Selfiee';
  Anchor49.appendChild(Image49);
  Anchor49.appendChild(Span49);
  Container49.appendChild(Anchor49);
  recentElement.appendChild(Container49);
  
  var Container48 = document.createElement('div');
  Container48.className = 'container';
  Container48.id = '48';
  var Anchor48 = document.createElement('a');
  Anchor48.href = './Movie Pages/48.html';
  var Image48 = document.createElement('img');
  Image48.src = 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20221214122218.jpg';
  Image48.alt = 'Tu Jhoothi Main Makkaar';
  var Span48 = document.createElement('span');
  Span48.textContent = 'Tu Jhoothi Main Makkaar';
  Anchor48.appendChild(Image48);
  Anchor48.appendChild(Span48);
  Container48.appendChild(Anchor48);
  recentElement.appendChild(Container48);
  
  var Container47 = document.createElement('div');
  Container47.className = 'container';
  Container47.id = '47';
  var Anchor47 = document.createElement('a');
  Anchor47.href = './Movie Pages/47.html';
  var Image47 = document.createElement('img');
  Image47.src = 'https://assets.gadgets360cdn.com/pricee/assets/product/202304/Mrs-Chatterjee-vs-Norway_1682067333.jpg';
  Image47.alt = 'Mrs. Chatterjee Vs Norway';
  var Span47 = document.createElement('span');
  Span47.textContent = 'Mrs. Chatterjee Vs Norway';
  Anchor47.appendChild(Image47);
  Anchor47.appendChild(Span47);
  Container47.appendChild(Anchor47);
  recentElement.appendChild(Container47);
  
  var Container46 = document.createElement('div');
  Container46.className = 'container';
  Container46.id = '46';
  var Anchor46 = document.createElement('a');
  Anchor46.href = './Movie Pages/46.html';
  var Image46 = document.createElement('img');
  Image46.src = 'https://m.media-amazon.com/images/M/MV5BNTAzNWZmYzItMzVkMi00ZTc0LThhMTUtNGFlNjczM2E4MTRiXkEyXkFqcGdeQXVyOTE2NDU1NDM@._V1_.jpg';
  Image46.alt = 'Zwigato';
  var Span46 = document.createElement('span');
  Span46.textContent = 'Zwigato';
  Anchor46.appendChild(Image46);
  Anchor46.appendChild(Span46);
  Container46.appendChild(Anchor46);
  recentElement.appendChild(Container46);

  var Container45 = document.createElement('div');
  Container45.className = 'container';
  Container45.id = '45';
  var Anchor45 = document.createElement('a');
  Anchor45.href = './Movie Pages/45.html';
  var Image45 = document.createElement('img');
  Image45.src = 'https://m.media-amazon.com/images/M/MV5BNDMwZjQ2YzUtZDQyMC00MjcwLTlmN2MtZGY4OGEyMzMzNTk4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg';
  Image45.alt = 'Chor Nikal Ke Bhaga';
  var Span45 = document.createElement('span');
  Span45.textContent = 'Chor Nikal Ke Bhaga';
  Anchor45.appendChild(Image45);
  Anchor45.appendChild(Span45);
  Container45.appendChild(Anchor45);
  recentElement.appendChild(Container45);

  var Container44 = document.createElement('div');
  Container44.className = 'container';
  Container44.id = '44';
  var Anchor44 = document.createElement('a');
  Anchor44.href = './Movie Pages/44.html';
  var Image44 = document.createElement('img');
  Image44.src = 'https://m.media-amazon.com/images/M/MV5BYzg1MDhjYzEtODJkMi00MjViLWIwOWEtYzAxZTg5YWM0ZmViXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg';
  Image44.alt = 'Bheed';
  var Span44 = document.createElement('span');
  Span44.textContent = 'Bheed';
  Anchor44.appendChild(Image44);
  Anchor44.appendChild(Span44);
  Container44.appendChild(Anchor44);
  recentElement.appendChild(Container44);

  var Container43 = document.createElement('div');
  Container43.className = 'container';
  Container43.id = '43';
  var Anchor43 = document.createElement('a');
  Anchor43.href = './Movie Pages/43.html';
  var Image43 = document.createElement('img');
  Image43.src = 'https://pbs.twimg.com/media/FkZlj6oaYAA3voP.jpg';
  Image43.alt = 'Bhola';
  var Span43 = document.createElement('span');
  Span43.textContent = 'Bhola';
  Anchor43.appendChild(Image43);
  Anchor43.appendChild(Span43);
  Container43.appendChild(Anchor43);
  recentElement.appendChild(Container43);

  var Container42 = document.createElement('div');
  Container42.className = 'container';
  Container42.id = '42';
  var Anchor42 = document.createElement('a');
  Anchor42.href = './Movie Pages/42.html';
  var Image42 = document.createElement('img');
  Image42.src = 'https://m.media-amazon.com/images/M/MV5BNGY1ZWIxZjQtNDEyYy00NzcwLTgxMjctYzQ3MjQyOTc0MDc2XkEyXkFqcGdeQXVyMTY0MDc4NDE4._V1_.jpg';
  Image42.alt = 'Gaslight';
  var Span42 = document.createElement('span');
  Span42.textContent = 'Gaslight';
  Anchor42.appendChild(Image42);
  Anchor42.appendChild(Span42);
  Container42.appendChild(Anchor42);
  recentElement.appendChild(Container42);

  var Container41 = document.createElement('div');
  Container41.className = 'container';
  Container41.id = '41';
  var Anchor41 = document.createElement('a');
  Anchor41.href = './Movie Pages/41.html';
  var Image41 = document.createElement('img');
  Image41.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJADdELZDwHUyYoZ4c0m5bHOYLyR7IVQlNVb5QWldA8GWHnGjT';
  Image41.alt = 'Kisi Ka Bhai Kisi Ki Jaan';
  var Span41 = document.createElement('span');
  Span41.textContent = 'Kisi Ka Bhai Kisi Ki Jaan';
  Anchor41.appendChild(Image41);
  Anchor41.appendChild(Span41);
  Container41.appendChild(Anchor41);
  recentElement.appendChild(Container41);

  var Container40 = document.createElement('div');
  Container40.className = 'container';
  Container40.id = '40';
  var Anchor40 = document.createElement('a');
  Anchor40.href = './Movie Pages/40.html';
  var Image40 = document.createElement('img');
  Image40.src = 'https://m.media-amazon.com/images/M/MV5BNTU5MDZlNmEtODNjOS00NDljLTlhNTItNzQ1NDUyZjRiOGYwXkEyXkFqcGdeQXVyNTI0NzU5ODc@._V1_.jpg';
  Image40.alt = 'The Kerala Story';
  var Span40 = document.createElement('span');
  Span40.textContent = 'The Kerala Story';
  Anchor40.appendChild(Image40);
  Anchor40.appendChild(Span40);
  Container40.appendChild(Anchor40);
  recentElement.appendChild(Container40);

  var Container39 = document.createElement('div');
  Container39.className = 'container';
  Container39.id = '39';
  var Anchor39 = document.createElement('a');
  Anchor39.href = './Movie Pages/39.html';
  var Image39 = document.createElement('img');
  Image39.src = 'https://upload.wikimedia.org/wikipedia/en/a/a3/IB71_film_poster.jpg';
  Image39.alt = 'IB71';
  var Span39 = document.createElement('span');
  Span39.textContent = 'IB71';
  Anchor39.appendChild(Image39);
  Anchor39.appendChild(Span39);
  Container39.appendChild(Anchor39);
  recentElement.appendChild(Container39);

  var Container38 = document.createElement('div');
  Container38.className = 'container';
  Container38.id = '38';
  var Anchor38 = document.createElement('a');
  Anchor38.href = './Movie Pages/38.html';
  var Image38 = document.createElement('img');
  Image38.src = 'https://m.media-amazon.com/images/M/MV5BODZiODQyZjgtNTdiZC00OTFhLTkwODktMjFmODJlZjk5MzYzXkEyXkFqcGdeQXVyMTQwMTI5NzM2._V1_.jpg';
  Image38.alt = 'Sirf Ek Banda Kaafi Hai';
  var Span38 = document.createElement('span');
  Span38.textContent = 'Sirf Ek Banda Kaafi Hai';
  Anchor38.appendChild(Image38);
  Anchor38.appendChild(Span38);
  Container38.appendChild(Anchor38);
  recentElement.appendChild(Container38);

  var Container37 = document.createElement('div');
  Container37.className = 'container';
  Container37.id = '37';
  var Anchor37 = document.createElement('a');
  Anchor37.href = './Movie Pages/37.html';
  var Image37 = document.createElement('img');
  Image37.src = 'https://m.media-amazon.com/images/M/MV5BOGJjODhmODUtNzQ3MS00ZjY3LWI0NjYtNzg4NDUyYWI3MTliXkEyXkFqcGdeQXVyMTY1MjE1OTAx._V1_.jpg';
  Image37.alt = 'Zara Hatke Zara Bachke';
  var Span37 = document.createElement('span');
  Span37.textContent = 'Zara Hatke Zara Bachke';
  Anchor37.appendChild(Image37);
  Anchor37.appendChild(Span37);
  Container37.appendChild(Anchor37);
  recentElement.appendChild(Container37);

  var Container36 = document.createElement('div');
  Container36.className = 'container';
  Container36.id = '36';
  var Anchor36 = document.createElement('a');
  Anchor36.href = './Movie Pages/36.html';
  var Image36 = document.createElement('img');
  Image36.src = 'https://m.media-amazon.com/images/M/MV5BY2RiNDE1Y2EtY2ZhNC00MTBmLTlmMWUtNWQ1MjA2ZjI4ODA4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg';
  Image36.alt = 'Adipurush';
  var Span36 = document.createElement('span');
  Span36.textContent = 'Adipurush';
  Anchor36.appendChild(Image36);
  Anchor36.appendChild(Span36);
  Container36.appendChild(Anchor36);
  recentElement.appendChild(Container36);

  var Container35 = document.createElement('div');
  Container35.className = 'container';
  Container35.id = '35';
  var Anchor35 = document.createElement('a');
  Anchor35.href = './Movie Pages/35.html';
  var Image35 = document.createElement('img');
  Image35.src = 'https://m.media-amazon.com/images/M/MV5BNTJiM2U3NTctNTAwNi00ZmQ5LThmNDUtYjI4MDdhYzQ5ZmExXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg';
  Image35.alt = 'Satyaprem ki Katha';
  var Span35 = document.createElement('span');
  Span35.textContent = 'Satyaprem ki Katha';
  Anchor35.appendChild(Image35);
  Anchor35.appendChild(Span35);
  Container35.appendChild(Anchor35);
  recentElement.appendChild(Container35);

  var Container34 = document.createElement('div');
  Container34.className = 'container';
  Container34.id = '34';
  var Anchor34 = document.createElement('a');
  Anchor34.href = './Movie Pages/34.html';
  var Image34 = document.createElement('img');
  Image34.src = 'https://m.media-amazon.com/images/M/MV5BN2FkZTZlZGEtNTFlNi00NjVmLWE1MDYtNWEwYTU5ODE4MzQ4XkEyXkFqcGdeQXVyMTI5MDUyMTM1._V1_FMjpg_UX1000_.jpg';
  Image34.alt = '72 Hoorain';
  var Span34 = document.createElement('span');
  Span34.textContent = '72 Hoorain';
  Anchor34.appendChild(Image34);
  Anchor34.appendChild(Span34);
  Container34.appendChild(Anchor34);
  recentElement.appendChild(Container34);

  var Container33 = document.createElement('div');
  Container33.className = 'container';
  Container33.id = '33';
  var Anchor33 = document.createElement('a');
  Anchor33.href = './Movie Pages/33.html';
  var Image33 = document.createElement('img');
  Image33.src = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/new-posters-from-shah-rukh-khans-dunki-unveiled-110605270-3x4.jpg?VersionId=FEflpYk30mkngjxiDsDjrW3BBHfG.LXT';
  Image33.alt = 'Dunki';
  var Span33 = document.createElement('span');
  Span33.textContent = 'Dunki';
  Anchor33.appendChild(Image33);
  Anchor33.appendChild(Span33);
  Container33.appendChild(Anchor33);
  recentElement.appendChild(Container33);

  var Container32 = document.createElement('div');
  Container32.className = 'container';
  Container32.id = '32';
  var Anchor32 = document.createElement('a');
  Anchor32.href = './Movie Pages/32.html';
  var Image32 = document.createElement('img');
  Image32.src = 'https://m.media-amazon.com/images/M/MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_.jpg';
  Image32.alt = 'Don 2';
  var Span32 = document.createElement('span');
  Span32.textContent = 'Don 2';
  Anchor32.appendChild(Image32);
  Anchor32.appendChild(Span32);
  Container32.appendChild(Anchor32);
  recentElement.appendChild(Container32);

  var Container31 = document.createElement('div');
  Container31.className = 'container';
  Container31.id = '31';
  var Anchor31 = document.createElement('a');
  Anchor31.href = './Movie Pages/31.html';
  var Image31 = document.createElement('img');
  Image31.src = 'https://m.media-amazon.com/images/M/MV5BMzAyMWE0MjgtMDVjNS00ZDMyLWE4NjQtNWU2ZDgyYTlmMjdjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg';
  Image31.alt = 'Don';
  var Span31 = document.createElement('span');
  Span31.textContent = 'Don';
  Anchor31.appendChild(Image31);
  Anchor31.appendChild(Span31);
  Container31.appendChild(Anchor31);
  recentElement.appendChild(Container31);

  var Container30 = document.createElement('div');
  Container30.className = 'container';
  Container30.id = '30';
  var Anchor30 = document.createElement('a');
  Anchor30.href = './Movie Pages/30.html';
  var Image30 = document.createElement('img');
  Image30.src = 'https://www.telugubulletin.com/wp-content/uploads/2021/05/Brahmastra-twitter-696x870.jpg';
  Image30.alt = 'Brahmastra';
  var Span30 = document.createElement('span');
  Span30.textContent = 'Brahmastra';
  Anchor30.appendChild(Image30);
  Anchor30.appendChild(Span30);
  Container30.appendChild(Anchor30);
  recentElement.appendChild(Container30);

  var Container29 = document.createElement('div');
  Container29.className = 'container';
  Container29.id = '29';
  var Anchor29 = document.createElement('a');
  Anchor29.href = './Movie Pages/29.html';
  var Image29 = document.createElement('img');
  Image29.src = 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/222841/Sooryavanshi-V-ALL-3-UNIFORM-layers-motion-web.jpg';
  Image29.alt = 'Sooryavanshi';
  var Span29 = document.createElement('span');
  Span29.textContent = 'Sooryavanshi';
  Anchor29.appendChild(Image29);
  Anchor29.appendChild(Span29);
  Container29.appendChild(Anchor29);
  recentElement.appendChild(Container29);

  var Container28 = document.createElement('div');
  Container28.className = 'container';
  Container28.id = '28';
  var Anchor28 = document.createElement('a');
  Anchor28.href = './Movie Pages/28.html';
  var Image28 = document.createElement('img');
  Image28.src = 'https://stat5.bollywoodhungama.in/wp-content/uploads/2018/12/Simmba1-1.jpg';
  Image28.alt = 'Simmba';
  var Span28 = document.createElement('span');
  Span28.textContent = 'Simmba';
  Anchor28.appendChild(Image28);
  Anchor28.appendChild(Span28);
  Container28.appendChild(Anchor28);
  recentElement.appendChild(Container28);

  var Container27 = document.createElement('div');
  Container27.className = 'container';
  Container27.id = '27';
  var Anchor27 = document.createElement('a');
  Anchor27.href = './Movie Pages/27.html';
  var Image27 = document.createElement('img');
  Image27.src = 'https://live.staticflickr.com/3913/14705282055_321c289534_z.jpg';
  Image27.alt = 'Singham Returns';
  var Span27 = document.createElement('span');
  Span27.textContent = 'Singham Returns';
  Anchor27.appendChild(Image27);
  Anchor27.appendChild(Span27);
  Container27.appendChild(Anchor27);
  recentElement.appendChild(Container27);

  var Container26 = document.createElement('div');
  Container26.className = 'container';
  Container26.id = '26';
  var Anchor26 = document.createElement('a');
  Anchor26.href = './Movie Pages/26.html';
  var Image26 = document.createElement('img');
  Image26.src = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71XrOg+MVsL._AC_UF1000,1000_QL80_.jpg';
  Image26.alt = 'Singham';
  var Span26 = document.createElement('span');
  Span26.textContent = 'Singham';
  Anchor26.appendChild(Image26);
  Anchor26.appendChild(Span26);
  Container26.appendChild(Anchor26);
  recentElement.appendChild(Container26);

  var Container25 = document.createElement('div');
  Container25.className = 'container';
  Container25.id = '25';
  var Anchor25 = document.createElement('a');
  Anchor25.href = './Movie Pages/25.html';
  var Image25 = document.createElement('img');
  Image25.src = 'https://pbs.twimg.com/media/FO1KmM8X0AIAZBv.jpg:large';
  Image25.alt = 'Pathaan';
  var Span25 = document.createElement('span');
  Span25.textContent = 'Pathaan';
  Anchor25.appendChild(Image25);
  Anchor25.appendChild(Span25);
  Container25.appendChild(Anchor25);
  recentElement.appendChild(Container25);

  var Container24 = document.createElement('div');
  Container24.className = 'container';
  Container24.id = '24';
  var Anchor24 = document.createElement('a');
  Anchor24.href = './Movie Pages/24.html';
  var Image24 = document.createElement('img');
  Image24.src = 'https://m.media-amazon.com/images/M/MV5BNDhmZmZkODYtZjcwZi00MjBkLWIzZDQtN2M5YjliOGQ4MDc2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg';
  Image24.alt = 'War';
  var Span24 = document.createElement('span');
  Span24.textContent = 'War';
  Anchor24.appendChild(Image24);
  Anchor24.appendChild(Span24);
  Container24.appendChild(Anchor24);
  recentElement.appendChild(Container24);

  var Container23 = document.createElement('div');
  Container23.className = 'container';
  Container23.id = '23';
  var Anchor23 = document.createElement('a');
  Anchor23.href = './Movie Pages/23.html';
  var Image23 = document.createElement('img');
  Image23.src = 'https://m.media-amazon.com/images/M/MV5BNGQ5Y2VkZjYtOGI2Ni00YTAwLWIxOTUtZTVkNGIyZGU2ZWI5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg';
  Image23.alt = 'Tiger Zinda Hai';
  var Span23 = document.createElement('span');
  Span23.textContent = 'Tiger Zinda Hai';
  Anchor23.appendChild(Image23);
  Anchor23.appendChild(Span23);
  Container23.appendChild(Anchor23);
  recentElement.appendChild(Container23);

  var Container22 = document.createElement('div');
  Container22.className = 'container';
  Container22.id = '22';
  var Anchor22 = document.createElement('a');
  Anchor22.href = './Movie Pages/22.html';
  var Image22 = document.createElement('img');
  Image22.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWmehHz7vjPikPq6eGHTDwu2P8eMU1we3Wg&usqp=CAU';
  Image22.alt = 'Ek Tha Tiger';
  var Span22 = document.createElement('span');
  Span22.textContent = 'Ek Tha Tiger';
  Anchor22.appendChild(Image22);
  Anchor22.appendChild(Span22);
  Container22.appendChild(Anchor22);
  recentElement.appendChild(Container22);

  var Container21 = document.createElement('div');
  Container21.className = 'container';
  Container21.id = '21';
  var Anchor21 = document.createElement('a');
  Anchor21.href = './Movie Pages/21.html';
  var Image21 = document.createElement('img');
  Image21.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcEK1nlQo2L2JSjmh9UzBUGvDTsZh6vqIGg&usqp=CAU';
  Image21.alt = 'Rocky aur rani ki prem kahani';
  var Span21 = document.createElement('span');
  Span21.textContent = 'Rocky aur rani ki prem kahani';
  Anchor21.appendChild(Image21);
  Anchor21.appendChild(Span21);
  Container21.appendChild(Anchor21);
  recentElement.appendChild(Container21);

  var Container20 = document.createElement('div');
  Container20.className = 'container';
  Container20.id = '20';
  var Anchor20 = document.createElement('a');
  Anchor20.href = './Movie Pages/20.html';
  var Image20 = document.createElement('img');
  Image20.src = 'https://m.media-amazon.com/images/M/MV5BNmQ3MThkOWEtNTA0NC00YzI2LWIxZjEtZjdlZTVmNzQ2ZGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  Image20.alt = 'OMG 2';
  var Span20 = document.createElement('span');
  Span20.textContent = 'OMG 2';
  Anchor20.appendChild(Image20);
  Anchor20.appendChild(Span20);
  Container20.appendChild(Anchor20);
  recentElement.appendChild(Container20);

  var Container19 = document.createElement('div');
  Container19.className = 'container';
  Container19.id = '19';
  var Anchor19 = document.createElement('a');
  Anchor19.href = './Movie Pages/19.html';
  var Image19 = document.createElement('img');
  Image19.src = 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Gadar-2.jpg';
  Image19.alt = 'Gadar 2';
  var Span19 = document.createElement('span');
  Span19.textContent = 'Gadar 2';
  Anchor19.appendChild(Image19);
  Anchor19.appendChild(Span19);
  Container19.appendChild(Anchor19);
  recentElement.appendChild(Container19);

  var Container18 = document.createElement('div');
  Container18.className = 'container';
  Container18.id = '18';
  var Anchor18 = document.createElement('a');
  Anchor18.href = './Movie Pages/18.html';
  var Image18 = document.createElement('img');
  Image18.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYg2W2bGkTsB3jjI9ZsHOgOQjZh51nFt_a7w&usqp=CAU';
  Image18.alt = 'Dream Girl 2';
  var Span18 = document.createElement('span');
  Span18.textContent = 'Dream Girl 2';
  Anchor18.appendChild(Image18);
  Anchor18.appendChild(Span18);
  Container18.appendChild(Anchor18);
  recentElement.appendChild(Container18);

  var Container17 = document.createElement('div');
  Container17.className = 'container';
  Container17.id = '17';
  var Anchor17 = document.createElement('a');
  Anchor17.href = './Movie Pages/17.html';
  var Image17 = document.createElement('img');
  Image17.src = 'https://static.toiimg.com/thumb/imgsize-23456,msid-103060645,width-600,resizemode-4/103060645.jpg';
  Image17.alt = 'Jawan';
  var Span17 = document.createElement('span');
  Span17.textContent = 'Jawan';
  Anchor17.appendChild(Image17);
  Anchor17.appendChild(Span17);
  Container17.appendChild(Anchor17);
  recentElement.appendChild(Container17);

  var Container16 = document.createElement('div');
  Container16.className = 'container';
  Container16.id = '16';
  var Anchor16 = document.createElement('a');
  Anchor16.href = './Movie Pages/16.html';
  var Image16 = document.createElement('img');
  Image16.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjHcuBl8LdgsxrfRfl48KAGADFAPQP405dA&usqp=CAU';
  Image16.alt = 'The Vaccine War';
  var Span16 = document.createElement('span');
  Span16.textContent = 'The Vaccine War';
  Anchor16.appendChild(Image16);
  Anchor16.appendChild(Span16);
  Container16.appendChild(Anchor16);
  recentElement.appendChild(Container16);

  var Container15 = document.createElement('div');
  Container15.className = 'container';
  Container15.id = '15';
  var Anchor15 = document.createElement('a');
  Anchor15.href = './Movie Pages/15.html';
  var Image15 = document.createElement('img');
  Image15.src = 'https://m.media-amazon.com/images/M/MV5BYzc0NzQ1NGMtMDhmNC00NzQ1LWFjNzctMjlkNGQ0MmE4Y2I1XkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg';
  Image15.alt = 'Fukrey 3';
  var Span15 = document.createElement('span');
  Span15.textContent = 'Fukrey 3';
  Anchor15.appendChild(Image15);
  Anchor15.appendChild(Span15);
  Container15.appendChild(Anchor15);
  recentElement.appendChild(Container15);

  var Container14 = document.createElement('div');
  Container14.className = 'container';
  Container14.id = '14';
  var Anchor14 = document.createElement('a');
  Anchor14.href = './Movie Pages/14.html';
  var Image14 = document.createElement('img');
  Image14.src = 'https://myhotposters.com/cdn/shop/products/mL6903_1024x1024.jpg?v=1697834059';
  Image14.alt = 'Mission Raniganj';
  var Span14 = document.createElement('span');
  Span14.textContent = 'Mission Raniganj';
  Anchor14.appendChild(Image14);
  Anchor14.appendChild(Span14);
  Container14.appendChild(Anchor14);
  recentElement.appendChild(Container14);

  var Container13 = document.createElement('div');
  Container13.className = 'container';
  Container13.id = '13';
  var Anchor13 = document.createElement('a');
  Anchor13.href = './Movie Pages/13.html';
  var Image13 = document.createElement('img');
  Image13.src = 'https://m.media-amazon.com/images/M/MV5BZDM5YjRkNTktNDg4OC00YmFkLWIwOTgtZjE1ZGUyOWVkMGQzXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg';
  Image13.alt = 'Thank you for coming';
  var Span13 = document.createElement('span');
  Span13.textContent = 'Thank you for coming';
  Anchor13.appendChild(Image13);
  Anchor13.appendChild(Span13);
  Container13.appendChild(Anchor13);
  recentElement.appendChild(Container13);

  var Container12 = document.createElement('div');
  Container12.className = 'container';
  Container12.id = '12';
  var Anchor12 = document.createElement('a');
  Anchor12.href = './Movie Pages/12.html';
  var Image12 = document.createElement('img');
  Image12.src = 'https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_loki_s2_finale_poster_v1_613_36711b22.jpeg';
  Image12.alt = 'Loki Season 2';
  var Span12 = document.createElement('span');
  Span12.textContent = 'Loki Season 2';
  Anchor12.appendChild(Image12);
  Anchor12.appendChild(Span12);
  Container12.appendChild(Anchor12);
  recentElement.appendChild(Container12);

  var Container11 = document.createElement('div');
  Container11.className = 'container';
  Container11.id = '11';
  var Anchor11 = document.createElement('a');
  Anchor11.href = './Movie Pages/11.html';
  var Image11 = document.createElement('img');
  Image11.src = 'https://m.media-amazon.com/images/M/MV5BZjg2YjU0MTEtMGYyNy00OWI1LTk2MDgtMDFkNmMwYWFjZTY5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg';
  Image11.alt = 'The Railway Men';
  var Span11 = document.createElement('span');
  Span11.textContent = 'The Railway Men';
  Anchor11.appendChild(Image11);
  Anchor11.appendChild(Span11);
  Container11.appendChild(Anchor11);
  recentElement.appendChild(Container11);

  var Container10 = document.createElement('div');
  Container10.className = 'container';
  Container10.id = '10';
  var Anchor10 = document.createElement('a');
  Anchor10.href = './Movie Pages/10.html';
  var Image10 = document.createElement('img');
  Image10.src = 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/joram-20231120110353-22348.jpg';
  Image10.alt = 'Joram';
  var Span10 = document.createElement('span');
  Span10.textContent = 'Joram';
  Anchor10.appendChild(Image10);
  Anchor10.appendChild(Span10);
  Container10.appendChild(Anchor10);
  recentElement.appendChild(Container10);

  var Container9 = document.createElement('div');
  Container9.className = 'container';
  Container9.id = '9';
  var Anchor9 = document.createElement('a');
  Anchor9.href = './Movie Pages/9.html';
  var Image9 = document.createElement('img');
  Image9.src = 'https://m.media-amazon.com/images/M/MV5BNjY0MmJmZjEtZmMyZi00OTBmLWJhMDItNjBiYWRlYWQ5MzgxXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg';
  Image9.alt = 'Animal';
  var Span9 = document.createElement('span');
  Span9.textContent = 'Animal';
  Anchor9.appendChild(Image9);
  Anchor9.appendChild(Span9);
  Container9.appendChild(Anchor9);
  recentElement.appendChild(Container9);

  var Container8 = document.createElement('div');
  Container8.className = 'container';
  Container8.id = '8';
  var Anchor8 = document.createElement('a');
  Anchor8.href = './Movie Pages/8.html';
  var Image8 = document.createElement('img');
  Image8.src = 'https://filmycollection.com/wp-content/uploads/2023/11/Snapinsta.app_399711731_1034384124478703_27308481587437781_n_1080-1.jpg';
  Image8.alt = 'Sam Bahadur';
  var Span8 = document.createElement('span');
  Span8.textContent = 'Sam Bahadur';
  Anchor8.appendChild(Image8);
  Anchor8.appendChild(Span8);
  Container8.appendChild(Anchor8);
  recentElement.appendChild(Container8);

  var Container7 = document.createElement('div');
  Container7.className = 'container';
  Container7.id = '7';
  var Anchor7 = document.createElement('a');
  Anchor7.href = './Movie Pages/7.html';
  var Image7 = document.createElement('img');
  Image7.src = 'https://m.media-amazon.com/images/M/MV5BYTY1N2UzYzMtZTI5MC00MjFkLWE2NGYtZmIxODI3MDIzYWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  Image7.alt = 'Farrey';
  var Span7 = document.createElement('span');
  Span7.textContent = 'Farrey';
  Anchor7.appendChild(Image7);
  Anchor7.appendChild(Span7);
  Container7.appendChild(Anchor7);
  recentElement.appendChild(Container7);

  var Container6 = document.createElement('div');
  Container6.className = 'container';
  Container6.id = '6';
  var Anchor6 = document.createElement('a');
  Anchor6.href = './Movie Pages/6.html';
  var Image6 = document.createElement('img');
  Image6.src = 'https://gumlet.assettype.com/filmcompanion%2F2023-11%2F6ada95d7-ac6e-4967-af0f-507c1a84eb99%2Fkhichdi_2_khichdi_gang_is_coming_to_entertain_the_audience_once_again_the_film_will_be_released_on_t.png?format=auto';
  Image6.alt = 'Khichdi 2';
  var Span6 = document.createElement('span');
  Span6.textContent = 'Khichdi 2';
  Anchor6.appendChild(Image6);
  Anchor6.appendChild(Span6);
  Container6.appendChild(Anchor6);
  recentElement.appendChild(Container6);

  var Container5 = document.createElement('div');
  Container5.className = 'container';
  Container5.id = '5';
  var Anchor5 = document.createElement('a');
  Anchor5.href = './Movie Pages/5.html';
  var Image5 = document.createElement('img');
  Image5.src = 'https://miro.medium.com/v2/resize:fit:1170/1*1cUNWC_7-8AWJDNDYVSYFw.jpeg';
  Image5.alt = 'Tiger 3';
  var Span5 = document.createElement('span');
  Span5.textContent = 'Tiger 3';
  Anchor5.appendChild(Image5);
  Anchor5.appendChild(Span5);
  Container5.appendChild(Anchor5);
  recentElement.appendChild(Container5);

  var Container4 = document.createElement('div');
  Container4.className = 'container';
  Container4.id = '4';
  var Anchor4 = document.createElement('a');
  Anchor4.href = './Movie Pages/4.html';
  var Image4 = document.createElement('img');
  Image4.src = 'https://preview.redd.it/i-made-a-poster-for-the-marvels-how-excited-are-you-guys-v0-i9jgzec8ly9b1.jpg?auto=webp&s=e2e4a3737735d826156f39119ef08d8a749c8e63';
  Image4.alt = 'The Marvels';
  var Span4 = document.createElement('span');
  Span4.textContent = 'The Marvels';
  Anchor4.appendChild(Image4);
  Anchor4.appendChild(Span4);
  Container4.appendChild(Anchor4);
  recentElement.appendChild(Container4);

  var Container3 = document.createElement('div');
  Container3.className = 'container';
  Container3.id = '3';
  var Anchor3 = document.createElement('a');
  Anchor3.href = './Movie Pages/3.html';
  var Image3 = document.createElement('img');
  Image3.src = 'https://media5.bollywoodhungama.in/wp-content/uploads/2023/10/12th-Fail.jpeg';
  Image3.alt = '12th Fail';
  var Span3 = document.createElement('span');
  Span3.textContent = '12th Fail';
  Anchor3.appendChild(Image3);
  Anchor3.appendChild(Span3);
  Container3.appendChild(Anchor3);
  recentElement.appendChild(Container3);

  var Container2 = document.createElement('div');
  Container2.className = 'container';
  Container2.id = '2';
  var Anchor2 = document.createElement('a');
  Anchor2.href = './Movie Pages/2.html';
  var Image2 = document.createElement('img');
  Image2.src = 'https://m.media-amazon.com/images/M/MV5BNTE2MzNlNDktMzNhZS00ZmZlLTkxMDQtNjQ5ZDlkMmVjN2FhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg';
  Image2.alt = 'Tejas';
  var Span2 = document.createElement('span');
  Span2.textContent = 'Tejas';
  Anchor2.appendChild(Image2);
  Anchor2.appendChild(Span2);
  Container2.appendChild(Anchor2);
  recentElement.appendChild(Container2);

  var Container1 = document.createElement('div');
  Container1.className = 'container';
  Container1.id = '1';
  var Anchor1 = document.createElement('a');
  Anchor1.href = './Movie Pages/1.html';
  var Image1 = document.createElement('img');
  Image1.src = 'https://actionflixdotcom.files.wordpress.com/2023/10/380030145_863433225437792_6197020497503333988_n.jpg?w=819';
  Image1.alt = 'Ganapath';
  var Span1 = document.createElement('span');
  Anchor1.appendChild(Image1);
  Span1.textContent = 'Ganapath';
  Anchor1.appendChild(Span1);
  Container1.appendChild(Anchor1);
  recentElement.appendChild(Container1);
}
function hover(){
  let containers = document.querySelectorAll('.container');

containers.forEach(container => {
  let span = container.querySelector('span');
  
  container.addEventListener('mouseover', function(){
    span.style.backgroundColor = "blue";
  });
  
  container.addEventListener("mouseout", function(){
    span.style.backgroundColor = "transparent";
  });
});

}
function contentpage(){
  var recentElement = document.querySelector('.suggestion');
  if(recentElement){
    var Container173 = document.createElement('div');
    Container173.id= "173";
    Container173.className = 'container';
    var Anchor173 = document.createElement('a');
    Anchor173.href= './Movie Pages/173.html';
    var Image173 = document.createElement('img');
    Image173.src = 'https://i.pinimg.com/originals/61/66/0d/61660d4a95555450ff66f6a068b7bbc5.jpg';
    Image173.alt = 'Morbius';
    var Span173 = document.createElement('span');
    Span173.textContent = 'Morbius';
    Anchor173.appendChild(Image173);
    Anchor173.appendChild(Span173);
    Container173.appendChild(Anchor173);
    recentElement.appendChild(Container173);

    var Container172 = document.createElement('div');
    Container172.id= "172";
    Container172.className = 'container';
    var Anchor172 = document.createElement('a');
    Anchor172.href= './Movie Pages/172.html';
    var Image172 = document.createElement('img');
    Image172.src = 'https://i.pinimg.com/736x/2c/03/23/2c0323623da613f1d6cf17edae6729ae.jpg';
    Image172.alt = 'Venom Let there be Carnage';
    var Span172 = document.createElement('span');
    Span172.textContent = 'Venom Let there be Carnage';
    Anchor172.appendChild(Image172);
    Anchor172.appendChild(Span172);
    Container172.appendChild(Anchor172);
    recentElement.appendChild(Container172);
  
    var Container171 = document.createElement('div');
    Container171.id= "171";
    Container171.className = 'container';
    var Anchor171 = document.createElement('a');
    Anchor171.href= './Movie Pages/171.html';
    var Image171 = document.createElement('img');
    Image171.src = 'https://i.pinimg.com/736x/12/c6/99/12c6992772f2b69b39209991fe1edea1.jpg';
    Image171.alt = 'Venom';
    var Span171 = document.createElement('span');
    Span171.textContent = 'Venom';
    Anchor171.appendChild(Image171);
    Anchor171.appendChild(Span171);
    Container171.appendChild(Anchor171);
    recentElement.appendChild(Container171);
  
    var Container170 = document.createElement('div');
    Container170.id= "170";
    Container170.className = 'container';
    var Anchor170 = document.createElement('a');
    Anchor170.href= './Movie Pages/170.html';
    var Image170 = document.createElement('img');
    Image170.src = 'https://i.pinimg.com/736x/3d/09/fc/3d09fca4a1704b0a49d8dfae29fc3780.jpg';
    Image170.alt = 'Maidaan';
    var Span170 = document.createElement('span');
    Span170.textContent = 'Maidaan';
    Anchor170.appendChild(Image170);
    Anchor170.appendChild(Span170);
    Container170.appendChild(Anchor170);
    recentElement.appendChild(Container170);
  
    var Container169 = document.createElement('div');
    Container169.id= "169";
    Container169.className = 'container';
    var Anchor169 = document.createElement('a');
    Anchor169.href= './Movie Pages/169.html';
    var Image169 = document.createElement('img');
    Image169.src = 'https://saarangcinema.com/uploads/Bade-Miyan-Chote-Miyan.webp';
    Image169.alt = 'Bade Miyan Chhote Miyan';
    var Span169 = document.createElement('span');
    Span169.textContent = 'Bade Miyan Chhote Miyan';
    Anchor169.appendChild(Image169);
    Anchor169.appendChild(Span169);
    Container169.appendChild(Anchor169);
    recentElement.appendChild(Container169);
  
    var Container168 = document.createElement('div');
    Container168.id= "168";
    Container168.className = 'container';
    var Anchor168 = document.createElement('a');
    Anchor168.href= './168.html';
    var Image168 = document.createElement('img');
    Image168.src = 'https://preview.redd.it/official-poster-for-godzilla-x-kong-the-new-empire-v0-c0mi78pv454c1.jpg?width=640&crop=smart&auto=webp&s=589db55535ca0647e1a09ce6e3f45f8d2a50cd9d';
    Image168.alt = 'Godzilla x Kong : The New Empire';
    var Span168 = document.createElement('span');
    Span168.textContent = 'Godzilla x Kong : The New Empire';
    Anchor168.appendChild(Image168);
    Anchor168.appendChild(Span168);
    Container168.appendChild(Anchor168);
    recentElement.appendChild(Container168);
    
    var Container167 = document.createElement('div');
    Container167.id= "167";
    Container167.className = 'container';
    var Anchor167 = document.createElement('a');
    Anchor167.href= './167.html';
    var Image167 = document.createElement('img');
    Image167.src = 'https://m.media-amazon.com/images/M/MV5BZjM0ZDk5NDAtZDY2MC00ZWFmLWIxOTQtNTg2Y2RjMTRjZWFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg';
    Image167.alt = 'Godzilla vs Kong';
    var Span167 = document.createElement('span');
    Span167.textContent = 'Godzilla vs Kong';
    Anchor167.appendChild(Image167);
    Anchor167.appendChild(Span167);
    Container167.appendChild(Anchor167);
    recentElement.appendChild(Container167);
    
    var Container166 = document.createElement('div');
    Container166.id= "166";
    Container166.className = 'container';
    var Anchor166 = document.createElement('a');
    Anchor166.href= './166.html';
    var Image166 = document.createElement('img');
    Image166.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwJsO5t09a3ofaB9Jw4UIIZT3LHMzE08nmH7wjI74pw&s';
    Image166.alt = 'Godzilla: King of the Monsters';
    var Span166 = document.createElement('span');
    Span166.textContent = 'Godzilla: King of the Monsters';
    Anchor166.appendChild(Image166);
    Anchor166.appendChild(Span166);
    Container166.appendChild(Anchor166);
    recentElement.appendChild(Container166);
    
    var Container165 = document.createElement('div');
    Container165.id= "165";
    Container165.className = 'container';
    var Anchor165 = document.createElement('a');
    Anchor165.href= './165.html';
    var Image165 = document.createElement('img');
    Image165.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcG3fPbpcUI76ro_8vhSJdSdYeq4QLfEqtJiBmzKvBw&s';
    Image165.alt = 'Kong: Skull Island';
    var Span165 = document.createElement('span');
    Span165.textContent = 'Kong: Skull Island';
    Anchor165.appendChild(Image165);
    Anchor165.appendChild(Span165);
    Container165.appendChild(Anchor165);
    recentElement.appendChild(Container165);
    
    var Container164 = document.createElement('div');
    Container164.id= "164";
    Container164.className = 'container';
    var Anchor164 = document.createElement('a');
    Anchor164.href= './164.html';
    var Image164 = document.createElement('img');
    Image164.src = 'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg';
    Image164.alt = 'Godzilla';
    var Span164 = document.createElement('span');
    Span164.textContent = 'Godzilla';
    Anchor164.appendChild(Image164);
    Anchor164.appendChild(Span164);
    Container164.appendChild(Anchor164);
    recentElement.appendChild(Container164);
    
    var Container163 = document.createElement('div');
    Container163.id= "163";
    Container163.className = 'container';
    var Anchor163 = document.createElement('a');
    Anchor163.href= './163.html';
    var Image163 = document.createElement('img');
    Image163.src = 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/a3/cb9eb578f50c8b5cd67578539a551415_300x442.jpg?t=1710470995';
    Image163.alt = 'Crew';
    var Span163 = document.createElement('span');
    Span163.textContent = 'Crew';
    Anchor163.appendChild(Image163);
    Anchor163.appendChild(Span163);
    Container163.appendChild(Anchor163);
    recentElement.appendChild(Container163);
    
    var Container162 = document.createElement('div');
    Container162.id= "162";
    Container162.className = 'container';
    var Anchor162 = document.createElement('a');
    Anchor162.href= './162.html';
    var Image162 = document.createElement('img');
    Image162.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtEC1_ZYP_GrsV4q3TTtH_88pTjqCbbUdb-wDzUgWHA&s';
    Image162.alt = 'Swatantra Veer Sawarkar';
    var Span162 = document.createElement('span');
    Span162.textContent = 'Swatantra Veer Sawarkar';
    Anchor162.appendChild(Image162);
    Anchor162.appendChild(Span162);
    Container162.appendChild(Anchor162);
    recentElement.appendChild(Container162);
    
    var Container161 = document.createElement('div');
    Container161.id= "161";
    Container161.className = 'container';
    var Anchor161 = document.createElement('a');
    Anchor161.href= './161.html';
    var Image161 = document.createElement('img');
    Image161.src = 'https://img.republicworld.com/rimages/WhatsApp-Image-2024-01-15-1705313475616.webp?tr=w-600';
    Image161.alt = 'Bastar : The Naxal Story';
    var Span161 = document.createElement('span');
    Span161.textContent = 'Bastar : The Naxal Story';
    Anchor161.appendChild(Image161);
    Anchor161.appendChild(Span161);
    Container161.appendChild(Anchor161);
    recentElement.appendChild(Container161);
    
    var Container160 = document.createElement('div');
    Container160.id= "160";
    Container160.className = 'container';
    var Anchor160 = document.createElement('a');
    Anchor160.href= './160.html';
    var Image160 = document.createElement('img');
    Image160.src = 'https://m.media-amazon.com/images/M/MV5BMTgzZTMwNjYtYWM3NC00Nzc4LTg5YzAtZGQ2MTE0MDc1NjY4XkEyXkFqcGdeQXVyNjUwMjYwMjE@._V1_.jpg';
    Image160.alt = 'Yodha';
    var Span160 = document.createElement('span');
    Span160.textContent = 'Yodha';
    Anchor160.appendChild(Image160);
    Anchor160.appendChild(Span160);
    Container160.appendChild(Anchor160);
    recentElement.appendChild(Container160);
    
    var Container159 = document.createElement('div');
    Container159.id= "159";
    Container159.className = 'container';
    var Anchor159 = document.createElement('a');
    Anchor159.href= './159.html';
    var Image159 = document.createElement('img');
    Image159.src = 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-02/whatsapp_image_2024-02-20_at_10.06.40_am.jpeg?VersionId=TY_3kQPkqjwzxL2.uudeg7cPhdduCbZW&size=750:*';
    Image159.alt = 'Shaitaan';
    var Span159 = document.createElement('span');
    Span159.textContent = 'Shaitaan';
    Anchor159.appendChild(Image159);
    Anchor159.appendChild(Span159);
    Container159.appendChild(Anchor159);
    recentElement.appendChild(Container159);
    
    var Container158 = document.createElement('div');
    Container158.id= "158";
    Container158.className = 'container';
    var Anchor158 = document.createElement('a');
    Anchor158.href= './158.html';
    var Image158 = document.createElement('img');
    Image158.src = 'https://preview.redd.it/another-new-dune-part-two-official-poster-v0-l2zxnp3s6fec1.jpeg?auto=webp&s=b95670d76758b6c6b8a66f418852bf07116e5a86';
    Image158.alt = 'Dune : Part Two';
    var Span158 = document.createElement('span');
    Span158.textContent = 'Dune : Part Two';
    Anchor158.appendChild(Image158);
    Anchor158.appendChild(Span158);
    Container158.appendChild(Anchor158);
    recentElement.appendChild(Container158);
    
    var Container157 = document.createElement('div');
    Container157.id= "157";
    Container157.className = 'container';
    var Anchor157 = document.createElement('a');
    Anchor157.href= './157.html';
    var Image157 = document.createElement('img');
    Image157.src = 'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
    Image157.alt = 'Dune : Part one';
    var Span157 = document.createElement('span');
    Span157.textContent = 'Dune : Part one';
    Anchor157.appendChild(Image157);
    Anchor157.appendChild(Span157);
    Container157.appendChild(Anchor157);
    recentElement.appendChild(Container157);
    
    var Container156 = document.createElement('div');
    Container156.id= "156";
    Container156.className = 'container';
    var Anchor156 = document.createElement('a');
    Anchor156.href= './156.html';
    var Image156 = document.createElement('img');
    Image156.src = 'https://cdn.posteritati.com/posters/000/000/063/161/dune-md-web.jpg';
    Image156.alt = 'Dune';
    var Span156 = document.createElement('span');
    Span156.textContent = 'Dune';
    Anchor156.appendChild(Image156);
    Anchor156.appendChild(Span156);
    Container156.appendChild(Anchor156);
    recentElement.appendChild(Container156);
    
    var Container155 = document.createElement('div');
    Container155.id= "155";
    Container155.className = 'container';
    var Anchor155 = document.createElement('a');
    Anchor155.href= './155.html';
    var Image155 = document.createElement('img');
    Image155.src = 'https://mellowplex.s3.amazonaws.com/uploads/item_media/asset/50219/Operation_Valentine_Article_2.jpeg';
    Image155.alt = 'Operation Valentine';
    var Span155 = document.createElement('span');
    Span155.textContent = 'Operation Valentine';
    Anchor155.appendChild(Image155);
    Anchor155.appendChild(Span155);
    Container155.appendChild(Anchor155);
    recentElement.appendChild(Container155);
  
    var Container154 = document.createElement('div');
    Container154.id= "154";
    Container154.className = 'container';
    var Anchor154 = document.createElement('a');
    Anchor154.href= './154.html';
    var Image154 = document.createElement('img');
    Image154.src = 'https://external-preview.redd.it/character-posters-for-madame-web-v0-sypS1z9S5LwsSFrxwFfHE0SzFYYzHW2an31heU0jcZg.jpg?auto=webp&s=c4f47c5773ae05529dcd9a11372c994705940c83';
    Image154.alt = 'Madame Web';
    var Span154 = document.createElement('span');
    Span154.textContent = 'Madame Web';
    Anchor154.appendChild(Image154);
    Anchor154.appendChild(Span154);
    Container154.appendChild(Anchor154);
    recentElement.appendChild(Container154);
  
    var Container153 = document.createElement('div');
    Container153.id= "153";
    Container153.className = 'container';
    var Anchor153 = document.createElement('a');
    Anchor153.href= './153.html';
    var Image153 = document.createElement('img');
    Image153.src = 'https://m.media-amazon.com/images/M/MV5BMGYzM2QxNWEtY2EwZC00OTE2LWExZDEtNjQ0NDAyMjYzNGJlXkEyXkFqcGdeQXVyMTY1MjAwNDU0._V1_FMjpg_UX1000_.jpg';
    Image153.alt = 'Article 370';
    var Span153 = document.createElement('span');
    Span153.textContent = 'Article 370';
    Anchor153.appendChild(Image153);
    Anchor153.appendChild(Span153);
    Container153.appendChild(Anchor153);
    recentElement.appendChild(Container153);
  
    var Container152 = document.createElement('div');
    Container152.id= "152";
    Container152.className = 'container';
    var Anchor152 = document.createElement('a');
    Anchor152.href= './152.html';
    var Image152 = document.createElement('img');
    Image152.src = 'https://m.media-amazon.com/images/M/MV5BOGMzNmUwMGEtYmJkYS00MjgyLWIyNWMtNjBlNTExNGEwZmQwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_UY1200_CR165,0,630,1200_AL_.jpg';
    Image152.alt = 'Crakk';
    var Span152 = document.createElement('span');
    Span152.textContent = 'Crakk';
    Anchor152.appendChild(Image152);
    Anchor152.appendChild(Span152);
    Container152.appendChild(Anchor152);
    recentElement.appendChild(Container152);
  
    var Container151 = document.createElement('div');
    Container151.id= "151";
    Container151.className = 'container';
    var Anchor151 = document.createElement('a');
    Anchor151.href= './151.html';
    var Image151 = document.createElement('img');
    Image151.src = 'https://english.idreampost.com/wp-content/uploads/2024/02/Teri-Baaton-Mein-Aisa-Uljha-Jiya-poster-card.jpg';
    Image151.alt = 'Teri Baaton Mein Esa Uljha Jiya';
    var Span151 = document.createElement('span');
    Span151.textContent = 'Teri Baaton Mein Esa Uljha Jiya';
    Anchor151.appendChild(Image151);
    Anchor151.appendChild(Span151);
    Container151.appendChild(Anchor151);
    recentElement.appendChild(Container151);
  
    var Container150 = document.createElement('div');
    Container150.id= "150";
    Container150.className = 'container';
    var Anchor150 = document.createElement('a');
    Anchor150.href= './150.html';
    var Image150 = document.createElement('img');
    Image150.src = 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-12/f886dmbwaaai9lb.jpeg?VersionId=ZJ49rNKj_oIsMZ8Z6wnAFNXqcrr0X_lB';
    Image150.alt = 'Indian Police Force';
    var Span150 = document.createElement('span');
    Span150.textContent = 'Indian Police Force';
    Anchor150.appendChild(Image150);
    Anchor150.appendChild(Span150);
    Container150.appendChild(Anchor150);
    recentElement.appendChild(Container150);
  
    var Container149 = document.createElement('div');
    Container149.id= "149";
    Container149.className = 'container';
    var Anchor149 = document.createElement('a');
    Anchor149.href= './149.html';
    var Image149 = document.createElement('img');
    Image149.src = 'https://pbs.twimg.com/media/Fzj-XnvaMAAVn7v?format=jpg&name=4096x4096';
    Image149.alt = 'Fighter';
    var Span149 = document.createElement('span');
    Span149.textContent = 'Fighter';
    Anchor149.appendChild(Image149);
    Anchor149.appendChild(Span149);
    Container149.appendChild(Anchor149);
    recentElement.appendChild(Container149);
  
    var Container148 = document.createElement('div');
    Container148.id= "148";
    Container148.className = 'container';
    var Anchor148 = document.createElement('a');
    Anchor148.href= './148.html';
    var Image148 = document.createElement('img');
    Image148.src = 'https://posterspy.com/wp-content/uploads/2022/05/GOTG-Holiday-Special-Poster_MS_Final_72dpi.png';
    Image148.alt = 'Guardians of the Galaxy Holiday Special';
    var Span148 = document.createElement('span');
    Span148.textContent = 'Guardians of the Galaxy Holiday Special';
    Anchor148.appendChild(Image148);
    Anchor148.appendChild(Span148);
    Container148.appendChild(Anchor148);
    recentElement.appendChild(Container148);
  
    var Container147 = document.createElement('div');
    Container147.id= "147";
    Container147.className = 'container';
    var Anchor147 = document.createElement('a');
    Anchor147.href= './147.html';
    var Image147 = document.createElement('img');
    Image147.src = 'https://www.themoviedb.org/t/p/original/udCVr1O19nLHQnEWbwOvgaJdAx9.jpg';
    Image147.alt = 'Werewolf By Night';
    var Span147 = document.createElement('span');
    Span147.textContent = 'Werewolf By Night';
    Anchor147.appendChild(Image147);
    Anchor147.appendChild(Span147);
    Container147.appendChild(Anchor147);
    recentElement.appendChild(Container147);
    
    var Container146 = document.createElement('div');
    Container146.id= "146";
    Container146.className = 'container';
    var Anchor146 = document.createElement('a');
    Anchor146.href= './146.html';
    var Image146 = document.createElement('img');
    Image146.src = 'https://i.redd.it/5340uy7qfyr81.jpg';
    Image146.alt = 'Spider-Man Across the Spider-verse';
    var Span146 = document.createElement('span');
    Span146.textContent = 'Spider-Man Across the Spider-verse';
    Anchor146.appendChild(Image146);
    Anchor146.appendChild(Span146);
    Container146.appendChild(Anchor146);
    recentElement.appendChild(Container146);
  
    var Container145 = document.createElement('div');
    Container145.id= "145";
    Container145.className = 'container';
    var Anchor145 = document.createElement('a');
    Anchor145.href= './145.html';
    var Image145 = document.createElement('img');
    Image145.src = 'https://pbs.twimg.com/media/Fv8Lf9RWwAEsv-u?format=jpg&name=4096x4096';
    Image145.alt = 'Guardians of the Galaxy Vol. 3';
    var Span145 = document.createElement('span');
    Span145.textContent = 'Guardians of the Galaxy Vol. 3';
    Anchor145.appendChild(Image145);
    Anchor145.appendChild(Span145);
    Container145.appendChild(Anchor145);
    recentElement.appendChild(Container145);
  
    var Container144 = document.createElement('div');
    Container144.id= "144";
    Container144.className = 'container';
    var Anchor144 = document.createElement('a');
    Anchor144.href= './144.html';
    var Image144 = document.createElement('img');
    Image144.src = 'https://cdna.artstation.com/p/assets/images/images/059/197/190/large/vindz-henchman-bf919a83-511f-460f-8bdd-2626eeb3c134.jpg?1675857236';
    Image144.alt = 'Ant-Man and the Wasp Quantumania';
    var Span144 = document.createElement('span');
    Span144.textContent = 'Ant-Man and the Wasp Quantumania';
    Anchor144.appendChild(Image144);
    Anchor144.appendChild(Span144);
    Container144.appendChild(Anchor144);
    recentElement.appendChild(Container144);
  
    var Container143 = document.createElement('div');
    Container143.id= "143";
    Container143.className = 'container';
    var Anchor143 = document.createElement('a');
    Anchor143.href= './143.html';
    var Image143 = document.createElement('img');
    Image143.src = 'https://i.redd.it/68ka12lvrqc91.jpg';
    Image143.alt = 'Black Panther: Wakanda Forever';
    var Span143 = document.createElement('span');
    Span143.textContent = 'Black Panther: Wakanda Forever';
    Anchor143.appendChild(Image143);
    Anchor143.appendChild(Span143);
    Container143.appendChild(Anchor143);
    recentElement.appendChild(Container143);
  
    var Container142 = document.createElement('div');
    Container142.id= "142";
    Container142.className = 'container';
    var Anchor142 = document.createElement('a');
    Anchor142.href= './142.html';
    var Image142 = document.createElement('img');
    Image142.src = 'https://i.etsystatic.com/37166133/r/il/0f5b32/4226342298/il_fullxfull.4226342298_t0py.jpg';
    Image142.alt = 'Thor Love and Thunder';
    var Span142 = document.createElement('span');
    Span142.textContent = 'Thor Love and Thunder';
    Anchor142.appendChild(Image142);
    Anchor142.appendChild(Span142);
    Container142.appendChild(Anchor142);
    recentElement.appendChild(Container142);
  
    var Container141 = document.createElement('div');
    Container141.id= "141";
    Container141.className = 'container';
    var Anchor141 = document.createElement('a');
    Anchor141.href= './141.html';
    var Image141 = document.createElement('img');
    Image141.src = 'https://hedwig-cf.netmarble.com/forum-common/mherosgb/futurefight_en/thumbnail/48331ec4b81f4205a9d95918f08395b4_1644822375546_d.jpg';
    Image141.alt = 'Dr. Strange in the Multiverse of Madness';
    var Span141 = document.createElement('span');
    Span141.textContent = 'Dr. Strange in the Multiverse of Madness';
    Anchor141.appendChild(Image141);
    Anchor141.appendChild(Span141);
    Container141.appendChild(Anchor141);
    recentElement.appendChild(Container141);
  
    var Container140 = document.createElement('div');
    Container140.id= "140";
    Container140.className = 'container';
    var Anchor140 = document.createElement('a');
    Anchor140.href= './140.html';
    var Image140 = document.createElement('img');
    Image140.src = 'https://m.media-amazon.com/images/I/81KWTMl0JUL._AC_UF1000,1000_QL80_.jpg';
    Image140.alt = 'Spider-Man No Way Home';
    var Span140 = document.createElement('span');
    Span140.textContent = 'Spider-Man No Way Home';
    Anchor140.appendChild(Image140);
    Anchor140.appendChild(Span140);
    Container140.appendChild(Anchor140);
    recentElement.appendChild(Container140);
  
    var Container139 = document.createElement('div');
    Container139.id= "139";
    Container139.className = 'container';
    var Anchor139 = document.createElement('a');
    Anchor139.href= './139.html';
    var Image139 = document.createElement('img');
    Image139.src = 'https://myhotposters.com/cdn/shop/products/mL5735_1024x1024.jpg?v=1636403352';
    Image139.alt = 'Eternals';
    var Span139 = document.createElement('span');
    Span139.textContent = 'Eternals';
    Anchor139.appendChild(Image139);
    Anchor139.appendChild(Span139);
    Container139.appendChild(Anchor139);
    recentElement.appendChild(Container139);
  
    var Container138 = document.createElement('div');
    Container138.id= "138";
    Container138.className = 'container';
    var Anchor138 = document.createElement('a');
    Anchor138.href= './138.html';
    var Image138 = document.createElement('img');
    Image138.src = 'https://posterspy.com/wp-content/uploads/2021/08/shang-chi-2.jpg';
    Image138.alt = 'Shang Chi and the Legends of Ten Rings';
    var Span138 = document.createElement('span');
    Span138.textContent = 'Shang Chi and the Legends of Ten Rings';
    Anchor138.appendChild(Image138);
    Anchor138.appendChild(Span138);
    Container138.appendChild(Anchor138);
    recentElement.appendChild(Container138);
  
    var Container137 = document.createElement('div');
    Container137.id= "137";
    Container137.className = 'container';
    var Anchor137 = document.createElement('a');
    Anchor137.href= './137.html';
    var Image137 = document.createElement('img');
    Image137.src = 'https://image.over-blog.com/5TOo9ZUIqE1HgcX8EkU-hg5npf4=/filters:no_upscale()/image%2F1837269%2F20210103%2Fob_b2022b_black-widow-3-1.jpg';
    Image137.alt = 'Black Widow';
    var Span137 = document.createElement('span');
    Span137.textContent = 'Black Widow';
    Anchor137.appendChild(Image137);
    Anchor137.appendChild(Span137);
    Container137.appendChild(Anchor137);
    recentElement.appendChild(Container137);
  
    var Container136 = document.createElement('div');
    Container136.id= "136";
    Container136.className = 'container';
    var Anchor136 = document.createElement('a');
    Anchor136.href= './136.html';
    var Image136 = document.createElement('img');
    Image136.src = 'https://i.redd.it/xh45hyv7vy631.jpg';
    Image136.alt = 'Spider-Man Far From Home';
    var Span136 = document.createElement('span');
    Span136.textContent = 'Spider-Man Far From Home';
    Anchor136.appendChild(Image136);
    Anchor136.appendChild(Span136);
    Container136.appendChild(Anchor136);
    recentElement.appendChild(Container136);
  
    var Container135 = document.createElement('div');
    Container135.id= "135";
    Container135.className = 'container';
    var Anchor135 = document.createElement('a');
    Anchor135.href= './135.html';
    var Image135 = document.createElement('img');
    Image135.src = 'https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90';
    Image135.alt = 'Avengers Endgame';
    var Span135 = document.createElement('span');
    Span135.textContent = 'Avengers Endgame';
    Anchor135.appendChild(Image135);
    Anchor135.appendChild(Span135);
    Container135.appendChild(Anchor135);
    recentElement.appendChild(Container135);
  
    var Container134 = document.createElement('div');
    Container134.id= "134";
    Container134.className = 'container';
    var Anchor134 = document.createElement('a');
    Anchor134.href= './134.html';
    var Image134 = document.createElement('img');
    Image134.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dctmaca-c8d960ef-e836-4aa3-8ad8-47789dd3136d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3NGIzNmYwLTc3NzEtNDE4OC1iMzgyLWFkZTJkNDk1NTQ0YVwvZGN0bWFjYS1jOGQ5NjBlZi1lODM2LTRhYTMtOGFkOC00Nzc4OWRkMzEzNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W64jpwFONlTxUNrhRbIW4gbqB4rghatAlJQAXXBMMh0';
    Image134.alt = 'Captain Marvel';
    var Span134 = document.createElement('span');
    Span134.textContent = 'Captain Marvel';
    Anchor134.appendChild(Image134);
    Anchor134.appendChild(Span134);
    Container134.appendChild(Anchor134);
    recentElement.appendChild(Container134);
  
    var Container133 = document.createElement('div');
    Container133.id= "133";
    Container133.className = 'container';
    var Anchor133 = document.createElement('a');
    Anchor133.href= './133.html';
    var Image133 = document.createElement('img');
    Image133.src = 'https://wallpapers.com/images/hd/spider-man-into-the-spider-verse-cool-poster-wnb6jid6d3rhlanc.jpg';
    Image133.alt = 'Spider-Man into the Spider-Verse';
    var Span133 = document.createElement('span');
    Span133.textContent = 'Spider-Man into the Spider-Verse';
    Anchor133.appendChild(Image133);
    Anchor133.appendChild(Span133);
    Container133.appendChild(Anchor133);
    recentElement.appendChild(Container133);
  
    var Container132 = document.createElement('div');
    Container132.id= "132";
    Container132.className = 'container';
    var Anchor132 = document.createElement('a');
    Anchor132.href= './132.html';
    var Image132 = document.createElement('img');
    Image132.src = 'https://collider.com/wp-content/uploads/2018/06/ant-man-and-the-wasp-imax-poster.jpg';
    Image132.alt = 'Ant-Man and the Wasp';
    var Span132 = document.createElement('span');
    Span132.textContent = 'Ant-Man and the Wasp';
    Anchor132.appendChild(Image132);
    Anchor132.appendChild(Span132);
    Container132.appendChild(Anchor132);
    recentElement.appendChild(Container132);
  
    var Container131 = document.createElement('div');
    Container131.id= "131";
    Container131.className = 'container';
    var Anchor131 = document.createElement('a');
    Anchor131.href= './131.html';
    var Image131 = document.createElement('img');
    Image131.src = 'https://i.etsystatic.com/35681979/r/il/cf791c/3900202876/il_570xN.3900202876_1cw9.jpg';
    Image131.alt = 'Avengers Infinity War';
    var Span131 = document.createElement('span');
    Span131.textContent = 'Avengers Infinity War';
    Anchor131.appendChild(Image131);
    Anchor131.appendChild(Span131);
    Container131.appendChild(Anchor131);
    recentElement.appendChild(Container131);
  
    var Container130 = document.createElement('div');
    Container130.id= "130";
    Container130.className = 'container';
    var Anchor130 = document.createElement('a');
    Anchor130.href= './130.html';
    var Image130 = document.createElement('img');
    Image130.src = 'https://rukminim2.flixcart.com/image/850/1000/ji6b2q80/poster/u/x/m/medium-mv3315-black-panther-7-original-imaf6yyjcuraxhch.jpeg?q=20';
    Image130.alt = 'Black Panther';
    var Span130 = document.createElement('span');
    Span130.textContent = 'Black Panther';
    Anchor130.appendChild(Image130);
    Anchor130.appendChild(Span130);
    Container130.appendChild(Anchor130);
    recentElement.appendChild(Container130);
  
    var Container129 = document.createElement('div');
    Container129.id= "129";
    Container129.className = 'container';
    var Anchor129 = document.createElement('a');
    Anchor129.href= './129.html';
    var Image129 = document.createElement('img');
    Image129.src = 'https://alternativemovieposters.com/wp-content/uploads/2022/05/JohnDunn_Ragnarok.jpg';
    Image129.alt = 'Thor Ragnarok';
    var Span129 = document.createElement('span');
    Span129.textContent = 'Thor Ragnarok';
    Anchor129.appendChild(Image129);
    Anchor129.appendChild(Span129);
    Container129.appendChild(Anchor129);
    recentElement.appendChild(Container129);
  
    var Container128 = document.createElement('div');
    Container128.id= "128";
    Container128.className = 'container';
    var Anchor128 = document.createElement('a');
    Anchor128.href= './128.html';
    var Image128 = document.createElement('img');
    Image128.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d718f854430629.595b64116b15c.jpg';
    Image128.alt = 'Spider-Man Homecoming';
    var Span128 = document.createElement('span');
    Span128.textContent = 'Spider-Man Homecoming';
    Anchor128.appendChild(Image128);
    Anchor128.appendChild(Span128);
    Container128.appendChild(Anchor128);
    recentElement.appendChild(Container128);
  
    var Container127 = document.createElement('div');
    Container127.id= "127";
    Container127.className = 'container';
    var Anchor127 = document.createElement('a');
    Anchor127.href= './127.html';
    var Image127 = document.createElement('img');
    Image127.src = 'https://i.etsystatic.com/12729518/r/il/a1129c/1974320142/il_fullxfull.1974320142_s7jp.jpg';
    Image127.alt = 'Guardians of The Galaxy Vol. 2';
    var Span127 = document.createElement('span');
    Span127.textContent = 'Guardians of The Galaxy Vol. 2';
    Anchor127.appendChild(Image127);
    Anchor127.appendChild(Span127);
    Container127.appendChild(Anchor127);
    recentElement.appendChild(Container127);
  
    var Container126 = document.createElement('div');
    Container126.id= "126";
    Container126.className = 'container';
    var Anchor126 = document.createElement('a');
    Anchor126.href= './126.html';
    var Image126 = document.createElement('img');
    Image126.src = 'https://i.pinimg.com/originals/bf/2e/91/bf2e91ff2203add4e60dd8b913135698.jpg';
    Image126.alt = 'Doctor Strange';
    var Span126 = document.createElement('span');
    Span126.textContent = 'Doctor Strange';
    Anchor126.appendChild(Image126);
    Anchor126.appendChild(Span126);
    Container126.appendChild(Anchor126);
    recentElement.appendChild(Container126);
  
    var Container125 = document.createElement('div');
    Container125.id= "125";
    Container125.className = 'container';
    var Anchor125 = document.createElement('a');
    Anchor125.href= './125.html';
    var Image125 = document.createElement('img');
    Image125.src = 'https://www.themoviedb.org/t/p/original/iLWcIeNzgvCT3i19dds6EIIjWZS.jpg';
    Image125.alt = 'Captain America Civil War';
    var Span125 = document.createElement('span');
    Span125.textContent = 'Captain America Civil War';
    Anchor125.appendChild(Image125);
    Anchor125.appendChild(Span125);
    Container125.appendChild(Anchor125);
    recentElement.appendChild(Container125);
  
    var Container124 = document.createElement('div');
    Container124.id= "124";
    Container124.className = 'container';
    var Anchor124 = document.createElement('a');
    Anchor124.href= './124.html';
    var Image124 = document.createElement('img');
    Image124.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/eb63f426694999.563590f04945e.jpg';
    Image124.alt = 'Ant-Man';
    var Span124 = document.createElement('span');
    Span124.textContent = 'Ant-Man';
    Anchor124.appendChild(Image124);
    Anchor124.appendChild(Span124);
    Container124.appendChild(Anchor124);
    recentElement.appendChild(Container124);
  
    var Container123 = document.createElement('div');
    Container123.id= "123";
    Container123.className = 'container';
    var Anchor123 = document.createElement('a');
    Anchor123.href= './123.html';
    var Image123 = document.createElement('img');
    Image123.src = 'https://rukminim2.flixcart.com/image/850/1000/k4ehnrk0/poster/c/n/r/medium-the-avengers-age-of-ultron-captain-america-black-widow-original-imafn4shuqq5z9hc.jpeg?q=90';
    Image123.alt = 'Avengers Age of Ultron';
    var Span123 = document.createElement('span');
    Span123.textContent = 'Avengers Age of Ultron';
    Anchor123.appendChild(Image123);
    Anchor123.appendChild(Span123);
    Container123.appendChild(Anchor123);
    recentElement.appendChild(Container123);
  
    var Container122 = document.createElement('div');
    Container122.id= "122";
    Container122.className = 'container';
    var Anchor122 = document.createElement('a');
    Anchor122.href= './122.html';
    var Image122 = document.createElement('img');
    Image122.src = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71lbFfxfMtL._AC_UF1000,1000_QL80_.jpg';
    Image122.alt = 'Guardians of the Galaxy';
    var Span122 = document.createElement('span');
    Span122.textContent = 'Guardians of the Galaxy';
    Anchor122.appendChild(Image122);
    Anchor122.appendChild(Span122);
    Container122.appendChild(Anchor122);
    recentElement.appendChild(Container122);
  
    var Container121 = document.createElement('div');
    Container121.id= "121";
    Container121.className = 'container';
    var Anchor121 = document.createElement('a');
    Anchor121.href= './121.html';
    var Image121 = document.createElement('img');
    Image121.src = 'https://posterspy.com/wp-content/uploads/2022/06/THE-AMAZING-SPIDERMAN.jpg';
    Image121.alt = 'The Amazing Spider-Man 2';
    var Span121 = document.createElement('span');
    Span121.textContent = 'The Amazing Spider-Man 2';
    Anchor121.appendChild(Image121);
    Anchor121.appendChild(Span121);
    Container121.appendChild(Anchor121);
    recentElement.appendChild(Container121);
  
    var Container120 = document.createElement('div');
    Container120.id= "120";
    Container120.className = 'container';
    var Anchor120 = document.createElement('a');
    Anchor120.href= './120.html';
    var Image120 = document.createElement('img');
    Image120.src = 'https://i.pinimg.com/originals/c7/79/20/c77920e3bf2549cc27858cf0e57771f1.jpg';
    Image120.alt = 'Captain America The Winter Soldier';
    var Span120 = document.createElement('span');
    Span120.textContent = 'Captain America The Winter Soldier';
    Anchor120.appendChild(Image120);
    Anchor120.appendChild(Span120);
    Container120.appendChild(Anchor120);
    recentElement.appendChild(Container120);
  
    var Container119 = document.createElement('div');
    Container119.id= "119";
    Container119.className = 'container';
    var Anchor119 = document.createElement('a');
    Anchor119.href= './119.html';
    var Image119 = document.createElement('img');
    Image119.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6fbkuh-86805423-1675-442e-9678-5d1b20c0381f.png/v1/fill/w_1024,h_1326/thor__the_dark_world___poster_ii_by_mrsteiners_d6fbkuh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyNiIsInBhdGgiOiJcL2ZcL2M1NjZiMzYwLWRjYzAtNGY4ZC04MTU0LTA1ZTgxMjNkMGQzNlwvZDZmYmt1aC04NjgwNTQyMy0xNjc1LTQ0MmUtOTY3OC01ZDFiMjBjMDM4MWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J2XG4GAcEbHFywbZ0kkYzZEXlDrnHt7-G3GHpvsgHyA';
    Image119.alt = 'Thor The Dark World';
    var Span119 = document.createElement('span');
    Span119.textContent = 'Thor The Dark World';
    Anchor119.appendChild(Image119);
    Anchor119.appendChild(Span119);
    Container119.appendChild(Anchor119);
    recentElement.appendChild(Container119);
  
    var Container118 = document.createElement('div');
    Container118.id= "118";
    Container118.className = 'container';
    var Anchor118 = document.createElement('a');
    Anchor118.href= './118.html';
    var Image118 = document.createElement('img');
    Image118.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42895cc9-92d1-4cbe-8753-4bae740457ec/d5wmyho-87e711d4-1148-4034-a661-965a877a63e3.png/v1/fill/w_1024,h_1420,q_80,strp/iron_man_3__fan_made__movie_poster_v8_by_diamonddesignhd_d5wmyho-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyODk1Y2M5LTkyZDEtNGNiZS04NzUzLTRiYWU3NDA0NTdlY1wvZDV3bXloby04N2U3MTFkNC0xMTQ4LTQwMzQtYTY2MS05NjVhODc3YTYzZTMucG5nIiwiaGVpZ2h0IjoiPD0xNDIwIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDI4OTVjYzktOTJkMS00Y2JlLTg3NTMtNGJhZTc0MDQ1N2VjXC9kaWFtb25kZGVzaWduaGQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.Ido-luYQ-hXj8Bp3I0sJL215UsXTKqUNQYqsrcKm7-0';
    Image118.alt = 'Iron Man 3';
    var Span118 = document.createElement('span');
    Span118.textContent = 'Iron Man 3';
    Anchor118.appendChild(Image118);
    Anchor118.appendChild(Span118);
    Container118.appendChild(Anchor118);
    recentElement.appendChild(Container118);
  
    var Container117 = document.createElement('div');
    Container117.id= "117";
    Container117.className = 'container';
    var Anchor117 = document.createElement('a');
    Anchor117.href= './117.html';
    var Image117 = document.createElement('img');
    Image117.src = 'https://img.wonderhowto.com/img/19/28/63472258645915/0/avengers-2012-poster-and-fan-art.w1456.jpg';
    Image117.alt = 'The Avengers';
    var Span117 = document.createElement('span');
    Span117.textContent = 'The Avengers';
    Anchor117.appendChild(Image117);
    Anchor117.appendChild(Span117);
    Container117.appendChild(Anchor117);
    recentElement.appendChild(Container117);
  
    var Container116 = document.createElement('div');
    Container116.id= "116";
    Container116.className = 'container';
    var Anchor116 = document.createElement('a');
    Anchor116.href= './116.html';
    var Image116 = document.createElement('img');
    Image116.src = 'https://i.pinimg.com/originals/6d/26/08/6d2608f2fd20562f61a443d92929e042.jpg';
    Image116.alt = 'The Amazing Spider-Man';
    var Span116 = document.createElement('span');
    Span116.textContent = 'The Amazing Spider-Man';
    Anchor116.appendChild(Image116);
    Anchor116.appendChild(Span116);
    Container116.appendChild(Anchor116);
    recentElement.appendChild(Container116);
  
    var Container115 = document.createElement('div');
    Container115.id= "115";
    Container115.className = 'container';
    var Anchor115 = document.createElement('a');
    Anchor115.href= './115.html';
    var Image115 = document.createElement('img');
    Image115.src = 'https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg';
    Image115.alt = 'Captain America The First Avenger';
    var Span115 = document.createElement('span');
    Span115.textContent = 'Captain America The First Avenger';
    Anchor115.appendChild(Image115);
    Anchor115.appendChild(Span115);
    Container115.appendChild(Anchor115);
    recentElement.appendChild(Container115);
  
    var Container114 = document.createElement('div');
    Container114.id= "114";
    Container114.className = 'container';
    var Anchor114 = document.createElement('a');
    Anchor114.href= './114.html';
    var Image114 = document.createElement('img');
    Image114.src = 'https://i.pinimg.com/736x/ba/f9/b9/baf9b9b65668a5d4bac2ce68aeb5fb7d.jpg';
    Image114.alt = 'Thor';
    var Span114 = document.createElement('span');
    Span114.textContent = 'Thor';
    Anchor114.appendChild(Image114);
    Anchor114.appendChild(Span114);
    Container114.appendChild(Anchor114);
    recentElement.appendChild(Container114);
    
    var Container113 = document.createElement('div');
    Container113.id= "113";
    Container113.className = 'container';
    var Anchor113 = document.createElement('a');
    Anchor113.href= './113.html';
    var Image113 = document.createElement('img');
    Image113.src = 'https://i.pinimg.com/originals/1f/e9/88/1fe9882091f41910fae12f881c6de592.jpg';
    Image113.alt = 'Iron Man 2';
    var Span113 = document.createElement('span');
    Span113.textContent = 'Iron Man 2';
    Anchor113.appendChild(Image113);
    Anchor113.appendChild(Span113);
    Container113.appendChild(Anchor113);
    recentElement.appendChild(Container113);
  
    var Container112 = document.createElement('div');
    Container112.id= "112";
    Container112.className = 'container';
    var Anchor112 = document.createElement('a');
    Anchor112.href= './112.html';
    var Image112 = document.createElement('img');
    Image112.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/c9cc26104258611.5f5f69fcc5dce.jpg';
    Image112.alt = 'The Incredible Hulk';
    var Span112 = document.createElement('span');
    Span112.textContent = 'The Incredible Hulk';
    Anchor112.appendChild(Image112);
    Anchor112.appendChild(Span112);
    Container112.appendChild(Anchor112);
    recentElement.appendChild(Container112);
  
    var Container111 = document.createElement('div');
    Container111.id= "111";
    Container111.className = 'container';
    var Anchor111 = document.createElement('a');
    Anchor111.href= './111.html';
    var Image111 = document.createElement('img');
    Image111.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/4627fe72571409.5bebed617acbb.jpg';
    Image111.alt = 'Iron Man';
    var Span111 = document.createElement('span');
    Span111.textContent = 'Iron Man';
    Anchor111.appendChild(Image111);
    Anchor111.appendChild(Span111);
    Container111.appendChild(Anchor111);
    recentElement.appendChild(Container111);
  
    var Container110 = document.createElement('div');
    Container110.id= "110";
    Container110.className = 'container';
    var Anchor110 = document.createElement('a');
    Anchor110.href= './110.html';
    var Image110 = document.createElement('img');
    Image110.src = 'https://play-lh.googleusercontent.com/nOvXZXRd6f0d51eSaTnwQccS6_QguJv92MgwaUvIC8F0OeZI1NutnZyUAkBTkIZi_UL69g=w240-h480-rw';
    Image110.alt = 'Spider-Man 3';
    var Span110 = document.createElement('span');
    Span110.textContent = 'Spider-Man 3';
    Anchor110.appendChild(Image110);
    Anchor110.appendChild(Span110);
    Container110.appendChild(Anchor110);
    recentElement.appendChild(Container110);
  
    var Container109 = document.createElement('div');
    Container109.id= "109";
    Container109.className = 'container';
    var Anchor109 = document.createElement('a');
    Anchor109.href= './109.html';
    var Image109 = document.createElement('img');
    Image109.src = 'https://www.themoviedb.org/t/p/original/sH8hK05NQSaiq7riNl2lLlfmRiV.jpg';
    Image109.alt = 'Spider-Man 2';
    var Span109 = document.createElement('span');
    Span109.textContent = 'Spider-Man 2';
    Anchor109.appendChild(Image109);
    Anchor109.appendChild(Span109);
    Container109.appendChild(Anchor109);
    recentElement.appendChild(Container109);
  
    var Container108 = document.createElement('div');
    Container108.id= "108";
    Container108.className = 'container';
    var Anchor108 = document.createElement('a');
    Anchor108.href= './108.html';
    var Image108 = document.createElement('img');
    Image108.src = 'https://www.themoviedb.org/t/p/original/kjdJntyBeEvqm9w97QGBdxPptzj.jpg';
    Image108.alt = 'Spider-Man';
    var Span108 = document.createElement('span');
    Span108.textContent = 'Spider-Man';
    Anchor108.appendChild(Image108);
    Anchor108.appendChild(Span108);
    Container108.appendChild(Anchor108);
    recentElement.appendChild(Container108);
  
    var Container107 = document.createElement('div');
    Container107.id= "107";
    Container107.className = 'container';
    var Anchor107 = document.createElement('a');
    Anchor107.href= './107.html';
    var Image107 = document.createElement('img');
    Image107.src = 'https://cdn.europosters.eu/image/750/posters/ben-10-omniverse-i14157.jpg';
    Image107.alt = 'Ben 10 Omniverse';
    var Span107 = document.createElement('span');
    Span107.textContent = 'Ben 10 Omniverse';
    Anchor107.appendChild(Image107);
    Anchor107.appendChild(Span107);
    Container107.appendChild(Anchor107);
    recentElement.appendChild(Container107);
  
    var Container106 = document.createElement('div');
    Container106.id= "106";
    Container106.className = 'container';
    var Anchor106 = document.createElement('a');
    Anchor106.href= './106.html';
    var Image106 = document.createElement('img');
    Image106.src = 'https://m.media-amazon.com/images/M/MV5BNzgxYjcwNDUtZTcxZS00NmIyLWI3OTAtNTQ3NzZjM2RkMTFkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg';
    Image106.alt = 'Ben 10 Ultimate Aliens';
    var Span106 = document.createElement('span');
    Span106.textContent = 'Ben 10 Ultimate Aliens';
    Anchor106.appendChild(Image106);
    Anchor106.appendChild(Span106);
    Container106.appendChild(Anchor106);
    recentElement.appendChild(Container106);
  
    var Container105 = document.createElement('div');
    Container105.id= "105";
    Container105.className = 'container';
    var Anchor105 = document.createElement('a');
    Anchor105.href= './105.html';
    var Image105 = document.createElement('img');
    Image105.src = 'https://xl.movieposterdb.com/10_02/2009/1327701/xl_1327701_2f0e9a4b.jpg';
    Image105.alt = 'Ben 10 Alien Swarm';
    var Span105 = document.createElement('span');
    Span105.textContent = 'Ben 10 Alien Swarm';
    Anchor105.appendChild(Image105);
    Anchor105.appendChild(Span105);
    Container105.appendChild(Anchor105);
    recentElement.appendChild(Container105);
  
    var Container104 = document.createElement('div');
    Container104.id= "104";
    Container104.className = 'container';
    var Anchor104 = document.createElement('a');
    Anchor104.href= './104.html';
    var Image104 = document.createElement('img');
    Image104.src = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ZhAoGTvqL._AC_UF894,1000_QL80_.jpg';
    Image104.alt = 'Ben 10 Alien Force';
    var Span104 = document.createElement('span');
    Span104.textContent = 'Ben 10: Alien Force';
    Anchor104.appendChild(Image104);
    Anchor104.appendChild(Span104);
    Container104.appendChild(Anchor104);
    recentElement.appendChild(Container104);
  
    var Container103 = document.createElement('div');
    Container103.id= "103";
    Container103.className = 'container';
    var Anchor103 = document.createElement('a');
    Anchor103.href= './103.html';
    var Image103 = document.createElement('img');
    Image103.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Ben_10_race_against_time_poster.jpg/220px-Ben_10_race_against_time_poster.jpg';
    Image103.alt = 'Ben 10 Race Against Time';
    var Span103 = document.createElement('span');
    Span103.textContent = 'Ben 10 Race Against Time';
    Anchor103.appendChild(Image103);
    Anchor103.appendChild(Span103);
    Container103.appendChild(Anchor103);
    recentElement.appendChild(Container103);
  
    var Container102 = document.createElement('div');
    Container102.id= "102";
    Container102.className = 'container';
    var Anchor102 = document.createElement('a');
    Anchor102.href= './102.html';
    var Image102 = document.createElement('img');
    Image102.src = 'https://pics.filmaffinity.com/Ben_10_Destroy_All_Aliens_TV-837070270-large.jpg';
    Image102.alt = 'Ben 10 Destroy All Aliens';
    var Span102 = document.createElement('span');
    Span102.textContent = 'Ben 10 Destroy All Aliens';
    Anchor102.appendChild(Image102);
    Anchor102.appendChild(Span102);
    Container102.appendChild(Anchor102);
    recentElement.appendChild(Container102);
  
    var Container101 = document.createElement('div');
    Container101.id= "101";
    Container101.className = 'container';
    var Anchor101 = document.createElement('a');
    Anchor101.href= './101.html';
    var Image101 = document.createElement('img');
    Image101.src = 'https://www.picclickimg.com/ezYAAOSw25dfJnm-/56sealed-Ben-10-Secret-Of-The-Omnitrix-R4.webp';
    Image101.alt = 'Ben 10 Secret of the Omnitrix';
    var Span101 = document.createElement('span');
    Span101.textContent = 'Ben 10 Secret of the Omnitrix';
    Anchor101.appendChild(Image101);
    Anchor101.appendChild(Span101);
    Container101.appendChild(Anchor101);
    recentElement.appendChild(Container101);
    
    var Container100 = document.createElement('div');
    Container100.id = '100';
    Container100.className = 'container';
    var Anchor100 = document.createElement('a');
    Anchor100.href = './100.html';
    var Image100 = document.createElement('img');
    Image100.src = 'https://i.pinimg.com/474x/0d/dd/b8/0dddb82efd7661a0d612afe5d9215890.jpg';
    Image100.alt = 'Ben 10 (2005)';
    var Span100 = document.createElement('span');
    Span100.textContent = 'Ben 10 (2005)';
    Anchor100.appendChild(Image100);
    Anchor100.appendChild(Span100);
    Container100.appendChild(Anchor100);
    recentElement.appendChild(Container100);

    var Container99 = document.createElement('div');
    Container99.id = '99';
    Container99.className = 'container';
    var Anchor99 = document.createElement('a');
    Anchor99.href = './99.html';
    var Image99 = document.createElement('img');
    Image99.src = 'https://preview.redd.it/power-rangers-cosmic-fury-fanmade-poster-v0-or9vr5xss7pb1.jpg?width=2824&format=pjpg&auto=webp&s=c0af78d12e26572332f322058e6b62d10a369e6c';
    Image99.alt = 'Power Rangers Cosmic Fury'
    var Span99 = document.createElement('span');
    Span99.textContent = 'Power Rangers Cosmic Fury'
    Anchor99.appendChild(Image99);
    Anchor99.appendChild(Span99);
    Container99.appendChild(Anchor99);
    recentElement.appendChild(Container99);
  
    var Container98 = document.createElement('div');
    Container98.id = '98';
    Container98.className = 'container';
    var Anchor98 = document.createElement('a');
    Anchor98.href = './98.html';
    var Image98 = document.createElement('img');
    Image98.src = 'https://m.media-amazon.com/images/M/MV5BNTg1YjE4MWItNGM5MS00ODM4LWE5ODktODdjM2ExYjMxNjBlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg';
    Image98.alt = 'Power Rangers Dino Fury'
    var Span98 = document.createElement('span');
    Span98.textContent = 'Power Rangers Dino Fury'
    Anchor98.appendChild(Image98);
    Anchor98.appendChild(Span98);
    Container98.appendChild(Anchor98);
    recentElement.appendChild(Container98);
  
    var Container97 = document.createElement('div');
    Container97.id = '97';
    Container97.className = 'container';
    var Anchor97 = document.createElement('a');
    Anchor97.href = './97.html';
    var Image97 = document.createElement('img');
    Image97.src = 'https://www.themoviedb.org/t/p/original/pw9Za2j51TFbkQr23IuWfpKCXrk.jpg';
    Image97.alt = 'Power Rangers Beast Morphers'
    var Span97 = document.createElement('span');
    Span97.textContent = 'Power Rangers Beast Morphers'
    Anchor97.appendChild(Image97);
    Anchor97.appendChild(Span97);
    Container97.appendChild(Anchor97);
    recentElement.appendChild(Container97);
  
    var Container96 = document.createElement('div');
    Container96.id = '96';
    Container96.className = 'container';
    var Anchor96 = document.createElement('a');
    Anchor96.href = './96.html';
    var Image96 = document.createElement('img');
    Image96.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c663d6a-c832-4424-acaf-a00a6a095a29/dbppsry-f7c9ba06-f987-4339-87db-1354ea5c9fdb.png/v1/fill/w_400,h_500/power_rangers_super_ninja_steel_by_andiemasterson_dbppsry-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjNjYzZDZhLWM4MzItNDQyNC1hY2FmLWEwMGE2YTA5NWEyOVwvZGJwcHNyeS1mN2M5YmEwNi1mOTg3LTQzMzktODdkYi0xMzU0ZWE1YzlmZGIucG5nIiwiaGVpZ2h0IjoiPD01MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzNjNjYzZDZhLWM4MzItNDQyNC1hY2FmLWEwMGE2YTA5NWEyOVwvYW5kaWVtYXN0ZXJzb24tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.EDj7LoPjMLnuKC8Z2ldODcw8UEV0pUqCdpCJzO6MOog';
    Image96.alt = 'Power Rangers Ninja Steel'
    var Span96 = document.createElement('span');
    Span96.textContent = 'Power Rangers Ninja Steel'
    Anchor96.appendChild(Image96);
    Anchor96.appendChild(Span96);
    Container96.appendChild(Anchor96);
    recentElement.appendChild(Container96);
  
    var Container95 = document.createElement('div');
    Container95.id = '95';
    Container95.className = 'container';
    var Anchor95 = document.createElement('a');
    Anchor95.href = './95.html';
    var Image95 = document.createElement('img');
    Image95.src = 'https://i.pinimg.com/736x/5d/6f/4d/5d6f4dbeca3131806fbc2b43c16ebd86.jpg';
    Image95.alt = 'Power Rangers Dino Charge'
    var Span95 = document.createElement('span');
    Span95.textContent = 'Power Rangers Dino Charge'
    Anchor95.appendChild(Image95);
    Anchor95.appendChild(Span95);
    Container95.appendChild(Anchor95);
    recentElement.appendChild(Container95);
  
    var Container94 = document.createElement('div');
    Container94.id = '94';
    Container94.className = 'container';
    var Anchor94 = document.createElement('a');
    Anchor94.href = './94.html';
    var Image94 = document.createElement('img');
    Image94.src = 'https://i.pinimg.com/originals/c4/a0/73/c4a0736b041000d32244f38b1379d196.jpg';
    Image94.alt = 'Power Rangers Megaforce'
    var Span94 = document.createElement('span');
    Span94.textContent = 'Power Rangers Megaforce'
    Anchor94.appendChild(Image94);
    Anchor94.appendChild(Span94);
    Container94.appendChild(Anchor94);
    recentElement.appendChild(Container94);
  
    var Container93 = document.createElement('div');
    Container93.id = '93';
    Container93.className = 'container';
    var Anchor93 = document.createElement('a');
    Anchor93.href = './93.html';
    var Image93 = document.createElement('img');
    Image93.src = 'https://i.pinimg.com/564x/e7/b3/64/e7b3644574487292d92bcd3ffd801ce3.jpg';
    Image93.alt = 'Power Rangers Samurai'
    var Span93 = document.createElement('span');
    Span93.textContent = 'Power Rangers Samurai'
    Anchor93.appendChild(Image93);
    Anchor93.appendChild(Span93);
    Container93.appendChild(Anchor93);
    recentElement.appendChild(Container93);
  
    var Container92 = document.createElement('div');
    Container92.id = '92';
    Container92.className = 'container';
    var Anchor92 = document.createElement('a');
    Anchor92.href = './92.html';
    var Image92 = document.createElement('img');
    Image92.src = 'https://i.redd.it/sxwgvq2njdca1.jpg';
    Image92.alt = 'Power Rangers RPM'
    var Span92 = document.createElement('span');
    Span92.textContent = 'Power Rangers RPM'
    Anchor92.appendChild(Image92);
    Anchor92.appendChild(Span92);
    Container92.appendChild(Anchor92);
    recentElement.appendChild(Container92);
  
    var Container91 = document.createElement('div');
    Container91.id = '91';
    Container91.className = 'container';
    var Anchor91 = document.createElement('a');
    Anchor91.href = './91.html';
    var Image91 = document.createElement('img');
    Image91.src = 'https://m.media-amazon.com/images/M/MV5BOTM1N2Y4ZjMtODU2NC00OWRjLWFhMDAtOGZiZGQ1ZTYyOTgzXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_FMjpg_UX1000_.jpg';
    Image91.alt = 'Power Rangers Jungle Fury'
    var Span91 = document.createElement('span');
    Span91.textContent = 'Power Rangers Jungle Fury'
    Anchor91.appendChild(Image91);
    Anchor91.appendChild(Span91);
    Container91.appendChild(Anchor91);
    recentElement.appendChild(Container91);
  
    var Container90 = document.createElement('div');
    Container90.id = '90';
    Container90.className = 'container';
    var Anchor90 = document.createElement('a');
    Anchor90.href = './90.html';
    var Image90 = document.createElement('img');
    Image90.src = 'https://www.themoviedb.org/t/p/original/zOOvRQ8Sl3lNHRVFUppcP2UX6FJ.jpg';
    Image90.alt = 'Power Rangers Operation Overdrive'
    var Span90 = document.createElement('span');
    Span90.textContent = 'Power Rangers Operation Overdrive'
    Anchor90.appendChild(Image90);
    Anchor90.appendChild(Span90);
    Container90.appendChild(Anchor90);
    recentElement.appendChild(Container90);
  
    var Container89 = document.createElement('div');
    Container89.id = '89';
    Container89.className = 'container';
    var Anchor89 = document.createElement('a');
    Anchor89.href = './89.html';
    var Image89 = document.createElement('img');
    Image89.src = 'https://m.media-amazon.com/images/I/51UvzYuuy9L.jpg';
    Image89.alt = 'Power Rangers Mystic Force'
    var Span89 = document.createElement('span');
    Span89.textContent = 'Power Rangers Mystic Force'
    Anchor89.appendChild(Image89);
    Anchor89.appendChild(Span89);
    Container89.appendChild(Anchor89);
    recentElement.appendChild(Container89);
  
    var Container88 = document.createElement('div');
    Container88.id = '88';
    Container88.className = 'container';
    var Anchor88 = document.createElement('a');
    Anchor88.href = './88.html';
    var Image88 = document.createElement('img');
    Image88.src = 'https://m.media-amazon.com/images/M/MV5BMWJkZmIxZDQtZGQyMS00YzY4LWE0Y2QtM2UwNDc0YTBlNmI0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg';
    Image88.alt = 'Power Rangers S.P.D.'
    var Span88 = document.createElement('span');
    Span88.textContent = 'Power Rangers S.P.D.'
    Anchor88.appendChild(Image88);
    Anchor88.appendChild(Span88);
    Container88.appendChild(Anchor88);
    recentElement.appendChild(Container88);
  
    var Container87 = document.createElement('div');
    Container87.id = '87';
    Container87.className = 'container';
    var Anchor87 = document.createElement('a');
    Anchor87.href = './87.html';
    var Image87 = document.createElement('img');
    Image87.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5dc7d01-7118-4009-8906-0a8f2b348da0/derg3p5-f593af61-b628-4730-8a90-9df65013e927.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1ZGM3ZDAxLTcxMTgtNDAwOS04OTA2LTBhOGYyYjM0OGRhMFwvZGVyZzNwNS1mNTkzYWY2MS1iNjI4LTQ3MzAtOGE5MC05ZGY2NTAxM2U5MjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JjOFWcZcQY49gj1g-G5sc21vTz-TV2EqFVTFJnWIqd0';
    Image87.alt = 'Power Rangers Dino Thunder'
    var Span87 = document.createElement('span');
    Span87.textContent = 'Power Rangers Dino Thunder'
    Anchor87.appendChild(Image87);
    Anchor87.appendChild(Span87);
    Container87.appendChild(Anchor87);
    recentElement.appendChild(Container87);
  
    var Container86 = document.createElement('div');
    Container86.id = '86';
    Container86.className = 'container';
    var Anchor86 = document.createElement('a');
    Anchor86.href = './86.html';
    var Image86 = document.createElement('img');
    Image86.src = 'https://pics.filmaffinity.com/Power_Rangers_Ninja_Storm_TV_Series-557303130-large.jpg';
    Image86.alt = 'Power Rangers Ninja Storm'
    var Span86 = document.createElement('span');
    Span86.textContent = 'Power Rangers Ninja Storm'
    Anchor86.appendChild(Image86);
    Anchor86.appendChild(Span86);
    Container86.appendChild(Anchor86);
    recentElement.appendChild(Container86);
  
    var Container85 = document.createElement('div');
    Container85.id = '85';
    Container85.className = 'container';
    var Anchor85 = document.createElement('a');
    Anchor85.href = './85.html';
    var Image85 = document.createElement('img');
    Image85.src = 'https://pics.filmaffinity.com/power_rangers_wild_force-873378807-large.jpg';
    Image85.alt = 'Power Rangers Wild Force'
    var Span85 = document.createElement('span');
    Span85.textContent = 'Power Rangers Wild Force'
    Anchor85.appendChild(Image85);
    Anchor85.appendChild(Span85);
    Container85.appendChild(Anchor85);
    recentElement.appendChild(Container85);
  
    var Container84 = document.createElement('div');
    Container84.id = '84';
    Container84.className = 'container';
    var Anchor84 = document.createElement('a');
    Anchor84.href = './84.html';
    var Image84 = document.createElement('img');
    Image84.src = 'https://images.genius.com/28ef148e5554a1fc7bfb805a0f3cc169.500x500x1.jpg';
    Image84.alt = 'Power Rangers Time Force'
    var Span84 = document.createElement('span');
    Span84.textContent = 'Power Rangers Time Force'
    Anchor84.appendChild(Image84);
    Anchor84.appendChild(Span84);
    Container84.appendChild(Anchor84);
    recentElement.appendChild(Container84);
  
    var Container83 = document.createElement('div');
    Container83.id = '83';
    Container83.className = 'container';
    var Anchor83 = document.createElement('a');
    Anchor83.href = './83.html';
    var Image83 = document.createElement('img');
    Image83.src = 'https://www.themoviedb.org/t/p/original/qyrqyg8N8kd5Yo1ZH3W0t6HVO45.jpg';
    Image83.alt = 'Power Rangers Lightspeed Rescue'
    var Span83 = document.createElement('span');
    Span83.textContent = 'Power Rangers Lightspeed Rescue'
    Anchor83.appendChild(Image83);
    Anchor83.appendChild(Span83);
    Container83.appendChild(Anchor83);
    recentElement.appendChild(Container83);
  
    var Container82 = document.createElement('div');
    Container82.id = '82';
    Container82.className = 'container';
    var Anchor82 = document.createElement('a');
    Anchor82.href = './82.html';
    var Image82 = document.createElement('img');
    Image82.src = 'https://m.media-amazon.com/images/M/MV5BMjA0NTE0MTU2Nl5BMl5BanBnXkFtZTcwMzk3NzAzMQ@@._V1_FMjpg_UX1000_.jpg';
    Image82.alt = 'Power Rangers Lost Galaxy'
    var Span82 = document.createElement('span');
    Span82.textContent = 'Power Rangers Lost Galaxy'
    Anchor82.appendChild(Image82);
    Anchor82.appendChild(Span82);
    Container82.appendChild(Anchor82);
    recentElement.appendChild(Container82);
  
    var Container81 = document.createElement('div');
    Container81.id = '81';
    Container81.className = 'container';
    var Anchor81 = document.createElement('a');
    Anchor81.href = './81.html';
    var Image81 = document.createElement('img');
    Image81.src = 'https://pics.filmaffinity.com/Power_Rangers_in_Space_TV_Series-849501180-large.jpg';
    Image81.alt = 'Power Rangers In Space'
    var Span81 = document.createElement('span');
    Span81.textContent = 'Power Rangers In Space'
    Anchor81.appendChild(Image81);
    Anchor81.appendChild(Span81);
    Container81.appendChild(Anchor81);
    recentElement.appendChild(Container81);
  
    var Container80 = document.createElement('div');
    Container80.id = '80';
    Container80.className = 'container';
    var Anchor80 = document.createElement('a');
    Anchor80.href = './80.html';
    var Image80 = document.createElement('img');
    Image80.src = 'https://m.media-amazon.com/images/M/MV5BNGExYzJjMzUtNGExMy00YTgwLTgzOTUtMjM5MDEwMTJkMTM1XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg';
    Image80.alt = 'Power Rangers Turbo'
    var Span80 = document.createElement('span');
    Span80.textContent = 'Power Rangers Turbo'
    Anchor80.appendChild(Image80);
    Anchor80.appendChild(Span80);
    Container80.appendChild(Anchor80);
    recentElement.appendChild(Container80);
  
    var Container79 = document.createElement('div');
    Container79.id = '79';
    Container79.className = 'container';
    var Anchor79 = document.createElement('a');
    Anchor79.href = './79.html';
    var Image79 = document.createElement('img');
    Image79.src = 'https://i.pinimg.com/originals/7a/c7/ba/7ac7ba3a686489dd2a56393c181ceb5c.jpg';
    Image79.alt = 'Power Rangers Zeo'
    var Span79 = document.createElement('span');
    Span79.textContent = 'Power Rangers Zeo'
    Anchor79.appendChild(Image79);
    Anchor79.appendChild(Span79);
    Container79.appendChild(Anchor79);
    recentElement.appendChild(Container79);
  
    var Container78 = document.createElement('div');
    Container78.id = '78';
    Container78.className = 'container';
    var Anchor78 = document.createElement('a');
    Anchor78.href = './78.html';
    var Image78 = document.createElement('img');
    Image78.src = 'https://diamondpainting5d.com/wp-content/uploads/2023/01/power-rangers-Mighty-morphin-poster-diamond-by-diamonds.bak_-scaled.jpg';
    Image78.alt = 'Mighty Morphin Power Rangers'
    var Span78 = document.createElement('span');
    Span78.textContent = 'Mighty Morphin Power Rangers'
    Anchor78.appendChild(Image78);
    Anchor78.appendChild(Span78);
    Container78.appendChild(Anchor78);
    recentElement.appendChild(Container78);
  
    var Container77 = document.createElement('div');
    Container77.id = '77';
    Container77.className = 'container';
    var Anchor77 = document.createElement('a');
    Anchor77.href = './77.html';
    var Image77 = document.createElement('img');
    Image77.src = 'https://m.media-amazon.com/images/M/MV5BMTlmNzdiOWUtZmZiYi00ODkyLTk5ZGMtMTcwNzk1MmNjNjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg';
    Image77.alt = 'Power Rangers Once & Always'
    var Span77 = document.createElement('span');
    Span77.textContent = 'Power Rangers Once & Always'
    Anchor77.appendChild(Image77);
    Anchor77.appendChild(Span77);
    Container77.appendChild(Anchor77);
    recentElement.appendChild(Container77);
  
      var Container76 = document.createElement('div');
      Container76.id = '76';
      Container76.className = 'container';
      var Anchor76 = document.createElement('a');
      Anchor76.href = './76.html';
      var Image76 = document.createElement('img');
      Image76.src = 'https://cdn.marvel.com/content/1x/lp_site.jpg';
      Image76.alt = 'I am Groot'
      var Span76 = document.createElement('span');
      Span76.textContent = 'I am Groot'
      Anchor76.appendChild(Image76);
      Anchor76.appendChild(Span76);
      Container76.appendChild(Anchor76);
      recentElement.appendChild(Container76);
      
      var Container75 = document.createElement('div');
      Container75.id = '75';
      Container75.className = 'container';
      var Anchor75 = document.createElement('a');
      Anchor75.href = './75.html';
      var Image75 = document.createElement('img');
      Image75.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/The_Boys_Season_1.jpg/220px-The_Boys_Season_1.jpg';
      Image75.alt = 'The Boys Season 1'
      var Span75 = document.createElement('span');
      Span75.textContent = 'The Boys Season 1'
      Anchor75.appendChild(Image75);
      Anchor75.appendChild(Span75);
      Container75.appendChild(Anchor75);
      recentElement.appendChild(Container75);
    
    var Container74 = document.createElement('div');
    Container74.id = '74';
    Container74.className = 'container';
    var Anchor74 = document.createElement('a');
    Anchor74.href = './74.html';
    var Image74 = document.createElement('img');
    Image74.src = 'https://resizing.flixster.com/9uPRG7s0BvJfYbt1SybFvZs6HRk=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16826251_b_v13_af.jpg';
    Image74.alt = 'The Boys Season 2'
    var Span74 = document.createElement('span');
    Span74.textContent = 'The Boys Season 2'
    Anchor74.appendChild(Image74);
    Anchor74.appendChild(Span74);
    Container74.appendChild(Anchor74);
    recentElement.appendChild(Container74);
    
    var Container73 = document.createElement('div');
    Container73.id = '73';
    Container73.className = 'container';
    var Anchor73 = document.createElement('a');
    Anchor73.href = './73.html';
    var Image73 = document.createElement('img');
    Image73.src = 'https://i.redd.it/7glrwkpttms51.jpg';
    Image73.alt = 'The Boys Season 3'
    var Span73 = document.createElement('span');
    Span73.textContent = 'The Boys Season 3'
    Anchor73.appendChild(Image73);
    Anchor73.appendChild(Span73);
    Container73.appendChild(Anchor73);
    recentElement.appendChild(Container73);
  
    var Container72 = document.createElement('div');
    Container72.id = '72';
    Container72.className = 'container';
    var Anchor72 = document.createElement('a');
    Anchor72.href = './72.html';
    var Image72 = document.createElement('img');
    Image72.src = 'https://www.themoviedb.org/t/p/original/5mpAi9CAoVItqTfVEcwJUCBLPLw.jpg';
    Image72.alt = 'DareDevil Season 1'
    var Span72 = document.createElement('span');
    Span72.textContent = 'DareDevil Season 1'
    Anchor72.appendChild(Image72);
    Anchor72.appendChild(Span72);
    Container72.appendChild(Anchor72);
    recentElement.appendChild(Container72);
    
    var Container71 = document.createElement('div');
    Container71.id = '71';
    Container71.className = 'container';
    var Anchor71 = document.createElement('a');
    Anchor71.href = './71.html';
    var Image71 = document.createElement('img');
    Image71.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65425a1c-1d61-429b-bfa0-7dc046b30c9e/d9vl9pt-12bea807-600b-4d7b-9e91-75c5a89b72c0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NDI1YTFjLTFkNjEtNDI5Yi1iZmEwLTdkYzA0NmIzMGM5ZVwvZDl2bDlwdC0xMmJlYTgwNy02MDBiLTRkN2ItOWU5MS03NWM1YTg5YjcyYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fKyMYWCMsHhqGYBXM35hAsK0-Cv9SELtjEv1uB3W2FM';
    Image71.alt = 'DareDevil Season 2'
    var Span71 = document.createElement('span');
    Span71.textContent = 'DareDevil Season 2'
    Anchor71.appendChild(Image71);
    Anchor71.appendChild(Span71);
    Container71.appendChild(Anchor71);
    recentElement.appendChild(Container71);
    
    var Container70 = document.createElement('div');
    Container70.id = '70';
    Container70.className = 'container';
    var Anchor70 = document.createElement('a');
    Anchor70.href = './70.html';
    var Image70 = document.createElement('img');
    Image70.src = 'https://posterspy.com/wp-content/uploads/2023/05/daredevil-s3-genzo-1280.jpg';
    Image70.alt = 'DareDevil Season 3'
    var Span70 = document.createElement('span');
    Span70.textContent = 'DareDevil Season 3'
    Anchor70.appendChild(Image70);
    Anchor70.appendChild(Span70);
    Container70.appendChild(Anchor70);
    recentElement.appendChild(Container70);
    
    var Container69 = document.createElement('div');
    Container69.id = '69';
    Container69.className = 'container';
    var Anchor69 = document.createElement('a');
    Anchor69.href = './69.html';
    var Image69 = document.createElement('img');
    Image69.src = 'https://alternativemovieposters.com/wp-content/uploads/2021/06/AndyFairhurst_Wandavision.jpg';
    Image69.alt = 'WandaVision'
    var Span69 = document.createElement('span');
    Span69.textContent = 'WandaVision'
    Anchor69.appendChild(Image69);
    Anchor69.appendChild(Span69);
    Container69.appendChild(Anchor69);
    recentElement.appendChild(Container69);
    
    var Container68 = document.createElement('div');
    Container68.id = '68';
    Container68.className = 'container';
    var Anchor68 = document.createElement('a');
    Anchor68.href = './68.html';
    var Image68 = document.createElement('img');
    Image68.src = 'https://pbs.twimg.com/media/Ew9-dILWUAI3jdP.jpg:large';
    Image68.alt = 'The Falcon And The Winter Soldier'
    var Span68 = document.createElement('span');
    Span68.textContent = 'The Falcon And The Winter Soldier'
    Anchor68.appendChild(Image68);
    Anchor68.appendChild(Span68);
    Container68.appendChild(Anchor68);
    recentElement.appendChild(Container68);
    
    var Container67 = document.createElement('div');
    Container67.id = '67';
    Container67.className = 'container';
    var Anchor67 = document.createElement('a');
    Anchor67.href = './67.html';
    var Image67 = document.createElement('img');
    Image67.src = 'https://i.etsystatic.com/18242346/r/il/1c2d51/3186724525/il_570xN.3186724525_ocm2.jpg';
    Image67.alt = 'Loki'
    var Span67 = document.createElement('span');
    Span67.textContent = 'Loki'
    Anchor67.appendChild(Image67);
    Anchor67.appendChild(Span67);
    Container67.appendChild(Anchor67);
    recentElement.appendChild(Container67);
    
    var Container66 = document.createElement('div');
    Container66.id = '66';
    Container66.className = 'container';
    var Anchor66 = document.createElement('a');
    Anchor66.href = './66.html';
    var Image66 = document.createElement('img');
    Image66.src = 'https://i.pinimg.com/736x/62/d4/3b/62d43b73f36577a47210938e3b93f309.jpg';
    Image66.alt = 'What if...?'
    var Span66 = document.createElement('span');
    Span66.textContent = 'What if...?'
    Anchor66.appendChild(Image66);
    Anchor66.appendChild(Span66);
    Container66.appendChild(Anchor66);
    recentElement.appendChild(Container66);
    
    var Container65 = document.createElement('div');
    Container65.id = '65';
    Container65.className = 'container';
    var Anchor65 = document.createElement('a');
    Anchor65.href = './65.html';
    var Image65 = document.createElement('img');
    Image65.src = 'https://www.themoviedb.org/t/p/original/ieouVhOTA7UkwbkMx9IrQXLF3Pg.jpg';
    Image65.alt = 'Hawkeye'
    var Span65 = document.createElement('span');
    Span65.textContent = 'Hawkeye'
    Anchor65.appendChild(Image65);
    Anchor65.appendChild(Span65);
    Container65.appendChild(Anchor65);
    recentElement.appendChild(Container65);
    
    var Container64 = document.createElement('div');
    Container64.id = '64';
    Container64.className = 'container';
    var Anchor64 = document.createElement('a');
    Anchor64.href = './64.html';
    var Image64 = document.createElement('img');
    Image64.src = 'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg';
    Image64.alt = 'Moonknight'
    var Span64 = document.createElement('span');
    Span64.textContent = 'Moonknight'
    Anchor64.appendChild(Image64);
    Anchor64.appendChild(Span64);
    Container64.appendChild(Anchor64);
    recentElement.appendChild(Container64);
    
    var Container63 = document.createElement('div');
    Container63.id = '63';
    Container63.className = 'container';
    var Anchor63 = document.createElement('a');
    Anchor63.href = './63.html';
    var Image63 = document.createElement('img');
    Image63.src = 'https://www.themoviedb.org/t/p/original/owaVvXR4nCOBVJgSnUw2pC6hvEw.jpg';
    Image63.alt = 'Ms. Marvel'
    var Span63 = document.createElement('span');
    Span63.textContent = 'Ms. Marvel'
    Anchor63.appendChild(Image63);
    Anchor63.appendChild(Span63);
    Container63.appendChild(Anchor63);
    recentElement.appendChild(Container63);
  
    var Container62 = document.createElement('div');
    Container62.id = '62';
    Container62.className = 'container';
    var Anchor62 = document.createElement('a');
    Anchor62.href = './62.html';
    var Image62 = document.createElement('img');
    Image62.src = 'https://i.redd.it/n3m3a51ht6s41.jpg';
    Image62.alt = 'She-Hulk : Attorney At Law'
    var Span62 = document.createElement('span');
    Span62.textContent = 'She-Hulk : Attorney At Law'
    Anchor62.appendChild(Image62);
    Anchor62.appendChild(Span62);
    Container62.appendChild(Anchor62);
    recentElement.appendChild(Container62);
    
    var Container61 = document.createElement('div');
    Container61.id = '61';
    Container61.className = 'container';
    var Anchor61 = document.createElement('a');
    Anchor61.href = './61.html';
    var Image61 = document.createElement('img');
    Image61.src = 'https://www.themoviedb.org/t/p/original/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg';
    Image61.alt = 'Gen V'
    var Span61 = document.createElement('span');
    Span61.textContent = 'Gen V'
    Anchor61.appendChild(Image61);
    Anchor61.appendChild(Span61);
    Container61.appendChild(Anchor61);
    recentElement.appendChild(Container61);
  
    var Container60 = document.createElement('div');
    Container60.id = '60';
    Container60.className = 'container';
    var Anchor60 = document.createElement('a');
    Anchor60.href = './60.html';
    var Image60 = document.createElement('img');
    Image60.src = 'https://pbs.twimg.com/media/FLLbWEiXIAgiJMm?format=jpg&name=large';
    Image60.alt = 'Secret Invasion'
    var Span60 = document.createElement('span');
    Span60.textContent = 'Secret Invasion'
    Anchor60.appendChild(Image60);
    Anchor60.appendChild(Span60);
    Container60.appendChild(Anchor60);
    recentElement.appendChild(Container60);
  
    var Container59 = document.createElement('div');
    Container59.id = '59';
    Container59.className = 'container';
    var Anchor59 = document.createElement('a');
    Anchor59.href = './59.html';
    var Image59 = document.createElement('img');
    Image59.src = 'https://i.pinimg.com/originals/2b/30/14/2b30142f7429ba12c770648ef6cbfe10.jpg';
    Image59.alt = 'Echo'
    var Span59 = document.createElement('span');
    Span59.textContent = 'Echo'
    Anchor59.appendChild(Image59);
    Anchor59.appendChild(Span59);
    Container59.appendChild(Anchor59);
    recentElement.appendChild(Container59);
  
    var Container58 = document.createElement('div');
    Container58.id = '58';
    Container58.className = 'container';
    var Anchor58 = document.createElement('a');
    Anchor58.href = './58.html';
    var Image58 = document.createElement('img');
    Image58.src = 'https://preview.redd.it/official-poster-for-what-if-season-2-v0-gzhlaqwpmj0c1.jpg?auto=webp&s=0abeb307c9ac17aea5c23033444eeca48bcf4178';
    Image58.alt = 'What if...? Season 2'
    var Span58 = document.createElement('span');
    Span58.textContent = 'What if...? Season 2'
    Anchor58.appendChild(Image58);
    Anchor58.appendChild(Span58);
    Container58.appendChild(Anchor58);
    recentElement.appendChild(Container58);
  
    var Container57 = document.createElement('div');
    Container57.className = 'container';
    Container57.id = '57';
    var Anchor57 = document.createElement('a');
    Anchor57.href = './57.html';
    var Image57 = document.createElement('img');
    Image57.src = 'https://sportshub.cbsistatic.com/i/2023/09/14/392140fb-e73e-47d2-87cd-3dab3d71e856/f6adchwbiaa0iro.jpg?auto=webp&width=810&height=1200&crop=0.675:1,smart';
    Image57.alt = 'Aquaman and the lost kingdom';
    var Span57 = document.createElement('span');
    Span57.textContent = 'Aquaman and the lost kingdom';
    Anchor57.appendChild(Image57);
    Anchor57.appendChild(Span57);
    Container57.appendChild(Anchor57);
    recentElement.appendChild(Container57);
  
    var Container56 = document.createElement('div');
    Container56.className = 'container';
    Container56.id = '56';
    var Anchor56 = document.createElement('a');
    Anchor56.href = './56.html';
    var Image56 = document.createElement('img');
    Image56.src = 'https://images.news18.com/ibnlive/uploads/2022/10/aksdj.jpg';
    Image56.alt = 'Drishyam 2';
    var Span56 = document.createElement('span');
    Span56.textContent = 'Drishyam 2';
    Anchor56.appendChild(Image56);
    Anchor56.appendChild(Span56);
    Container56.appendChild(Anchor56);
    recentElement.appendChild(Container56);
    
    var Container55 = document.createElement('div');
    Container55.className = 'container';
    Container55.id = '55';
    var Anchor55 = document.createElement('a');
    Anchor55.href = './55.html';
    var Image55 = document.createElement('img');
    Image55.src = 'https://m.media-amazon.com/images/M/MV5BZjliNDVlOTMtOTIzYi00NjZhLWJhYWUtZmY5Y2ZkMDE2MGRkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
    Image55.alt = 'Dono';
    var Span55 = document.createElement('span');
    Span55.textContent = 'Dono';
    Anchor55.appendChild(Image55);
    Anchor55.appendChild(Span55);
    Container55.appendChild(Anchor55);
    recentElement.appendChild(Container55);
    
    var Container54 = document.createElement('div');
    Container54.className = 'container';
    Container54.id = '54';
    var Anchor54 = document.createElement('a');
    Anchor54.href = './54.html';
    var Image54 = document.createElement('img');
    Image54.src = 'https://m.media-amazon.com/images/M/MV5BNzg3MDg3ZTItNzc4OS00YzdiLTgwMTEtNzNkN2E3OWYzZWMzXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg';
    Image54.alt = 'Kuttey';
    var Span54 = document.createElement('span');
    Span54.textContent = 'Kuttey';
    Anchor54.appendChild(Image54);
    Anchor54.appendChild(Span54);
    Container54.appendChild(Anchor54);
    recentElement.appendChild(Container54);
    
    var Container53 = document.createElement('div');
    Container53.className = 'container';
    Container53.id = '53';
    var Anchor53 = document.createElement('a');
    Anchor53.href = './53.html';
    var Image53 = document.createElement('img');
    Image53.src = 'https://m.media-amazon.com/images/M/MV5BYTYwYmI0NGItYmFkYi00NzViLWIwMGEtNGNjYjQwYjY1NTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
    Image53.alt = 'Mission Majnu';
    var Span53 = document.createElement('span');
    Span53.textContent = 'Mission Majnu';
    Anchor53.appendChild(Image53);
    Anchor53.appendChild(Span53);
    Container53.appendChild(Anchor53);
    recentElement.appendChild(Container53);
    
    var Container52 = document.createElement('div');
    Container52.className = 'container';
    Container52.id = '52';
    var Anchor52 = document.createElement('a');
    Anchor52.href = './52.html';
    var Image52 = document.createElement('img');
    Image52.src = 'https://static.toiimg.com/thumb/imgsize-23456,msid-96541939,width-600,resizemode-4/96541939.jpg';
    Image52.alt = 'Gandhi Godse - Ek Yudh';
    var Span52 = document.createElement('span');
    Span52.textContent = 'Gandhi Godse - Ek Yudh';
    Anchor52.appendChild(Image52);
    Anchor52.appendChild(Span52);
    Container52.appendChild(Anchor52);
    recentElement.appendChild(Container52);
    
    var Container51 = document.createElement('div');
    Container51.className = 'container';
    Container51.id = '51';
    var Anchor51 = document.createElement('a');
    Anchor51.href = './51.html';
    var Image51 = document.createElement('img');
    Image51.src = 'https://m.media-amazon.com/images/M/MV5BOWM1YzgzM2EtZjBmYy00Zjg1LTk4NWQtN2MyYTdmN2Q0ZTI5XkEyXkFqcGdeQXVyMjIwOTg2NjU@._V1_FMjpg_UX1000_.jpg';
    Image51.alt = 'Operation Fryday';
    var Span51 = document.createElement('span');
    Span51.textContent = 'Operation Fryday';
    Anchor51.appendChild(Image51);
    Anchor51.appendChild(Span51);
    Container51.appendChild(Anchor51);
    recentElement.appendChild(Container51);
    
    var Container50 = document.createElement('div');
    Container50.className = 'container';
    Container50.id = '50';
    var Anchor50 = document.createElement('a');
    Anchor50.href = './50.html';
    var Image50 = document.createElement('img');
    Image50.src = 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/shehzada-03.jpg';
    Image50.alt = 'Shehzada';
    var Span50 = document.createElement('span');
    Span50.textContent = 'Shehzada';
    Anchor50.appendChild(Image50);
    Anchor50.appendChild(Span50);
    Container50.appendChild(Anchor50);
    recentElement.appendChild(Container50);
    
    var Container49 = document.createElement('div');
    Container49.className = 'container';
    Container49.id = '49';
    var Anchor49 = document.createElement('a');
    Anchor49.href = './49.html';
    var Image49 = document.createElement('img');
    Image49.src = 'https://pbs.twimg.com/media/FI5KErHagAAX_76.jpg:large';
    Image49.alt = 'Selfiee';
    var Span49 = document.createElement('span');
    Span49.textContent = 'Selfiee';
    Anchor49.appendChild(Image49);
    Anchor49.appendChild(Span49);
    Container49.appendChild(Anchor49);
    recentElement.appendChild(Container49);
    
    var Container48 = document.createElement('div');
    Container48.className = 'container';
    Container48.id = '48';
    var Anchor48 = document.createElement('a');
    Anchor48.href = './48.html';
    var Image48 = document.createElement('img');
    Image48.src = 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20221214122218.jpg';
    Image48.alt = 'Tu Jhoothi Main Makkaar';
    var Span48 = document.createElement('span');
    Span48.textContent = 'Tu Jhoothi Main Makkaar';
    Anchor48.appendChild(Image48);
    Anchor48.appendChild(Span48);
    Container48.appendChild(Anchor48);
    recentElement.appendChild(Container48);
    
    var Container47 = document.createElement('div');
    Container47.className = 'container';
    Container47.id = '47';
    var Anchor47 = document.createElement('a');
    Anchor47.href = './47.html';
    var Image47 = document.createElement('img');
    Image47.src = 'https://assets.gadgets360cdn.com/pricee/assets/product/202304/Mrs-Chatterjee-vs-Norway_1682067333.jpg';
    Image47.alt = 'Mrs. Chatterjee Vs Norway';
    var Span47 = document.createElement('span');
    Span47.textContent = 'Mrs. Chatterjee Vs Norway';
    Anchor47.appendChild(Image47);
    Anchor47.appendChild(Span47);
    Container47.appendChild(Anchor47);
    recentElement.appendChild(Container47);
    
    var Container46 = document.createElement('div');
    Container46.className = 'container';
    Container46.id = '46';
    var Anchor46 = document.createElement('a');
    Anchor46.href = './46.html';
    var Image46 = document.createElement('img');
    Image46.src = 'https://m.media-amazon.com/images/M/MV5BNTAzNWZmYzItMzVkMi00ZTc0LThhMTUtNGFlNjczM2E4MTRiXkEyXkFqcGdeQXVyOTE2NDU1NDM@._V1_.jpg';
    Image46.alt = 'Zwigato';
    var Span46 = document.createElement('span');
    Span46.textContent = 'Zwigato';
    Anchor46.appendChild(Image46);
    Anchor46.appendChild(Span46);
    Container46.appendChild(Anchor46);
    recentElement.appendChild(Container46);
  
    var Container45 = document.createElement('div');
    Container45.className = 'container';
    Container45.id = '45';
    var Anchor45 = document.createElement('a');
    Anchor45.href = './45.html';
    var Image45 = document.createElement('img');
    Image45.src = 'https://m.media-amazon.com/images/M/MV5BNDMwZjQ2YzUtZDQyMC00MjcwLTlmN2MtZGY4OGEyMzMzNTk4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg';
    Image45.alt = 'Chor Nikal Ke Bhaga';
    var Span45 = document.createElement('span');
    Span45.textContent = 'Chor Nikal Ke Bhaga';
    Anchor45.appendChild(Image45);
    Anchor45.appendChild(Span45);
    Container45.appendChild(Anchor45);
    recentElement.appendChild(Container45);
  
    var Container44 = document.createElement('div');
    Container44.className = 'container';
    Container44.id = '44';
    var Anchor44 = document.createElement('a');
    Anchor44.href = './44.html';
    var Image44 = document.createElement('img');
    Image44.src = 'https://m.media-amazon.com/images/M/MV5BYzg1MDhjYzEtODJkMi00MjViLWIwOWEtYzAxZTg5YWM0ZmViXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg';
    Image44.alt = 'Bheed';
    var Span44 = document.createElement('span');
    Span44.textContent = 'Bheed';
    Anchor44.appendChild(Image44);
    Anchor44.appendChild(Span44);
    Container44.appendChild(Anchor44);
    recentElement.appendChild(Container44);
  
    var Container43 = document.createElement('div');
    Container43.className = 'container';
    Container43.id = '43';
    var Anchor43 = document.createElement('a');
    Anchor43.href = './43.html';
    var Image43 = document.createElement('img');
    Image43.src = 'https://pbs.twimg.com/media/FkZlj6oaYAA3voP.jpg';
    Image43.alt = 'Bhola';
    var Span43 = document.createElement('span');
    Span43.textContent = 'Bhola';
    Anchor43.appendChild(Image43);
    Anchor43.appendChild(Span43);
    Container43.appendChild(Anchor43);
    recentElement.appendChild(Container43);
  
    var Container42 = document.createElement('div');
    Container42.className = 'container';
    Container42.id = '42';
    var Anchor42 = document.createElement('a');
    Anchor42.href = './42.html';
    var Image42 = document.createElement('img');
    Image42.src = 'https://m.media-amazon.com/images/M/MV5BNGY1ZWIxZjQtNDEyYy00NzcwLTgxMjctYzQ3MjQyOTc0MDc2XkEyXkFqcGdeQXVyMTY0MDc4NDE4._V1_.jpg';
    Image42.alt = 'Gaslight';
    var Span42 = document.createElement('span');
    Span42.textContent = 'Gaslight';
    Anchor42.appendChild(Image42);
    Anchor42.appendChild(Span42);
    Container42.appendChild(Anchor42);
    recentElement.appendChild(Container42);
  
    var Container41 = document.createElement('div');
    Container41.className = 'container';
    Container41.id = '41';
    var Anchor41 = document.createElement('a');
    Anchor41.href = './41.html';
    var Image41 = document.createElement('img');
    Image41.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJADdELZDwHUyYoZ4c0m5bHOYLyR7IVQlNVb5QWldA8GWHnGjT';
    Image41.alt = 'Kisi Ka Bhai Kisi Ki Jaan';
    var Span41 = document.createElement('span');
    Span41.textContent = 'Kisi Ka Bhai Kisi Ki Jaan';
    Anchor41.appendChild(Image41);
    Anchor41.appendChild(Span41);
    Container41.appendChild(Anchor41);
    recentElement.appendChild(Container41);
  
    var Container40 = document.createElement('div');
    Container40.className = 'container';
    Container40.id = '40';
    var Anchor40 = document.createElement('a');
    Anchor40.href = './40.html';
    var Image40 = document.createElement('img');
    Image40.src = 'https://m.media-amazon.com/images/M/MV5BNTU5MDZlNmEtODNjOS00NDljLTlhNTItNzQ1NDUyZjRiOGYwXkEyXkFqcGdeQXVyNTI0NzU5ODc@._V1_.jpg';
    Image40.alt = 'The Kerala Story';
    var Span40 = document.createElement('span');
    Span40.textContent = 'The Kerala Story';
    Anchor40.appendChild(Image40);
    Anchor40.appendChild(Span40);
    Container40.appendChild(Anchor40);
    recentElement.appendChild(Container40);
  
    var Container39 = document.createElement('div');
    Container39.className = 'container';
    Container39.id = '39';
    var Anchor39 = document.createElement('a');
    Anchor39.href = './39.html';
    var Image39 = document.createElement('img');
    Image39.src = 'https://upload.wikimedia.org/wikipedia/en/a/a3/IB71_film_poster.jpg';
    Image39.alt = 'IB71';
    var Span39 = document.createElement('span');
    Span39.textContent = 'IB71';
    Anchor39.appendChild(Image39);
    Anchor39.appendChild(Span39);
    Container39.appendChild(Anchor39);
    recentElement.appendChild(Container39);
  
    var Container38 = document.createElement('div');
    Container38.className = 'container';
    Container38.id = '38';
    var Anchor38 = document.createElement('a');
    Anchor38.href = './38.html';
    var Image38 = document.createElement('img');
    Image38.src = 'https://m.media-amazon.com/images/M/MV5BODZiODQyZjgtNTdiZC00OTFhLTkwODktMjFmODJlZjk5MzYzXkEyXkFqcGdeQXVyMTQwMTI5NzM2._V1_.jpg';
    Image38.alt = 'Sirf Ek Banda Kaafi Hai';
    var Span38 = document.createElement('span');
    Span38.textContent = 'Sirf Ek Banda Kaafi Hai';
    Anchor38.appendChild(Image38);
    Anchor38.appendChild(Span38);
    Container38.appendChild(Anchor38);
    recentElement.appendChild(Container38);
  
    var Container37 = document.createElement('div');
    Container37.className = 'container';
    Container37.id = '37';
    var Anchor37 = document.createElement('a');
    Anchor37.href = './37.html';
    var Image37 = document.createElement('img');
    Image37.src = 'https://m.media-amazon.com/images/M/MV5BOGJjODhmODUtNzQ3MS00ZjY3LWI0NjYtNzg4NDUyYWI3MTliXkEyXkFqcGdeQXVyMTY1MjE1OTAx._V1_.jpg';
    Image37.alt = 'Zara Hatke Zara Bachke';
    var Span37 = document.createElement('span');
    Span37.textContent = 'Zara Hatke Zara Bachke';
    Anchor37.appendChild(Image37);
    Anchor37.appendChild(Span37);
    Container37.appendChild(Anchor37);
    recentElement.appendChild(Container37);
  
    var Container36 = document.createElement('div');
    Container36.className = 'container';
    Container36.id = '36';
    var Anchor36 = document.createElement('a');
    Anchor36.href = './36.html';
    var Image36 = document.createElement('img');
    Image36.src = 'https://m.media-amazon.com/images/M/MV5BY2RiNDE1Y2EtY2ZhNC00MTBmLTlmMWUtNWQ1MjA2ZjI4ODA4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg';
    Image36.alt = 'Adipurush';
    var Span36 = document.createElement('span');
    Span36.textContent = 'Adipurush';
    Anchor36.appendChild(Image36);
    Anchor36.appendChild(Span36);
    Container36.appendChild(Anchor36);
    recentElement.appendChild(Container36);
  
    var Container35 = document.createElement('div');
    Container35.className = 'container';
    Container35.id = '35';
    var Anchor35 = document.createElement('a');
    Anchor35.href = './35.html';
    var Image35 = document.createElement('img');
    Image35.src = 'https://m.media-amazon.com/images/M/MV5BNTJiM2U3NTctNTAwNi00ZmQ5LThmNDUtYjI4MDdhYzQ5ZmExXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg';
    Image35.alt = 'Satyaprem ki Katha';
    var Span35 = document.createElement('span');
    Span35.textContent = 'Satyaprem ki Katha';
    Anchor35.appendChild(Image35);
    Anchor35.appendChild(Span35);
    Container35.appendChild(Anchor35);
    recentElement.appendChild(Container35);
  
    var Container34 = document.createElement('div');
    Container34.className = 'container';
    Container34.id = '34';
    var Anchor34 = document.createElement('a');
    Anchor34.href = './34.html';
    var Image34 = document.createElement('img');
    Image34.src = 'https://m.media-amazon.com/images/M/MV5BN2FkZTZlZGEtNTFlNi00NjVmLWE1MDYtNWEwYTU5ODE4MzQ4XkEyXkFqcGdeQXVyMTI5MDUyMTM1._V1_FMjpg_UX1000_.jpg';
    Image34.alt = '72 Hoorain';
    var Span34 = document.createElement('span');
    Span34.textContent = '72 Hoorain';
    Anchor34.appendChild(Image34);
    Anchor34.appendChild(Span34);
    Container34.appendChild(Anchor34);
    recentElement.appendChild(Container34);
  
    var Container33 = document.createElement('div');
    Container33.className = 'container';
    Container33.id = '33';
    var Anchor33 = document.createElement('a');
    Anchor33.href = './33.html';
    var Image33 = document.createElement('img');
    Image33.src = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/new-posters-from-shah-rukh-khans-dunki-unveiled-110605270-3x4.jpg?VersionId=FEflpYk30mkngjxiDsDjrW3BBHfG.LXT';
    Image33.alt = 'Dunki';
    var Span33 = document.createElement('span');
    Span33.textContent = 'Dunki';
    Anchor33.appendChild(Image33);
    Anchor33.appendChild(Span33);
    Container33.appendChild(Anchor33);
    recentElement.appendChild(Container33);
  
    var Container32 = document.createElement('div');
    Container32.className = 'container';
    Container32.id = '32';
    var Anchor32 = document.createElement('a');
    Anchor32.href = './32.html';
    var Image32 = document.createElement('img');
    Image32.src = 'https://m.media-amazon.com/images/M/MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_.jpg';
    Image32.alt = 'Don 2';
    var Span32 = document.createElement('span');
    Span32.textContent = 'Don 2';
    Anchor32.appendChild(Image32);
    Anchor32.appendChild(Span32);
    Container32.appendChild(Anchor32);
    recentElement.appendChild(Container32);
  
    var Container31 = document.createElement('div');
    Container31.className = 'container';
    Container31.id = '31';
    var Anchor31 = document.createElement('a');
    Anchor31.href = './31.html';
    var Image31 = document.createElement('img');
    Image31.src = 'https://m.media-amazon.com/images/M/MV5BMzAyMWE0MjgtMDVjNS00ZDMyLWE4NjQtNWU2ZDgyYTlmMjdjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg';
    Image31.alt = 'Don';
    var Span31 = document.createElement('span');
    Span31.textContent = 'Don';
    Anchor31.appendChild(Image31);
    Anchor31.appendChild(Span31);
    Container31.appendChild(Anchor31);
    recentElement.appendChild(Container31);
  
    var Container30 = document.createElement('div');
    Container30.className = 'container';
    Container30.id = '30';
    var Anchor30 = document.createElement('a');
    Anchor30.href = './30.html';
    var Image30 = document.createElement('img');
    Image30.src = 'https://www.telugubulletin.com/wp-content/uploads/2021/05/Brahmastra-twitter-696x870.jpg';
    Image30.alt = 'Brahmastra';
    var Span30 = document.createElement('span');
    Span30.textContent = 'Brahmastra';
    Anchor30.appendChild(Image30);
    Anchor30.appendChild(Span30);
    Container30.appendChild(Anchor30);
    recentElement.appendChild(Container30);
  
    var Container29 = document.createElement('div');
    Container29.className = 'container';
    Container29.id = '29';
    var Anchor29 = document.createElement('a');
    Anchor29.href = './29.html';
    var Image29 = document.createElement('img');
    Image29.src = 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/222841/Sooryavanshi-V-ALL-3-UNIFORM-layers-motion-web.jpg';
    Image29.alt = 'Sooryavanshi';
    var Span29 = document.createElement('span');
    Span29.textContent = 'Sooryavanshi';
    Anchor29.appendChild(Image29);
    Anchor29.appendChild(Span29);
    Container29.appendChild(Anchor29);
    recentElement.appendChild(Container29);
  
    var Container28 = document.createElement('div');
    Container28.className = 'container';
    Container28.id = '28';
    var Anchor28 = document.createElement('a');
    Anchor28.href = './28.html';
    var Image28 = document.createElement('img');
    Image28.src = 'https://stat5.bollywoodhungama.in/wp-content/uploads/2018/12/Simmba1-1.jpg';
    Image28.alt = 'Simmba';
    var Span28 = document.createElement('span');
    Span28.textContent = 'Simmba';
    Anchor28.appendChild(Image28);
    Anchor28.appendChild(Span28);
    Container28.appendChild(Anchor28);
    recentElement.appendChild(Container28);
  
    var Container27 = document.createElement('div');
    Container27.className = 'container';
    Container27.id = '27';
    var Anchor27 = document.createElement('a');
    Anchor27.href = './27.html';
    var Image27 = document.createElement('img');
    Image27.src = 'https://live.staticflickr.com/3913/14705282055_321c289534_z.jpg';
    Image27.alt = 'Singham Returns';
    var Span27 = document.createElement('span');
    Span27.textContent = 'Singham Returns';
    Anchor27.appendChild(Image27);
    Anchor27.appendChild(Span27);
    Container27.appendChild(Anchor27);
    recentElement.appendChild(Container27);
  
    var Container26 = document.createElement('div');
    Container26.className = 'container';
    Container26.id = '26';
    var Anchor26 = document.createElement('a');
    Anchor26.href = './26.html';
    var Image26 = document.createElement('img');
    Image26.src = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71XrOg+MVsL._AC_UF1000,1000_QL80_.jpg';
    Image26.alt = 'Singham';
    var Span26 = document.createElement('span');
    Span26.textContent = 'Singham';
    Anchor26.appendChild(Image26);
    Anchor26.appendChild(Span26);
    Container26.appendChild(Anchor26);
    recentElement.appendChild(Container26);
  
    var Container25 = document.createElement('div');
    Container25.className = 'container';
    Container25.id = '25';
    var Anchor25 = document.createElement('a');
    Anchor25.href = './25.html';
    var Image25 = document.createElement('img');
    Image25.src = 'https://pbs.twimg.com/media/FO1KmM8X0AIAZBv.jpg:large';
    Image25.alt = 'Pathaan';
    var Span25 = document.createElement('span');
    Span25.textContent = 'Pathaan';
    Anchor25.appendChild(Image25);
    Anchor25.appendChild(Span25);
    Container25.appendChild(Anchor25);
    recentElement.appendChild(Container25);
  
    var Container24 = document.createElement('div');
    Container24.className = 'container';
    Container24.id = '24';
    var Anchor24 = document.createElement('a');
    Anchor24.href = './24.html';
    var Image24 = document.createElement('img');
    Image24.src = 'https://m.media-amazon.com/images/M/MV5BNDhmZmZkODYtZjcwZi00MjBkLWIzZDQtN2M5YjliOGQ4MDc2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg';
    Image24.alt = 'War';
    var Span24 = document.createElement('span');
    Span24.textContent = 'War';
    Anchor24.appendChild(Image24);
    Anchor24.appendChild(Span24);
    Container24.appendChild(Anchor24);
    recentElement.appendChild(Container24);
  
    var Container23 = document.createElement('div');
    Container23.className = 'container';
    Container23.id = '23';
    var Anchor23 = document.createElement('a');
    Anchor23.href = './23.html';
    var Image23 = document.createElement('img');
    Image23.src = 'https://m.media-amazon.com/images/M/MV5BNGQ5Y2VkZjYtOGI2Ni00YTAwLWIxOTUtZTVkNGIyZGU2ZWI5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg';
    Image23.alt = 'Tiger Zinda Hai';
    var Span23 = document.createElement('span');
    Span23.textContent = 'Tiger Zinda Hai';
    Anchor23.appendChild(Image23);
    Anchor23.appendChild(Span23);
    Container23.appendChild(Anchor23);
    recentElement.appendChild(Container23);
  
    var Container22 = document.createElement('div');
    Container22.className = 'container';
    Container22.id = '22';
    var Anchor22 = document.createElement('a');
    Anchor22.href = './22.html';
    var Image22 = document.createElement('img');
    Image22.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWmehHz7vjPikPq6eGHTDwu2P8eMU1we3Wg&usqp=CAU';
    Image22.alt = 'Ek Tha Tiger';
    var Span22 = document.createElement('span');
    Span22.textContent = 'Ek Tha Tiger';
    Anchor22.appendChild(Image22);
    Anchor22.appendChild(Span22);
    Container22.appendChild(Anchor22);
    recentElement.appendChild(Container22);
  
    var Container21 = document.createElement('div');
    Container21.className = 'container';
    Container21.id = '21';
    var Anchor21 = document.createElement('a');
    Anchor21.href = './21.html';
    var Image21 = document.createElement('img');
    Image21.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcEK1nlQo2L2JSjmh9UzBUGvDTsZh6vqIGg&usqp=CAU';
    Image21.alt = 'Rocky aur rani ki prem kahani';
    var Span21 = document.createElement('span');
    Span21.textContent = 'Rocky aur rani ki prem kahani';
    Anchor21.appendChild(Image21);
    Anchor21.appendChild(Span21);
    Container21.appendChild(Anchor21);
    recentElement.appendChild(Container21);
  
    var Container20 = document.createElement('div');
    Container20.className = 'container';
    Container20.id = '20';
    var Anchor20 = document.createElement('a');
    Anchor20.href = './20.html';
    var Image20 = document.createElement('img');
    Image20.src = 'https://m.media-amazon.com/images/M/MV5BNmQ3MThkOWEtNTA0NC00YzI2LWIxZjEtZjdlZTVmNzQ2ZGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
    Image20.alt = 'OMG 2';
    var Span20 = document.createElement('span');
    Span20.textContent = 'OMG 2';
    Anchor20.appendChild(Image20);
    Anchor20.appendChild(Span20);
    Container20.appendChild(Anchor20);
    recentElement.appendChild(Container20);
  
    var Container19 = document.createElement('div');
    Container19.className = 'container';
    Container19.id = '19';
    var Anchor19 = document.createElement('a');
    Anchor19.href = './19.html';
    var Image19 = document.createElement('img');
    Image19.src = 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Gadar-2.jpg';
    Image19.alt = 'Gadar 2';
    var Span19 = document.createElement('span');
    Span19.textContent = 'Gadar 2';
    Anchor19.appendChild(Image19);
    Anchor19.appendChild(Span19);
    Container19.appendChild(Anchor19);
    recentElement.appendChild(Container19);
  
    var Container18 = document.createElement('div');
    Container18.className = 'container';
    Container18.id = '18';
    var Anchor18 = document.createElement('a');
    Anchor18.href = './18.html';
    var Image18 = document.createElement('img');
    Image18.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYg2W2bGkTsB3jjI9ZsHOgOQjZh51nFt_a7w&usqp=CAU';
    Image18.alt = 'Dream Girl 2';
    var Span18 = document.createElement('span');
    Span18.textContent = 'Dream Girl 2';
    Anchor18.appendChild(Image18);
    Anchor18.appendChild(Span18);
    Container18.appendChild(Anchor18);
    recentElement.appendChild(Container18);
  
    var Container17 = document.createElement('div');
    Container17.className = 'container';
    Container17.id = '17';
    var Anchor17 = document.createElement('a');
    Anchor17.href = './17.html';
    var Image17 = document.createElement('img');
    Image17.src = 'https://static.toiimg.com/thumb/imgsize-23456,msid-103060645,width-600,resizemode-4/103060645.jpg';
    Image17.alt = 'Jawan';
    var Span17 = document.createElement('span');
    Span17.textContent = 'Jawan';
    Anchor17.appendChild(Image17);
    Anchor17.appendChild(Span17);
    Container17.appendChild(Anchor17);
    recentElement.appendChild(Container17);
  
    var Container16 = document.createElement('div');
    Container16.className = 'container';
    Container16.id = '16';
    var Anchor16 = document.createElement('a');
    Anchor16.href = './16.html';
    var Image16 = document.createElement('img');
    Image16.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjHcuBl8LdgsxrfRfl48KAGADFAPQP405dA&usqp=CAU';
    Image16.alt = 'The Vaccine War';
    var Span16 = document.createElement('span');
    Span16.textContent = 'The Vaccine War';
    Anchor16.appendChild(Image16);
    Anchor16.appendChild(Span16);
    Container16.appendChild(Anchor16);
    recentElement.appendChild(Container16);
  
    var Container15 = document.createElement('div');
    Container15.className = 'container';
    Container15.id = '15';
    var Anchor15 = document.createElement('a');
    Anchor15.href = './15.html';
    var Image15 = document.createElement('img');
    Image15.src = 'https://m.media-amazon.com/images/M/MV5BYzc0NzQ1NGMtMDhmNC00NzQ1LWFjNzctMjlkNGQ0MmE4Y2I1XkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg';
    Image15.alt = 'Fukrey 3';
    var Span15 = document.createElement('span');
    Span15.textContent = 'Fukrey 3';
    Anchor15.appendChild(Image15);
    Anchor15.appendChild(Span15);
    Container15.appendChild(Anchor15);
    recentElement.appendChild(Container15);
  
    var Container14 = document.createElement('div');
    Container14.className = 'container';
    Container14.id = '14';
    var Anchor14 = document.createElement('a');
    Anchor14.href = './14.html';
    var Image14 = document.createElement('img');
    Image14.src = 'https://myhotposters.com/cdn/shop/products/mL6903_1024x1024.jpg?v=1697834059';
    Image14.alt = 'Mission Raniganj';
    var Span14 = document.createElement('span');
    Span14.textContent = 'Mission Raniganj';
    Anchor14.appendChild(Image14);
    Anchor14.appendChild(Span14);
    Container14.appendChild(Anchor14);
    recentElement.appendChild(Container14);
  
    var Container13 = document.createElement('div');
    Container13.className = 'container';
    Container13.id = '13';
    var Anchor13 = document.createElement('a');
    Anchor13.href = './13.html';
    var Image13 = document.createElement('img');
    Image13.src = 'https://m.media-amazon.com/images/M/MV5BZDM5YjRkNTktNDg4OC00YmFkLWIwOTgtZjE1ZGUyOWVkMGQzXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg';
    Image13.alt = 'Thank you for coming';
    var Span13 = document.createElement('span');
    Span13.textContent = 'Thank you for coming';
    Anchor13.appendChild(Image13);
    Anchor13.appendChild(Span13);
    Container13.appendChild(Anchor13);
    recentElement.appendChild(Container13);
  
    var Container12 = document.createElement('div');
    Container12.className = 'container';
    Container12.id = '12';
    var Anchor12 = document.createElement('a');
    Anchor12.href = './12.html';
    var Image12 = document.createElement('img');
    Image12.src = 'https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_loki_s2_finale_poster_v1_613_36711b22.jpeg';
    Image12.alt = 'Loki Season 2';
    var Span12 = document.createElement('span');
    Span12.textContent = 'Loki Season 2';
    Anchor12.appendChild(Image12);
    Anchor12.appendChild(Span12);
    Container12.appendChild(Anchor12);
    recentElement.appendChild(Container12);
  
    var Container11 = document.createElement('div');
    Container11.className = 'container';
    Container11.id = '11';
    var Anchor11 = document.createElement('a');
    Anchor11.href = './11.html';
    var Image11 = document.createElement('img');
    Image11.src = 'https://m.media-amazon.com/images/M/MV5BZjg2YjU0MTEtMGYyNy00OWI1LTk2MDgtMDFkNmMwYWFjZTY5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg';
    Image11.alt = 'The Railway Men';
    var Span11 = document.createElement('span');
    Span11.textContent = 'The Railway Men';
    Anchor11.appendChild(Image11);
    Anchor11.appendChild(Span11);
    Container11.appendChild(Anchor11);
    recentElement.appendChild(Container11);
  
    var Container10 = document.createElement('div');
    Container10.className = 'container';
    Container10.id = '10';
    var Anchor10 = document.createElement('a');
    Anchor10.href = './10.html';
    var Image10 = document.createElement('img');
    Image10.src = 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/joram-20231120110353-22348.jpg';
    Image10.alt = 'Joram';
    var Span10 = document.createElement('span');
    Span10.textContent = 'Joram';
    Anchor10.appendChild(Image10);
    Anchor10.appendChild(Span10);
    Container10.appendChild(Anchor10);
    recentElement.appendChild(Container10);
  
    var Container9 = document.createElement('div');
    Container9.className = 'container';
    Container9.id = '9';
    var Anchor9 = document.createElement('a');
    Anchor9.href = './9.html';
    var Image9 = document.createElement('img');
    Image9.src = 'https://m.media-amazon.com/images/M/MV5BNjY0MmJmZjEtZmMyZi00OTBmLWJhMDItNjBiYWRlYWQ5MzgxXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg';
    Image9.alt = 'Animal';
    var Span9 = document.createElement('span');
    Span9.textContent = 'Animal';
    Anchor9.appendChild(Image9);
    Anchor9.appendChild(Span9);
    Container9.appendChild(Anchor9);
    recentElement.appendChild(Container9);
  
    var Container8 = document.createElement('div');
    Container8.className = 'container';
    Container8.id = '8';
    var Anchor8 = document.createElement('a');
    Anchor8.href = './8.html';
    var Image8 = document.createElement('img');
    Image8.src = 'https://filmycollection.com/wp-content/uploads/2023/11/Snapinsta.app_399711731_1034384124478703_27308481587437781_n_1080-1.jpg';
    Image8.alt = 'Sam Bahadur';
    var Span8 = document.createElement('span');
    Span8.textContent = 'Sam Bahadur';
    Anchor8.appendChild(Image8);
    Anchor8.appendChild(Span8);
    Container8.appendChild(Anchor8);
    recentElement.appendChild(Container8);
  
    var Container7 = document.createElement('div');
    Container7.className = 'container';
    Container7.id = '7';
    var Anchor7 = document.createElement('a');
    Anchor7.href = './7.html';
    var Image7 = document.createElement('img');
    Image7.src = 'https://m.media-amazon.com/images/M/MV5BYTY1N2UzYzMtZTI5MC00MjFkLWE2NGYtZmIxODI3MDIzYWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
    Image7.alt = 'Farrey';
    var Span7 = document.createElement('span');
    Span7.textContent = 'Farrey';
    Anchor7.appendChild(Image7);
    Anchor7.appendChild(Span7);
    Container7.appendChild(Anchor7);
    recentElement.appendChild(Container7);
  
    var Container6 = document.createElement('div');
    Container6.className = 'container';
    Container6.id = '6';
    var Anchor6 = document.createElement('a');
    Anchor6.href = './6.html';
    var Image6 = document.createElement('img');
    Image6.src = 'https://gumlet.assettype.com/filmcompanion%2F2023-11%2F6ada95d7-ac6e-4967-af0f-507c1a84eb99%2Fkhichdi_2_khichdi_gang_is_coming_to_entertain_the_audience_once_again_the_film_will_be_released_on_t.png?format=auto';
    Image6.alt = 'Khichdi 2';
    var Span6 = document.createElement('span');
    Span6.textContent = 'Khichdi 2';
    Anchor6.appendChild(Image6);
    Anchor6.appendChild(Span6);
    Container6.appendChild(Anchor6);
    recentElement.appendChild(Container6);
  
    var Container5 = document.createElement('div');
    Container5.className = 'container';
    Container5.id = '5';
    var Anchor5 = document.createElement('a');
    Anchor5.href = './5.html';
    var Image5 = document.createElement('img');
    Image5.src = 'https://miro.medium.com/v2/resize:fit:1170/1*1cUNWC_7-8AWJDNDYVSYFw.jpeg';
    Image5.alt = 'Tiger 3';
    var Span5 = document.createElement('span');
    Span5.textContent = 'Tiger 3';
    Anchor5.appendChild(Image5);
    Anchor5.appendChild(Span5);
    Container5.appendChild(Anchor5);
    recentElement.appendChild(Container5);
  
    var Container4 = document.createElement('div');
    Container4.className = 'container';
    Container4.id = '4';
    var Anchor4 = document.createElement('a');
    Anchor4.href = './4.html';
    var Image4 = document.createElement('img');
    Image4.src = 'https://preview.redd.it/i-made-a-poster-for-the-marvels-how-excited-are-you-guys-v0-i9jgzec8ly9b1.jpg?auto=webp&s=e2e4a3737735d826156f39119ef08d8a749c8e63';
    Image4.alt = 'The Marvels';
    var Span4 = document.createElement('span');
    Span4.textContent = 'The Marvels';
    Anchor4.appendChild(Image4);
    Anchor4.appendChild(Span4);
    Container4.appendChild(Anchor4);
    recentElement.appendChild(Container4);
  
    var Container3 = document.createElement('div');
    Container3.className = 'container';
    Container3.id = '3';
    var Anchor3 = document.createElement('a');
    Anchor3.href = './3.html';
    var Image3 = document.createElement('img');
    Image3.src = 'https://media5.bollywoodhungama.in/wp-content/uploads/2023/10/12th-Fail.jpeg';
    Image3.alt = '12th Fail';
    var Span3 = document.createElement('span');
    Span3.textContent = '12th Fail';
    Anchor3.appendChild(Image3);
    Anchor3.appendChild(Span3);
    Container3.appendChild(Anchor3);
    recentElement.appendChild(Container3);
  
    var Container2 = document.createElement('div');
    Container2.className = 'container';
    Container2.id = '2';
    var Anchor2 = document.createElement('a');
    Anchor2.href = './2.html';
    var Image2 = document.createElement('img');
    Image2.src = 'https://m.media-amazon.com/images/M/MV5BNTE2MzNlNDktMzNhZS00ZmZlLTkxMDQtNjQ5ZDlkMmVjN2FhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg';
    Image2.alt = 'Tejas';
    var Span2 = document.createElement('span');
    Span2.textContent = 'Tejas';
    Anchor2.appendChild(Image2);
    Anchor2.appendChild(Span2);
    Container2.appendChild(Anchor2);
    recentElement.appendChild(Container2);
  
    var Container1 = document.createElement('div');
    Container1.className = 'container';
    Container1.id = '1';
    var Anchor1 = document.createElement('a');
    Anchor1.href = './1.html';
    var Image1 = document.createElement('img');
    Image1.src = 'https://actionflixdotcom.files.wordpress.com/2023/10/380030145_863433225437792_6197020497503333988_n.jpg?w=819';
    Image1.alt = 'Ganapath';
    var Span1 = document.createElement('span');
    Span1.textContent = 'Ganapath';
    Anchor1.appendChild(Image1);
    Anchor1.appendChild(Span1);
    Container1.appendChild(Anchor1);
    recentElement.appendChild(Container1);
  }
}

