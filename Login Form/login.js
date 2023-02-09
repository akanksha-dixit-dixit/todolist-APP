function validation(){
    var name = document.getElementById('Name').value;
    if(name === '' || name === null ){
        document.getElementById('error').innerHTML="** Please Provide Name ";
    }
    
}
