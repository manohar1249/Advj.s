
var getdata = function(){
    return new Promise(function(resolve,reject){
        let data = [];
        let request = new XMLHttpRequest();
        let urlrequest = "https://restcountries.eu/rest/v2/all";
        request.open('GET',urlrequest,true);
        request.send();
        request.onload = function() {
            //response in string format
          //console.log(this.response);
              
              // converting into json format
           data = JSON.parse(this.response)
         // console.log(data.length);
        }
        setTimeout(function(){
            if(data.length>0){
                resolve(data)
                }
                else{
                reject('hii')
                }
        },5000)
        

    })
}

getdata()
    .then(function(data){
        for(let i=0;i<3;i++){
            for(let key in data[i]){
                
                if(key=="name"){
                document.getElementById('name'+i).innerHTML = data[i][key];
                console.log(data[i][key])
                }
                else if(key=="flag"){
                    document.getElementById('flag'+i).innerHTML = data[i][key];
                }
                else if(key=="region"){
                    document.getElementById('region'+i).innerHTML = data[i][key];
                }
                else if(key=="currencies"){
                    for(let key1 in data[i][key][0] ){
                        if(key1=="code"){
                            document.getElementById('ccode'+i).innerHTML = data[i][key][0][key1];
                        }
                        else if(key1 == "name"){
                            document.getElementById('cname'+i).innerHTML = data[i][key][0][key1];  
                        }
                    }
                }
                else if(key=="latlng"){
                    for(let j=0;j<data[i][key].length;j++){
                        let a = document.getElementById('latling'+i).innerHTML;
                        document.getElementById('latling'+i).innerHTML=a+data[i][key][j]
                    }
                }
               
    
            }
        }
        let g = 3;
        let f =3;
        //let con = HTMLCollection[1];
        //console.log(con);
        for(let i=3;i<=83;i++){
            let a = document.createElement('div');
            a.setAttribute('class','row')
           
            for(let j=0;j<3;j++){
                let col = colFun('div','col-4',j);
                let c = card('div','card');
                let cb = card('div','card-body');
                let h = document.createElement('h5');
                h.setAttribute('class','card-title');
                h.append('Rest Country');
                let p1 = tag('p','card-text','latling'+g)
                let p2 = tag('p','card-text','flag'+g)
                let p3 = tag('p','card-text','region'+g)
                let p4 = tag('p','card-text','ccode'+g)
                let p5 = tag('p','card-text','cname'+g)
                let p6 = tag('p','card-text','name'+g)
                cb.append(h,p1,p2,p3,p4,p5,p6);
                c.append(cb);
                col.append(c);
                a.append(col);
                //con.append(a);
                g++;
            }
            document.body.append(a);


        }
        for(let i=3;i<=83;i++){
            
            for(let j=0;j<3;j++){

                for(let key in data[f]){
                
                    if(key=="name"){
                    document.getElementById('name'+f).innerHTML = data[f][key];
                    //console.log(data[i][key])
                    }
                    else if(key=="flag"){
                        document.getElementById('flag'+f).innerHTML = data[f][key];
                    }
                    else if(key=="region"){
                        document.getElementById('region'+f).innerHTML = data[f][key];
                    }
                    else if(key=="currencies"){
                        for(let key1 in data[f][key][0] ){
                            if(key1=="code"){
                                document.getElementById('ccode'+f).innerHTML = data[f][key][0][key1];
                            }
                            else if(key1 == "name"){
                                document.getElementById('cname'+f).innerHTML = data[f][key][0][key1];  
                            }
                        }
                    }
                    else if(key=="latlng"){
                        for(let j=0;j<data[f][key].length;j++){
                            let a = document.getElementById('latling'+f).innerHTML;
                            document.getElementById('latling'+f).innerHTML=a+data[f][key][j]
                        }
                    }
                    
                }
                f++;
            }
        }
    })
    .catch(function(err){
        console.log(err);
    })

function colFun(element,name,num){
    let a = document.createElement(element);
    a.setAttribute('class',name);
    a.setAttribute('id',num);
    return a;
}

function card(ele,name){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    return a;
}

function tag(element,name,num){
    let a = document.createElement(element);
    a.setAttribute('class',name);
    a.setAttribute('id',num);
    return a;
}