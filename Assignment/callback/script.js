function myFunction(){
    document.getElementById('num').value=10;
   
    
}

let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let a = document.getElementById('num').value;
   let b = parseInt(a);
 
        let x = function(a,b) 
        {
            if(a==0){
                document.getElementById('num').value='happy indipendence day';
                
            }
            else{
                setTimeout(b(a),3000);
            }
        }
        var y = function(a)
        {
            
            
                a--;
                console.log(a);
                setTimeout(function(){
                    document.getElementById('num').value=a;
                    x(a,function(r){
                        y(r);})},3000);
                

            
            
        }
        x(b,function(r){
            y(r);
        })
})


