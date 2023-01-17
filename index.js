let arr=[];
let track=0;
let btn=document.getElementById('btn');


btn.addEventListener(('click'),(e)=>{
    if(track!=0 && track<90){
        document.getElementById("number").innerText=arr[track];
    }
    else{
        document.getElementById("number").innerText=arr[track];
        btn.innerText='Generate Next';
    }
    console.log(`${track}`);
    track++;
})
function call(){
    const set=new Set;
    while(set.size<90){
        let x=Math.floor((Math.random()*90)+1);
        set.add(x);
        // if(arr.indexOf(x)===-1){
        //     arr.push(x);
        //     console.log(x+1);
        //     count++;
        // }
    }
    arr=Array.from(set);
    console.log(arr[0]);
    console.log(Array.from(set));
    // document.getElementById("number").innerText=arr[0];
    // document.getElementById('label').innerText="Solved!"
    // for(let i=0;i<90;i++){

    // }
}
call();