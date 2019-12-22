
function clck(){
 console.log('sss')
 var y=document.getElementById('names').value
var x=document.getElementById('change')
var link='http://superbestoffers.com/Christmas_2019/Wish/'+y
var z='*Secret santa* has gifted *'+y+'!*🤫%0a'+
'🔥🔥Hurry up!!🔥🔥%0a'+
'🎁🎁🎁🎁🎁🎁🎁🎁%0a'+
' *_CLICK TO SEE_* his *_gift for you_*%0a'+
'👇👇👇👇👇👇👇%0a'+
' *'+link+'*%0a'+
'🎉🎉🎉🎉🎉🎉🎉%0a'+
'⚠ *Before its too late*⚠'

x.innerHTML='<a href="'+link+'" style="background-color:white;color:black;"><strong>Click to send to your friends!!</strong></a> '+'<br><a style="font-size:30px;background-color:#4FCE5D;" class="fab fa-whatsapp" href="whatsapp://send?text='+z+'" data-action="share/whatsapp/share">Share</a>'+'<a class="fab fa-facebook-messenger" style="font-size:30px;background-color:#0084FF;" href="fb-messenger://share/?link='+z+'">Share</a>'+'<a class="fab fa-telegram" style="font-size:30px;background-color:#813f58 ;" href="tg://msg_url?url=https://valid.url&amp;text='+z+'">Share</a>'
}
function myFunction(){
alert('send')
}
// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2019 00:00:00").getTime();
    console.log(countDownDate)
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s "+'more to go!!';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
