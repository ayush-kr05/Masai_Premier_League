// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",ScheduleMatches);

var Matches = JSON.parse(localStorage.getItem("schedule"))||[];
function ScheduleMatches(event){
    event.preventDefault();
    var matchNum=document.querySelector("#matchNum").value;
    var teamA=document.querySelector("#teamA").value;
    var teamB=document.querySelector("#teamB").value;
    var date=document.querySelector("#date").value;
    var venue=document.querySelector("#venue").value;

    var matchNoPresent=Matches.filter(function(elm){
       return matchNum==elm.matchNum;
    });

    if(matchNoPresent.length==0 && matchNum>0){
        var obj={
            matchNum: matchNum,
            teamA: teamA,
            teamB: teamB,
            date: date,
            venue: venue
        }
        Matches.push(obj);
        localStorage.setItem("schedule",JSON.stringify(Matches));


    }else if(matchNoPresent.length>0 && matchNum>=1 ){
        alert("Please Select Unique Match Number")
    }else{
        alert("Match Number Should be Positive");
    }


}
