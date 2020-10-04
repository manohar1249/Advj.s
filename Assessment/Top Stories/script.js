
function getDetails(a){
    return new Promise(async function(resolve,reject){
        let data = await fetch("https://api.nytimes.com/svc/topstories/v2/"+a+".json?api-key=7fBWBLQiVm3xHcceX0DAACou9lnJaqor");
        let state = data.status;
        if(state==200){
            let res = await data.json();
            resolve(res);
        }
        else{
            reject('specify Correct Url')
        }

    })
}







let con = create('div','container','cont');
let nav = navList('ul','nav');
let li1 = navList('li','nav-item');
let li2 = navList('li','nav-item');
let li3 = navList('li','nav-item');
let li4 = navList('li','nav-item');
let li5 = navList('li','nav-item');
let li6 = navList('li','nav-item');
let li7 = navList('li','nav-item');
let a1 = anchor('a','nav-link active','#','Arts','myFun(this)','Arts');
let a2 = anchor('a','nav-link active','#','Food','myFun(this)','Food');
let a3 = anchor('a','nav-link active','#','World','myFun(this)','World');
let a4 = anchor('a','nav-link active','#','Sports','myFun(this)','Sports');
let a5 = anchor('a','nav-link active','#','Fassion','myFun(this)','Fassion');
let a6 = anchor('a','nav-link active','#','Politics','myFun(this)','Politics');
let a7 = anchor('a','nav-link active','#','Technology','myFun(this)','Technology');
li1.append(a1);
li2.append(a2);
li3.append(a3);
li4.append(a4);
li5.append(a5);
li6.append(a6);
li7.append(a7);
nav.append(li1,li2,li3,li4,li5,li6,li7);
con.append(nav);
document.body.append(con);

let result = {};
let check = 0;

async function myFun(a){
    try{
    let sec = a.id;
    console.log(sec);
    let data = await getDetails(sec);
    console.log(data);
    result = data;
    console.log(result);
    check++;
    if(check<=1){
    for(let key in data){
        if(key=="results"){
            let r = row('div','row')
            for(let i=0;i<data[key].length;i++){
                let c = col('div','col-lg-4 col-sm-6 col-12');
                let cmd = col('div','card mb-3');
                let ng = col('div','row no-gutters');
                let c1 = col('div',"col-md-8");
                let cb = col('div',"card-body");
                let h1 = tag('h5','name','h1'+i);
                let h3 = tag('h3','section','h3'+i);
                let h4 = tag('h4','title','h4'+i);
                let p = tag('p','abstract','abstract'+i);
                let h5 = tag('h5','biline','biline'+i);
                let p1 = tag('p','cdate','cdate'+i);
                let p2 = tag('p','subsection','subsection'+i);
                let surl = shortUrl('a','#','readmore','ShortUrl','url'+i,'_blank');
                let an = ancn('a','#','readmore','readmore','a'+i,'readMore(this)');
                let br = document.createElement('br');
                cb.append(h1,h3,h4,h5,p,p1,p2,an,br,surl);
                c1.append(cb);
                let c2 = col('div',"col-md-4");
                let imag = img('img','#','img-thumbnail','imag'+i,'image');
                c2.append(imag);
                ng.append(c1,c2);
                cmd.append(ng);
                c.append(cmd);
                r.append(c);
                
            }
            con.append(r);
            document.body.append(con);
        }
    }
let u =0;

    for(let key in data){
        if(key=='section'){
            document.getElementById('h1'+u).innerHTML=data[key];
            u++;
            
        }
        else if(key=="results"){
            for(let i=0;i<data[key].length;i++){
                for(let pin in data[key][i]){
                    if(pin=='section'){
                        document.getElementById('h3'+i).innerHTML=data[key][i][pin];
                        
                    }
                    else if(pin=='title'){
                        document.getElementById('h4'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='abstract'){
                        document.getElementById('abstract'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='byline'){
                        document.getElementById('biline'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='multimedia'){
                        let url = data[key][i][pin][4]['url'];
                        document.getElementById('imag'+i).src=url;
                        //console.log(data[key])
                    }
                    else{
                        document.getElementById('h1'+i).innerHTML=sec
                    }
                   

                }
                
            }
        }
       
    }

}

else{
    let u=0;
    for(let key in data){
        if(key=='section'){
            document.getElementById('h1'+u).innerHTML=data[key];
            u++;
            
        }
        else if(key=="results"){
            for(let i=0;i<data[key].length;i++){
                for(let pin in data[key][i]){
                    if(pin=='section'){
                        document.getElementById('h3'+i).innerHTML=data[key][i][pin];
                        document.getElementById('subsection'+i).innerHTML="";
                        document.getElementById('cdate'+i).innerHTML="";
                        document.getElementById('url'+i).href="#";
                    }
                    else if(pin=='title'){
                        document.getElementById('h4'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='abstract'){
                        document.getElementById('abstract'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='byline'){
                        document.getElementById('biline'+i).innerHTML=data[key][i][pin];
                    }
                    else if(pin=='multimedia'){
                        let url = data[key][i][pin][4]['url'];
                        document.getElementById('imag'+i).src=url;
                        //console.log(data[key])
                    }
                    else{
                        document.getElementById('h1'+i).innerHTML=sec
                    }
                   

                }
                
            }
        }
       
    }
}

    }
    catch(err){
        console.log(err);
    }
    
}
function readMore(a){
    let b = a.id;
    let c = b.split("");
    let res = parseInt(c[1]);
    console.log(res);
    let d1 = result['results'][res]['published_date'];
    let d = new Date(d1);
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     let mon = months[d.getMonth()];
     let dd = d.getDate();
     adate = mon+"-"+dd;
    document.getElementById('url'+res).href=result['results'][res]['short_url'];
    document.getElementById('subsection'+res).innerHTML=result['results'][res]['subsection'];
    document.getElementById('cdate'+res).innerHTML=adate;

}
function create(ele,name,id){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    return a;
}
function navList(ele,name){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    return a;
}
function anchor(ele,name,link,id,fun,val){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('href',link);
    a.setAttribute('id',id);
    a.setAttribute('onClick',fun);
    a.append(val);
    return a;
}
function row(ele,name){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    return a;
}
function col(ele,name){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    return a;
}
function img(ele,src,name,id,alt){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('src',src);
    a.setAttribute('id',id);
    a.setAttribute('alt',alt);
    return a;
}
function tag(ele,name,id){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    return a;
}
function ancn(ele,hre,name,val,id,fun){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    a.setAttribute('href',hre);
    a.setAttribute('onClick',fun);
    a.append(val);
    return a;
}
function shortUrl(ele,hre,name,val,id,target){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    a.setAttribute('href',hre);
    a.setAttribute('target',target);
    a.append(val);
    return a;
}