function validate(){
    
    let age=document.getElementById("age").value;
    let ischak=document.getElementById("agree").checked;

  
    return ischak && !isnan(age)
}