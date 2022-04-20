const app = new Vue({
    el: '#root',
    data:{
        es1:{
            titolo: 'E per ora!!',
            immaginePro: 'pro.png',
            immagineContro:'contro.png',
            miaClasse: 'hero',
        },
    },
    methods:{
        addLike(){
            this.es1.titolo='Grazie!'
        },
        addNotLike(){
            this.es1.titolo='Ritenta sarai più fortunato!'
        }
        
    }
})