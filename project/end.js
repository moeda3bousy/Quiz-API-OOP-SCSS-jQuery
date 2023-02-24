export class End{
    constructor(m){
        this.score=m;
        this.cc=document.getElementById('counta')
        this.tt=document.getElementById('tryagain')
        this.tt.addEventListener('click',()=>{this.getT()})
        this.ff()
    }
    
    getT(){
       const s = setInterval(()=>{this.tt.innerHTML+=' .'},1000)
        setTimeout(()=>{clearInterval(s); location.reload();},3900)
    }
    ff(){
        this.cc.innerHTML = this.score; 
    }

}