

// product slider 

var slideSpans = document.getElementsByClassName('slideSpan');
var SlidDivs = document.getElementsByClassName('SlidDiv');
var lengths = 0;
slideSpans[1].onclick = () => {
lengths++;
for (var i of SlidDivs) {
    if (lengths==0) { i.style.left = "0px"; }
    if (lengths==1) { i.style.left = "-370px"; }
    if (lengths==2) { i.style.left = "-740px"; }
    if (lengths==3) { i.style.left = "-1110px"; }
    if (lengths==4) { i.style.left = "-1480px"; }
    if (lengths==5) { i.style.left = "-1850px"; }
    if (lengths==6) { i.style.left = "-2220px"; }
    if (lengths==7) { i.style.left = "-2590px"; }
    if (lengths==8) { i.style.left = "-2960px"; }
    if (lengths>8) { lengths=8;}
    
}

}
slideSpans[0].onclick = () => {
lengths--;
for (var i of SlidDivs) {
    // if (lengths==0) { i.style.left = "0px"; }
    // if (lengths==1) { i.style.left = "-740px"; }
    // if (lengths==2) { i.style.left = "-1480px"; }
    // if (lengths==3) { i.style.left = "-2220px"; }
    // if (lengths<0) { lengths=0;}

    if (lengths==0) { i.style.left = "0px"; }
    if (lengths==1) { i.style.left = "-370px"; }
    if (lengths==2) { i.style.left = "-740px"; }
    if (lengths==3) { i.style.left = "-1110px"; }
    if (lengths==4) { i.style.left = "-1480px"; }
    if (lengths==5) { i.style.left = "-1850px"; }
    if (lengths==6) { i.style.left = "-2220px"; }
    if (lengths==7) { i.style.left = "-2590px"; }
   
    if (lengths<0) { lengths=0;}
    
}

}





// cart icon work 


