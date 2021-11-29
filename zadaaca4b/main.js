function msg() {
  alert("Thank you!");
}
document.querySelector('#color').addEventListener('change', (e)=>{

  console.log(e.target.value);
  document.querySelector('#rect2869').style.fill= e.target.value;


})