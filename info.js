const businessInfo = {
  "title": "Title of Page",
  "    ": "   ",
  "    ": "   ",
  "    ": "   ",
  "    ": "   ",
  "    ": "   ",
  "    ": "   "
};

document.addEventListener('DOMContentLoaded', function() {
  document.title = businessInfo.name;
  
  const nameElements = document.querySelectorAll('#name');
  nameElements.forEach(element => {
    element.textContent = businessInfo.name;
  });
  
  if(document.getElementById("number")) document.getElementById("number").textContent = businessInfo.number;
  if(document.getElementById("year")) document.getElementById("year").textContent = businessInfo.year;
  if(document.getElementById("businessemail")) document.getElementById("businessemail").textContent = businessInfo.businessemail;
  if(document.getElementById("about")) document.getElementById("about").textContent = businessInfo.about;
  if(document.getElementById("owner")) document.getElementById("owner").textContent = businessInfo.owner;
  if(document.getElementById("mission")) document.getElementById("mission").textContent = businessInfo.mission;
  if(document.getElementById("service1")) document.getElementById("service1").textContent = businessInfo.service1;
  if(document.getElementById("service1desc")) document.getElementById("service1desc").textContent = businessInfo.service1desc;
  if(document.getElementById("service2")) document.getElementById("service2").textContent = businessInfo.service2;
  if(document.getElementById("service2desc")) document.getElementById("service2desc").textContent = businessInfo.service2desc;
  if(document.getElementById("service3")) document.getElementById("service3").textContent = businessInfo.service3;
  if(document.getElementById("service3desc")) document.getElementById("service3desc").textContent = businessInfo.service3desc;
});
