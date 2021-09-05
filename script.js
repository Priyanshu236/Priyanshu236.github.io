const inputbox=document.querySelector('.inputField input');
const addbtn=document.querySelector('.inputField button');
const delbtn=document.querySelector('.clearall');

const todolist=document.querySelector('.addtask');
const pendtasks=document.querySelector('.num');
addbtn.onclick=()=>{
    
     let userdata=inputbox.value;
    let getlocalStorage=localStorage.getItem("New Todo");
    if(getlocalStorage==null){
        listArr=[];
    }else{

        listArr=JSON.parse(getlocalStorage);
        
    }
    listArr.push(userdata);
    localStorage.setItem("New Todo",JSON.stringify(listArr))
    showtasks();
}
showtasks();

function showtasks(){
 let getstorage=localStorage.getItem("New Todo")
 if(getstorage==null){
     listArr=[]
 }   else{
     listArr=JSON.parse(getstorage)
 }
 let newLiTag='';
 let size=0;
 listArr.forEach((element,index) => {
     size=size+1;
    newLiTag+=`<li>${element} <span onclick="deleteTask(${index})";>Delete</span></li>`;
});
pendtasks.innerHTML=size;
inputbox.value="";
todolist.innerHTML=newLiTag;
}

function deleteTask(index){
    let getstorage=localStorage.getItem("New Todo");
    listArr=JSON.parse(getstorage)
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showtasks();
}
delbtn.onclick=()=>{
    listArr=[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showtasks();
}
