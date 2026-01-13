const form=document.querySelector("form");
//This usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML=`Please give a vaid height ${height}`;
    }else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Please give a vaid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6) result.innerHTML=`<span>BMI is ${bmi} and you are Under Weight</span>`;
        if(bmi>18.6 && bmi>24.9) result.innerHTML=`<span>BMI is ${bmi} and you are Normal Range</span>`;
        if(bmi>24.9) result.innerHTML=`<span>BMI is ${bmi} and you are Over Weight</span>`;

    }
    //show result
   
})