<template>
    <div class="LogninDiv">
        <h1 style="backgroundColor:pink;color:white;width:40%;margin:auto;marginBottom:2%;borderRadius:20px">LogIn Page</h1>
        
            <form @submit.prevent="LoginForm" class="form">
                <div v-if="error.length">
                 
                <marquee> Oops..You Have Missed Something..!</marquee>
                 <hr style="width:50%;margin:auto"/>
                <p v-for="e in error" :key="e.name" style="color:red">{{e}}</p>
                </div>
                <label for="firstname"  >Enter Your Full Name</label>
                <br/>
                <input type="text" v-model.trim.lazy="formData.name" />
             
                 
                <br/>
                 <label for="lastname" >Enter Your Password</label>
                <br/>
                <input type="password" v-model.trim.lazy="formData.password" />

                    <br/>
                 <label for="email" >Enter Your Mail Address</label>
                <br/>
                <input type="email" v-model.trim.lazy="formData.email" />
                <br/>
                <button type="submit" class="submitBtn">Log In</button>
            </form>

                <h1>{{username}}</h1>
        </div>

        
    
</template>

<script>
import axios from 'axios'

    export default {
        name:'FormValidation',
       
        data(){
            return{
                error:[],
                formData:{
                name: '',
                password: '',
                email: ''
            },
            }
        },

        
        methods:{
            LoginForm()

            
            {
                axios.post('https://jsonplaceholder.typicode.com/users' , this.formData)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })



                if(this.formData.name && this.formData.password && this.formData.email){
                    alert("Welcome to My Portfolio...!" )

                    this.$router.push({name:'Home'})

                }



                this.error=[];
                if(!this.formData.name)
                {
                    this.error.push("Name is Required")
                }

                 if(!this.formData.password)
                 {
                    this.error.push("password is Required")
                }

                 if(!this.formData.email)
                 {
                    this.error.push("email is Required")
                }
               
                console.warn("Error...", this.error)
             
                localStorage.setItem('form-Data' , JSON.stringify(this.formData))

                

            }
        }
    }
</script>

<style scoped>
    .LogninDiv{
          margin-top: 2%;

    }
    .submitBtn{
        margin-top:10%;
        padding: 10px 30px;
        border: none;
        background-color:pink;
        border-radius:20px;
        
        
    }
    .submitBtn:hover{
        color:white;
        background-color:rgb(243, 154, 168);
    }

    .form{
        padding:5%;
        border: 2px solid grey;
        width:450px;
        margin:0 auto;
        border-radius: 20px;
    }

    .form label{
        margin-bottom: 8px;
        margin-top:8px ;   
        }

    .form input{
        outline: none;
        
    }
</style>