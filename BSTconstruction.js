class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let CurrentNode = this;
		while(true){
		 if (value < CurrentNode.value){
		  if(CurrentNode.left == null){
			  CurrentNode.left = new BST(value);
				break;
			}
			else{
			  CurrentNode = CurrentNode.left;
			}
		 }
		 else{
		   if(CurrentNode.right == null){
			  CurrentNode.right = new BST(value);
				break;
			 }
			else{
			  CurrentNode = CurrentNode.right;
			}
		 }
		}
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    let CurrentNode = this;
		while(CurrentNode !== null){
		 if(value > CurrentNode.value){
		   CurrentNode = CurrentNode.right;
		 }
		 else if(value < CurrentNode.value){
		   CurrentNode = CurrentNode.left;
		 }
		 else{
		   return true;
		 }
		}
		return false;
  }

  remove(value,parentnode = null) {
    let currentnode = this;
		while(currentnode !== null){
		 if(currentnode.value > value){
		   parentnode = currentnode;
			 currentnode = currentnode.left;
		 }
		 else if (currentnode.value < value){
		   parentnode = currentnode
			 currentnode = currentnode.right;
		 }
		 else {
		    if(currentnode.left !== null && currentnode.right !==null){
				  currentnode.value = currentnode.right.getmin();
					currentnode.right.remove(currentnode.value, currentnode)
				}
				else if(parentnode === null){
				  if(currentnode.left !== null){
					  currentnode.value = currentnode.left.value;
						currentnode.right = currentnode.left.right;
						currentnode.left = currentnode.left.left;
					}
					else if(currentnode.right !== null){
					  currentnode.value = currentnode.right.value;
						currentnode.left = currentnode.right.left;
						currentnode.right = currentnode.right.right;
					}
				}
				else if (parentnode.left === currentnode){
				   parentnode.left = currentnode.left !== null ? currentnode.left : currentnode.right ;
				}
				else if (parentnode.right === currentnode){
				   parentnode.right = currentnode.left !== null ? currentnode.left : currentnode.right ;
				}
				break;
		 }
		}
    // Do not edit the return statement of this method.
    return this;
  }
	getmin(){
 let currentnode = this;
 while(currentnode.left !== null){
  currentnode = currentnode.left;
 }
 return currentnode.value;
}
}
