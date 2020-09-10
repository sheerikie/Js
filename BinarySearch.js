function BST(value){
  this.value=value;
  this.left=null;
  this.right=null;
}
BST.prototype.addValue=function(value){
  if(value <= this.value){
  if(!this.left){
  this.left=new BST(value);
  }
  else{
    this.left.addValue(value)
  }
  

}else if (value > this.value){
  if(!this.right){
this.right=new BST(value);
  }
  else{
    this.right.addValue(value);
  }

}
}

BST.prototype.contains=function(value){
if(value == this.value){
return true;
}
else if(value <= this.value){
  if(!this.left){
return false
  }
  else{
return this.left.contains(value)
  }
}
else if(value>this.value){
  if(!this.right){
return false
  }
  else{
return this.right.contains(value)
  }
}
}

BST.prototype.depthFirstTraversal=function(log,status){
if(status=="pre-order")log(this.value);
if(this.left) this.left.depthFirstTraversal(log,status);

if(status=="in-order")log(this.value);
if (this.right) this.right.depthFirstTraversal(log,status);
if(status=="post-order")log(this.value);
}

BST.prototype.breadthFirstTraversal=function(log){
let queue=[this];
while(queue.length){
  let treeNode=queue.shift();
  log(treeNode);
if(treeNode.left) queue.push(treeNode.left);
if(treeNode.right) queue.push(treeNode.right);
}
}


let anser= new BST(6);
anser.addValue(7);
anser.addValue(8);
anser.addValue(4);
anser.addValue(3);
anser.contains(4);
anser.depthFirstTraversal(log,"post-order");
anser.breadthFirstTraversal(log);

console.log(anser.contains(4));

function log(value){
  console.log(value.value)
}

