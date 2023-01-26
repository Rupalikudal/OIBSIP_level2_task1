
let string=""; //intial blank screen
//select all with class button 
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        //to evaluate after "="
        if(e.target.innerHTML == '=')    
        {
            string = eval(string);
            document.querySelector('input').value=string;
        }
         
        //obtain blank string n click of "C"++
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value=string;
        }

        else{
        console.log(e.target) //select target 
        string= string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }

    })
})