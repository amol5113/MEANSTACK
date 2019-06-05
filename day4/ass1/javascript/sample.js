function addElement() {
        let parent = document.querySelector("#parent");
        let Block=parent.children[1];
        let oldBlock=Block.children[0];

        //get input from text box
        let input=document.querySelector("#text-box").value;

        let newBlock=oldBlock.cloneNode(true);

        newBlock.innerHTML=input; 
        parent.insertBefore(newBlock,parent.secondChild);

}

function addElementUsingJQuery(){
    let parentBlock=$('#parent');
    
    //accessing second child of the parent block
    let refBlock=parentBlock.children().first().next();
    let oldBlock=refBlock.children().first();
   
    //get the text field input value 
    let postValue=$("#text-box").val(); 

    //make the copy of the block
    let newBlock=oldBlock.clone(true);
    
    newBlock.html(postValue);

    parentBlock.append(newBlock);


}