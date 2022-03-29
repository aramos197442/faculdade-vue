const meuSegundoApp = Vue.createApp({
    data() { 
        return { 
            nome: '', 
            sobrenome: '', 
            idade: '' ,
            cor: 'hsl(207, 30%, 90%)',
        } 
    } 
}) 

const mountedApp = meuSegundoApp.mount('#page')

/*
hsl(208, 87%, 12%)

hsl(207, 30%, 90%)

*/