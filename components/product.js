app.component('product',{
    template:`
    <div>
        <h1>{{fullName}}</h1>
        <a :href="link">Goto</a>
        <ul>
            <li v-for="item in items">{{item.type}}</li>
        </ul>
        <p v-if="premium">{{cart}}</p>
        <button @click="addCart">Add</button>
    </div>`,
    props: {
        premium:{
            default:false
        }
    },
    data(){
        return {
            firstName: 'Haider',
            secondName: "Ali Molani",
            link: "http://www.facebook.com",
            items: [{id:1,type:'Shirt'},{id:2,type:'T-Shirt'},{id:3,type:'Jeans'}],
            cart:0,
        }
       },
       methods: {
        addCart(){
            this.firstName = 'Muskan'
            this.cart+=1;
            this.$emit('update','data');
        }
       },
       computed: {
        fullName(){
            return this.firstName + this.secondName;
        }
       }
})