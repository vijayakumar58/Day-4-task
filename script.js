//1.Compare two JSON have the same properties without order

var obj1={"name":"person 1","age":"5"};
var obj2={"age":"5","name":"person 1"};

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
     console.log(false);
} else {
     console.log(true);
}

//2.Rest countries ,display all the country flags 

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let res=JSON.parse(request.response);
         for (var i=0;i<res.length;i++){
        console.log(res[i].flags);
     }
};
 
//3.Rest countries , Print all countries names,regions,sub region & populations

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var res1=JSON.parse(request.response);
         for (var i=0;i<res1.length;i++){
        console.log("countrie : "+res1[i].name,",region: "+res1[i].region,",subregion : "+res1[i].subregion,",population : "+res1[i].population);
     }
};