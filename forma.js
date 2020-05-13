window.onload = function (){
    let forma = document.querySelector('#forma');
    let plus = document.querySelector('#plus');
    
    var arr = ["Мобильный", "Домашний", "Рабочий"];

    plus.addEventListener('click',function(){
        let div = document.createElement('div');
        let select = document.createElement('select');
        let input = document.createElement('input');
        let button = document.createElement('button');
        
        forma.append(div);
        div.classList.add("di")
        div.append(select);
        select.classList.add('sel')
        for(var i=0; i< arr.length; i++){
            var option = document.createElement('option');
            option.setAttribute("value", arr[i]);
            option.innerHTML = arr[i];
            select.appendChild(option)
        }
        div.append(input);
        input.value = "+7(9XX)XXX-XX-XX";
        div.append(button);
        button.classList.add("but");
        button.innerText = "-";
    });
    
    forma.addEventListener('click', function(event){
        if(event.target.tagName == 'BUTTON'){
            event.target.parentNode.remove();
            
            
 }
});
}







                    
