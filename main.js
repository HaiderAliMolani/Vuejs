const app = Vue.createApp({
  data(){
    return {
        premium: false
    }
  },
  methods: {
    df(data){
        console.log('h ',data);
    }
  }
});