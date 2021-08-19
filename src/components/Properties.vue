<template>
    <div>
        <h1>Properties</h1>
        <h2>Fullname  {{fullName}} </h2>
        <h2>Total - {{items.reduce((total, curr) => (total = total+ curr.price),0)}}</h2>
        <h2>Total -{{title}} {{total}} </h2>
    </div>
</template>

<script>
    export default {
        name: 'Properties',
        data(){
            return {
                firstname:'Aakash',
                lastname:'Patale',
                items:[
                    {
                        id:1,
                        title:'Tv',
                        price:200,
                    },
                     {
                        id:2,
                        title:'Tv1',
                        price:300,
                    },
                     {
                        id:3,
                        title:'Tv3',
                        price:400,
                    }
                ]
            }
        },

        props:{
            title:String,
        },

        computed:{
            fullName(){
                return `${this.firstname} ${this.lastname}`
            },
             total(){
            return this.items.reduce((total, curr) => (total = total+ curr.price),0)
        }
        },

       


    }
</script>

<style scoped>

</style>