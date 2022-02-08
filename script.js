async function dogs(){
    try {
        let dogs=await fetch("https://dog.ceo/api/breeds/list/all")
        let doglist=await dogs.json();
        
        console.log(doglist.message.basenji)
        for( var dog in doglist.message){
            let list=document.createElement("li");


            list.innerHTML=dog;
            let ul=document.getElementsByClassName("breedlist")[0];
            ul.appendChild(list);
            
        }


        
    } catch (error) {
        console.log(error)
    }
   
}
dogs();



async function randomimage(){
    try {
        var getdata=await fetch("https://dog.ceo/api/breeds/image/random/3")
         var imagedata=await getdata.json();

         let img1=document.getElementsByClassName("imagediv1")[0];
         let img2=document.getElementsByClassName("imagediv1")[1];
         let img3=document.getElementsByClassName("imagediv1")[2];
         img1.src=imagedata.message[0];
         img2.src=imagedata.message[1];
         img3.src=imagedata.message[2];

         console.log(imagedata.message[0])
         console.log(imagedata.message[1])
         console.log(imagedata.message[2])
    } catch (error) {
        console.log(error)
        
    }
    
}
randomimage();
var button=document.getElementById("button")
button.addEventListener("click",function(){
    
    randomimage();
})


async function subbreedlist(){
    try {
        let getdata=await fetch("")
        
    } catch (error) {
        
        console.log(error);
    }

}