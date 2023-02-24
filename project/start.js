import {Quiz} from "./quiz.js";
export class Start {
    constructor(){
        this.category = document.getElementById('ca');
        this.difficulty = document.getElementsByName('difficulty');
        this.te = document.getElementById('te')
        this.count = document.getElementById('count');
        this.firstBtn= document.getElementById('startbtn');
        this.firstBtn.addEventListener('click',this.getQuiz.bind(this));
    }

   async getQuiz(){
    if (this.count.value > 0 && this.count.value <= 50 ){
    let ca = this.category.value;
    let d = [...this.difficulty].filter((e)=>e.checked==true)[0].id;
    let c = this.count.value;
    this.firstBtn.innerHTML='<i class="fa fa-spinner fa-spin"></i>' 
    let u = `https://opentdb.com/api.php?amount=${c}&category=${ca}&difficulty=${d}`;
    let da = await this.getApi(u);
   
    $('.one').fadeOut(1000,()=>{
        let myQuiz = new Quiz(da,this.difficulty);
        $('.two').fadeIn(1000);
    });
    }else{
        $(this.te).addClass('alert alert-danger');
        this.te.innerHTML='Enter a Number  ( 1 - 50 )';
        this.firstBtn.innerHTML='start';
    }

    }

    async getApi(u){
        let api = await fetch(u);
        let data = await api.json();
        return data.results;
    }


}