//Object literal
var saloon={
    name:"The Fashion Pet",
    address:{
        state:"Baja California",
        city:"Tijuana",
        street:"Universidad 1245",
        zip:"25669"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 am"
    },
    pets:[]
}

//name,age,gender,breed,service,owner,phone
var counter=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.id=counter++;
    }
}
//create pets
var scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-555");
saloon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Mixed","Nails cut","Shaggy","555-555-555");
saloon.pets.push(scrappy);
var tweety=new Pet("Tweety bird",60,"male","Bird","Nails cut","Bugs Bunny","999-999-9999" );
saloon.pets.push(tweety);
// getting tha values from the inputs
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');

function register(){
    if(txtName.value===""){
            alert("Please enter the required fields,")
    }else{
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);
    saloon.pets.push(thePet);
    clear();
    displayTable();
    var alertElement=document.getElementById("alert");
    alertElement.classList.remove("hide");
    setTimeout(function(){
        alertElement.classList.add("hide");
    },3000);
    }
}

function clear(){
    txtName.value="";// clearing the input
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtOwner.value="";
    txtPhone.value="";
}
function display(){
    const petSection=document.getElementById(`pets`);
    var tmp="";
    for(var i=0; i<saloon.pets.length;i++){
        tmp+=`<div class="pet">
                <h3> 🐾 ${saloon.pets[i].name} 🐾</h3> 
                <p>Age: ${saloon.pets[i].age} </p>
                <p>Gender: ${saloon.pets[i].gender} </p>
                <p>Breed: ${saloon.pets[i].breed} </p>
                <p>Service: ${saloon.pets[i].service} </p>
                <p>Owner: ${saloon.pets[i].owner} </p>
                <p>Phone: ${saloon.pets[i].phone} </p>

              </div>`;

    }
    petSection.innerHTML=tmp;

}
function displayTable(){
    var table=document.getElementById("pets");
    var tr="";
    for(var i=0; i<saloon.pets.length;i++){
        tr+=`
                <tr id=${saloon.pets[i].id}>
                    <td>${saloon.pets[i].name}</td>
                    <td>${saloon.pets[i].age}</td>
                    <td>${saloon.pets[i].gender}</td>
                    <td>${saloon.pets[i].breed}</td>
                    <td>${saloon.pets[i].service}</td>
                    <td>${saloon.pets[i].owner}</td>
                    <td>${saloon.pets[i].phone}</td>
                    <td><button onclick="deletePet(${saloon.pets[i].id})">Delete</button></td>
                </tr>`;
    }
    table.innerHTML=tr;
}
function deletePet(id){
    
    var row=document.getElementById(id);
    row.remove();
    for(var i=0;i<saloon.pets.length;i++){
        var indexDelete;
        if(saloon.pets[i].pets.id===id){
            indexDelete=i;
        }
    }
    saloon.pets.splice(indexDelete,1);
}
function searchPet(){
    var txtSearch=document.getElementById("searchInput").value;
    var searchString=txtSearch.toLowerCase();
    //travel the array to search the string
    saloon.pets.forEach(pet=>{
       
        if(pet.name.toLowerCase()===searchString){
            document.getElementById(pet.id).classList.add(`highlight`)
        }else{
         document.getElementById(pet.id).classList.remove(`highlight`)
        }
    });

    //compare the txtsearch with all the pet names

    //highlight the result

}

function init(){
    console.log("app.js");
    displayTable();
    //hiij events
    document.querySelector(".btn-register").addEventListener("click",register);
    document.querySelector(".btn-search").addEventListener("click", searchPet);
}
window.onload=init; 
