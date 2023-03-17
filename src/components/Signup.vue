<template>
    <v-container>
      <v-row align="center" justify="center" style="font-family:'Vazir'" >
        <v-col cols="12" sm="10">
            <v-card class="elevation-24 mt-10 rounded-lg"  color="rgba(255, 255, 255, 0.150) ">
                <v-row >
                    <v-col cols="12" md="6" class="elevation-24 rounded-xl" style="background-color:rgba(12, 130, 151, 0.473);">
                     <div style="  text-align: center; padding: 160px 0;">
                      <v-card-text class="white--text" >
                        <div class="justify-center">
                        <v-img contain max-height="200" src="https://mhrajati.ir/wp-content/uploads/2022/06/Shahrood2-1.png"></v-img>
                        </div>
                        <br/>
                        <br/>
                        <h2 class="text-center ">قبلا ثبت نام کرده‌اید؟</h2>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark class="rounded-pill" @click="$router.push('/login')">ورود</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            dark
                            label="نام خانوادگی"
                            outlined
                            dense
                            rounded
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           v-model="family"
                           reverse
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            dark
                            label="نام"
                            outlined
                            rounded
                            v-model="name"
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           reverse
                          />
                           </v-col>
                           </v-row>
                          
                          <v-text-field
                          dark
                          reverse
                            label="ایمیل"
                            outlined
                            rounded
                            dense
                            color="blue"
                            autocomplete="false"
                            v-model="email"
                          />
                          <v-text-field
                          dark
                            label="نام کاربری"
                            reverse
                            outlined
                            rounded
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           v-model="username"
                          />
                          <v-text-field
                          dark
                          rounded
                          reverse
                            label="رمز عبور"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                           v-model="password"
                          
                          />
                          
                          <v-btn color="rgba(12, 130, 151, 0.473)" dark block class="rounded-pill" tile @click="signuphandle">ثبت نام</v-btn>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import axios from "axios";
  export default {
    name:'Signup',
   data: function(){
    return{
      username:"",
      password:"",
      email:"",
      name:"",
      lastname:"",
      error:false,
      error_msg:"",
    }
   },
   methods:{
    async signuphandle(){
      let data = {
        "username":this.username,
        "password":this.password,
        "name":this.name,
        "lastname":this.lastname,
        "email":this.email

      };
      const response=await axios.post('signup',data);

      console.log(response);
    }
  }
}
</script>
<style scoped>
  .v-application .rounded-xl {
    
    transform: translate(13px);
    
    border-bottom-left-radius: 100px !important;
    border-bottom-right-radius:200px !important;
    border-top-right-radius:0px !important;
    border-top-left-radius:100px !important;
}
.v-application .rounded-lg{
  border-bottom-left-radius: 100px !important;
    border-bottom-right-radius:200px !important;
    border-top-right-radius:100px !important;
    border-top-left-radius:100px !important;
  /* color: rgba(255, 255, 255, 0.486); */
  
}

.v-application .rounded-pill{
 border-radius: 50px;
}
</style>
