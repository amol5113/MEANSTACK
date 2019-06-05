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

function uploadImage(){
    let parentBlock=$('#parent');
    let refBlock=parentBlock.children().first().next();
    let oldBlock=refBlock.children().first();
    //make clone of the block
    let newBlock=oldBlock.clone(true);
    //getting file file element
    let fileElement=$('#fileId1');
    //prop method is used property value eg. DOM properties
    //here we get first file
    let uploadFile=fileElement.prop('files')[0];
    //to make proper url with uploaded image
    let uploadFileAsURL=URL.createObjectURL(uploadFile);
    //byusing prop assign new URL to the newBlock (clone) 
    newBlock.children().first().prop('src',uploadFileAsURL);
    //added newly created block before old block
    refBlock.prepend(newBlock);
    
}

function uploadVideo(){
    let parentBlock=$('#parent');
    
    let refBlock=parentBlock.children().first().next().next();
    let oldBlock=refBlock.children().first();
    //make clone of the block
    let newBlock=oldBlock.clone(true);
    //getting file file element
    let fileElement=$('#fileId2');
    //prop method is used property value eg. DOM properties
    //here we get first file
    let uploadFile=fileElement.prop('files')[0];
    //to make proper url with uploaded image
    let uploadFileAsURL=URL.createObjectURL(uploadFile);
    //byusing prop assign new URL to the newBlock (clone) 
    newBlock.children().first().prop('src',uploadFileAsURL);
    //added newly created block before old block
    refBlock.prepend(newBlock);
    

}

/*function like(refElement){
    let like=$('#like');
    let text_like=$('#text-field').val();
    
    let text_like1=text_like;
        text_like1++;
    $("#text-field").val(text_like1);
    $('#like').html(text_like1);

}
*/

function likeHere(currentElement){
    //access the element
    console.log(currentElement);
    let countElement=currentElement.children[1];
    console.log(countElement);
    //access the value
    let countElementValue=countElement.innerHTML;

    //convert vthe string into the value
    let countElementValueAsNum=parseInt(countElementValue);

    countElementValueAsNum+=1;

    countElement.innerHTML=countElementValueAsNum;

}

