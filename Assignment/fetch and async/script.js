
function getReport(){
    return new Promise(async function(resolve,reject){
            let data = await fetch("https://restcountries.eu/rest/v2/all");
            let state =  data.status;
            if(state==200){
                let res = await data.json();
                resolve(res);
            }
            else{
                reject('specify Correct Url')
            }
    })
}
function getWheather(a,b){
    return new Promise(async function(resolve,reject){
        let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+","+b+","+",india&appid=9619d39af219ba63791bf95deadc7fae")
        let state =  data.status;
            if(state==200){
                let res = await data.json();
                resolve(res);
            }
            else{
                reject('specify Correct Url')
            }
    })
}
 /*getReport()
 .then(function(data){
     console.log(data);
 })*/

 async function execute(){
     try{
         let data = await getReport();
         console.log(data);
        // dom();
        let f=0;
        let g=0;
        let con = create('div','container',1);
        
        for(let i=1;i<=83;i++){
            let row = create('div','row',i);
            for(let j=0;j<3;j++){
                let col =  create('div','col-4',j);
                let c =  createCard('div','card',"width: 18rem;");
                let img =  createCardimage('img','card-img-top',"img"+f,'Load image','');
                let cbody =  createBody('div','card-body');
                let h5 =  tag('h5','heading','h'+f);
                
                let p1 =  tag('p','para','p1'+f);
                let p2 =  tag('p','para','p2'+f);
                let p3 =  tag('p','para','p3'+f);
                let p4 =   tag('p','para','p4'+f);
                let p5 =  tag('p','para','p5'+f);
                let p6 =   tag('p','para','p6'+f);
                let btn =  createBtn('input','submit','get wheather','btn '+f,"myfun(this)");
               
                 
                
                    cbody.append(h5,p1,p2,p3,p4,p5,p6,btn);
                c.append(img,cbody);
                col.append(c);
                row.append(c);
                f++
              
                
                
            }
           
            con.append(row);
        }
        
        document.body.append(con);
       
for(let i=1;i<=83;i++){
    for(let j=0;j<3;j++){
        for(let key in data[g]){

            if(key=='flag'){
                let k = data[g][key];
                //console.log(typeof(k));
                document.getElementById('img'+g).src=k;
            }
            else if(key=='name'){
                document.getElementById('h'+g).innerHTML=data[g][key];
            }
            else if(key=='capital'){
                document.getElementById('p1'+g).innerHTML=data[g][key];
            }
            else if(key=='region'){
                document.getElementById('p2'+g).innerHTML=data[g][key];
            }
            else if(key=='population'){
                document.getElementById('p3'+g).innerHTML=data[g][key];
            }
            else if(key=='numericCode'){
                document.getElementById('p4'+g).innerHTML=data[g][key];
            }

        }
        g++;
    }
}

     }
     catch(err){
         console.log(err);
     }
 }

 execute();


async function myfun(a){
    try{
   console.log(a);
   let f = a.id;
   let v = f.split(" ");
   let n = parseInt(v[1]);
   let con = document.getElementById('h'+n).innerHTML;
   let reg = document.getElementById('p2'+n).innerHTML;

   let data = await getWheather(reg,con);
   for(let key in data){
       if(key=='main'){
           for(let j in data[key]){
            document.getElementById('p5'+n).innerHTML=data[key]['temp']+" temperature";
            document.getElementById('p6'+n).innerHTML=data[key]['feels_like']+" FeelsLike";
           }
       }
   }
   console.log(data);
    }
    catch(err) {
        console.log(err);
    }

}



 function create(ele,name,idnum){
     let a = document.createElement(ele);
     a.setAttribute('class',name);
     a.setAttribute('id',idnum);
     return a;
 }
 function createCard(ele,name,sty){
     let a = document.createElement(ele);
     a.setAttribute('class',name);
     a.setAttribute('style',sty);
     return a;
 }
 function createCardimage(ele,name,idnum,alt,src){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',idnum);
    a.setAttribute('src',src);
    a.setAttribute('alt',alt);
    return a;
}
function tag(ele,name,idnum){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',idnum);
    return a;
}

function createBtn(ele,type,value,idnum,fun){
    let a = document.createElement(ele);
    a.setAttribute('type',type);
    a.setAttribute('value',value);
    a.setAttribute('id',idnum);
    a.setAttribute('onClick',fun);
    return a;

}
function createBody(ele,name){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    return a;
}
