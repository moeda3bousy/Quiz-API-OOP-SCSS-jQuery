import { End } from './end.js'
export class Quiz {

constructor(da,di){
this.data = da ;
this.dii = di;
this.count=0;
this.score=0;
this.question= document.getElementById('q');
this.answers= document.getElementById('answers');
this.fv= document.getElementById('f');
this.sv= document.getElementById('s');
this.secondBtn= document.getElementById('submit1');

this.secondBtn.addEventListener('click',()=>{this.getSecond()})
this.getQuestion()
}

async checkAnswer(){
  
    let x = [...this.dii].filter((e)=>e.checked==true)[0]?.id
    console.log(x)
   
    if( x == this.data[this.count].correct_answer ){
        this.score++
        $('.correct').fadeIn()
     }else{
        $('.incorrect').fadeIn()
     }

     this.answers.innerHTML=''
}

async getSecond(){
    if (this.count<this.data.length-1){
     await this.checkAnswer()
     this.count++
     this.getQuestion()
    }else{
        await this.checkAnswer()
        let theEnd= new End(this.score);
        $('.two').fadeOut(1000,
            ()=> $('.three').fadeIn(1000))
            
    }
}

getQuestion(){
    let ans = this.shuffle([...this.data[this.count].incorrect_answers,this.data[this.count].correct_answer]); 
    
    this.question.innerHTML=this.data[this.count].question;
    this.fv.innerHTML=this.count+1;
    this.sv.innerHTML=this.data.length;
   
    for(let i=0; i<ans.length;i++){
        this.answers.innerHTML+= `<div> 
        <label class="form-check-label fw-bold" id='m'>
     <input class="form-check-input bg-dark" type="radio" name="difficulty" id='${ans[i]}'>
     ${ans[i]}
   </label>`
    }
    
   $('.correct').fadeOut()
   $('.incorrect').fadeOut()
    }


shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

}
