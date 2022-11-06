var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));


function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
 <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <img src="${data1[i].flag}" class="card-img-top " alt="...">
  <div class="card-body">
  <p class="card-title">Country Name:${data1[i].name}</p>
  <p class="card-title">Country Capital:${data1[i].capital}</p> 
  <a href="#" class="btn btn-primary ">Weather</a>
  </div>
</div>
  
   </div>`;
document.body.append(container); 
}

}
