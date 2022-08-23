// write js code here corresponding to favourites.html = JSON.parse(localStorage.getItem("schedule"))||[];



var Fav = JSON.parse(localStorage.getItem("favourites")) || [];


DisplayMatches(Fav);

function DisplayMatches(FavMatch){
    document.querySelector("tbody").innerText="";
    FavMatch.map(function(elm,ind){
        var row=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elm.matchNum;
        var td2=document.createElement("td");
        td2.innerText=elm.teamA;
        var td3=document.createElement("td");
        td3.innerText=elm.teamB;
        var td4=document.createElement("td");
        td4.innerText=elm.date;
        var td5=document.createElement("td");
        td5.innerText=elm.venue;
        var td6=document.createElement("td");
        td6.innerText="Remove";
        td6.style.cursor="pointer";
        td6.style.color="red";
        td6.addEventListener("click",function(){Remove(ind)});
        row.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(row);

    })
}

function Remove(ind){
    document.querySelector("tbody").innerText="";
    Fav.splice(ind,1);
    console.log(Fav);
    DisplayMatches(Fav);
    localStorage.setItem("favourites",JSON.stringify(Fav));
    
    
}