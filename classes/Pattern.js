let n=5,len=n*2;

let carry=1,incree=0,beg=1,end=len;
function getNum(){

    for(let i=n;i>=1;i--){

      let res="",square=i*i+incree+1;
      
      for(let j=1;j<=len;j++){
          if(j>=beg && j<=end){
             if(j<=len/2){
                res+=(carry++)+'*';
              }
             else{
                res+=(square++)+'*';
                incree++;
              }
          }
          else{
            res+='  ';
          }
       }
       console.log(res);
       beg++;
       end--;
    }
}

getNum();
