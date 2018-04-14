let regEx=/[0-9]/g;
let list = [];
let paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
 let html = paragraphs[i].innerHTML;
 list.push(html);
}
// all paragraphs into one string.
let joined = list.join(' ');
// all the numbers in the paragraphs stored in array
let numbers = joined.match(regEx);
// define array for styling edits
let edits = [];
// adding the styling tags to each num
numbers.forEach(function(num){
  edits.push('<span class="style">' + num + '</span>');
  // outputs ["<span class='style'>3</span>", "<span class='style'>7</span>", "<span class='style'>4</span>", "<span class='style'>5</span>"]
});
// need to insert edits into paragraph html
console.log(edits);
