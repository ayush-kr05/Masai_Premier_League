// write js code here corresponding to matches.html
var Matches = JSON.parse(localStorage.getItem("schedule"))||[];

DisplayMatches(Matches);

function DisplayMatches(Match){
    document.querySelector("tbody").innerText="";
    Match.map(function(elm,ind){
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
        td6.innerText="Favourite";
        td6.style.cursor="pointer";
        td6.style.color="red";
        td6.addEventListener("click",function(){AddToFav(elm)});
        row.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(row);

    })
}

var Fav = JSON.parse(localStorage.getItem("favourites")) || [];

function AddToFav(elm){

    var FavPresent=Fav.filter(function(fav){
        return fav.matchNum==elm.matchNum;
    })

    // console.log(elm);
    if(FavPresent.length>0){
        alert("Already Present is You Favourites Matches");
    }else{
        Fav.push(elm);
        localStorage.setItem("favourites",JSON.stringify(Fav));
    }

}

function FindVenues(){
    var SelctedVenue=document.querySelector("#filterVenue").value;

    var FilteredArr = Matches.filter(function(elm){
        return elm.venue==SelctedVenue;
    })
    DisplayMatches(FilteredArr);

}