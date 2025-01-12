const ism = prompt("Ismingizni kiriting");
const jovob = prompt("Ismingizni harifinini kiriting");
if(ism == ""){
  alert("Ism kiritmadingiz")
}
else if(ism.toLowerCase().includes(jovob.toLowerCase())){
    alert(`${ism} ismida ${jovob} shu harf mavjud`)
}
else{
    alert(`${ism} ismida ${jovob} shu harf mavjud emas`)
}