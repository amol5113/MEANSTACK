function addElement() {
    let var1 = document.getElementById("base2-child2");
    let input = document.getElementById("text-box");
    
    let postData = input.value;
    if (postData != "") {
        let var2 = var1.children[1];

        let newBlock = var2.cloneNode(true);

        newBlock.innerHTML = postData;
        //var1.insertBefore(newBlock,var2.firstChild);
        var1.appendChild(newBlock);
        
    }
}
