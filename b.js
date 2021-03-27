var ctrlDown=false;
let inp1 = document.getElementById('myInput');
var inp2=document.getElementById('myOutput');
var inp3=document.getElementById('myInput3');
inp1.addEventListener("keyup", (event) => {
  x=event.key
  console.log(x);
    if(x=='Control'){
      ctrlDown=true;
    }
  else{
    if(x=='v'||x=='V'||x=='y'||x=='Y'||x=='z'||x=='Z'){
      inp2.value=inp1.value;
      //alert("control");
    }
    else{

    }
  }
});
inp1.addEventListener("keydown", (event) => {
  x=event.key
  console.log(x);
  var start = $('#myInput').prop("selectionStart");
  var end = $('#myInput').prop("selectionEnd");
  var tex=document.getElementById("myOutput").value;
  if(x=='Control'){
    ctrlDown=true;
  }
  else if(x=="Backspace"){
    if(start==0 && end!=0){
      $('#myOutput').val(tex.slice(end));
    }
    else if(start==0){

    }
    else if(start==end){
      $('#myOutput').val(tex.slice(0,start-1)+tex.slice(start));
    }
    else{
      $('#myOutput').val(tex.slice(0,start)+tex.slice(end));
    }
  }
  else if(x=="Delete"){
    if(start==0 && end!=0){
      $('#myOutput').val(tex.slice(end));
    }
    else if(start==0){
      $('#myOutput').val(tex.slice(1,start)+tex.slice(start+1));
    }
    else if(start==end){
      $('#myOutput').val(tex.slice(0,start)+tex.slice(start+1));
    }
    else{
      $('#myOutput').val(tex.slice(0,start)+tex.slice(end));
    }
  }
  else if(x=="Tab"){
    var tex1=document.getElementById("myInput").value;
    if(start==end){
      $('#myInput').val(tex1.slice(0,start)+'\t'+tex1.slice(end));
      $('#myOutput').val(tex.slice(0,start)+'\t'+tex.slice(end));
      setTimeout(() => {$('#myInput').focus();}, 1);
    }
    else{
      $('#myIntput').val(tex1.slice(0,start)+'\t'+tex1.slice(end));
      $('#myOutput').val(tex.slice(0,start)+"\t"+tex.slice(end));
      setTimeout(() => {$('#myInput').focus();}, 1);
    }
  }
});
inp1.addEventListener("keypress", (event) => {
  x=event.key
  console.log(x);
  var start = $('#myInput').prop("selectionStart");
  var end = $('#myInput').prop("selectionEnd");
  var tex=document.getElementById("myOutput").value;
  var x=event.key;
    if(x.length==1){
      if(start==end){
        $('#myOutput').val(tex.slice(0,start)+x+tex.slice(end));
      }
      else{
        $('#myOutput').val(tex.slice(0,start)+x+tex.slice(end));
      }
    }
  else if(x=="Enter"){
    if(start==end){
      $('#myOutput').val(tex.slice(0,start)+'\n'+tex.slice(end));
    }
    else{
      $('#myOutput').val(tex.slice(0,start)+"\n"+tex.slice(end));
    }
  }
  else{
  }
});
$("#myInput").on("cut ",function(){
  var start = $('#myInput').prop("selectionStart");
  var end = $('#myInput').prop("selectionEnd");
  var tex=document.getElementById("myOutput").value;
  $('#myOutput').val(tex.slice(0,start)+tex.slice(end));
});
$("#myInput").on("paste",function(){
  //alert("paste");
  setTimeout(() => {inp2.value=inp1.value;}, 1);
});
$("#myInput").mousedown(function(){});
$("#myInput").hover(function(){},function(){});
$("#myInput").mouseup(function(){});
