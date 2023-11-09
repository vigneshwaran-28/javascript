
head=null;

class Node{
    
    constructor(data){
        this.data=data;
        this.next=null;
    }

}

// console.log(Node.next);

function insertNodeAtFront(data){
    newnode=new Node(data);
    if(head==null)
     head=newnode;
    else{
        newnode.next=head;
        head=newnode;
    }
}


function insertNodeAtTail(data){
     newnode=new Node(data)
  if(head==null){
    head=newnode;
  }
  else{
    temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=newnode;
  }

}

function display(){
    temp=head;
    while(temp!=null){
      console.log(temp.data);
      temp=temp.next;
    }
}

// insertNodeAtTail(10);
// insertNodeAtTail(20);
// insertNodeAtTail(30);
// insertNodeAtTail(40);



insertNodeAtFront(10);
insertNodeAtFront(20);
insertNodeAtFront(30);
insertNodeAtFront(40);


display();
