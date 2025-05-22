var second = 0 ;
var minute = 0 ;
var hour = 0 ;
let timerid;
let bug = 1;

let s = document.getElementById("second")
let m = document.getElementById("minute")
let h = document.getElementById("hour")
function start(){
    if (bug == 1){

        bug = 0
        timerid = setInterval(()=>{
            second++
            if( second >= 60 ){
                second = 0;
                minute++
            }
            else if( minute >= 60 ){
                minute = 0;
                hour++
            }
            
            
            
            if(second < 10 ){
                s.innerHTML = "0"+second
            }
            else{
                s.innerHTML = second
            }
            if(minute < 10 ){
                m.innerHTML = "0"+minute
            }
            else{
                m.innerHTML = minute
                
            }
            if(hour < 10 ){
                h.innerHTML = "0"+hour
            }
            else{ 
                h.innerHTML = hour
            }
        }, 1000)


    }
    else{  }
}

// second to minute and hour convertion


function stop(){
    bug = 1;
 clearInterval(timerid)
}

function reset(){
    bug = 1
    clearInterval(timerid)
    second = 0 ;
    minute = 0 ;
    hour = 0 ;

    s.innerHTML = "00"
    m.innerHTML = "00"
    h.innerHTML = "00"

}
