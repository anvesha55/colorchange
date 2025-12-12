// for every color we have an hex value 
// # 
//1234567890 numbers
//ABCDEF
//hex colour 16 mei se 6 random leta h or color banata hai
// const btn =document.getElementById("button");//extracting where we have to use
const btn =document.querySelector("#button");//extracting where we have to use
//arrow func to give random color
const randomColor=() =>{
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
};
//0 -> 0.99 *16 random func give value till 0.99 so we multiply it by 16

// console.log(randomColor());

function changeRandomColor(){//HOD
    // document.body.style.backgroundColor=randomColor();
    document.querySelector('body').style.backgroundColor = randomColor();
}
btn.addEventListener("click",changeRandomColor);//here we have btn.addeve... as button pe click krne pe colour change hona chahiye