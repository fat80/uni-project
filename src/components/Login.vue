<template>
  <v-container>
    <v-row align="center" justify="center" style="font-family:'Vazir'" >
      <v-col cols="12" sm="10">
            <v-card class="elevation-24 mt-10 rounded-lg"  color="rgba(255, 255, 255, 0.150) ">
              <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-14">
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            label="نام کاربری"
                            outlined
                            dense
                            rounded
                            dark
                            color="blue"
                            autocomplete="false"
                           class="mt-16"
                           v-model="username"
                           reverse
                          />
                          <v-text-field
                          reverse
                            label="رمز عبور"
                            outlined
                            dark
                            rounded
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                           v-model="password"
                           
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">فراموشی رمزعبور</span>
                              </v-col>
                            </v-row>
                            <br />
                          <v-btn color="rgba(12, 130, 151, 0.473)" dark class="rounded-pill" block tile @click="loginhandle">ورود</v-btn>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="elevation-24 rounded-xl" style=" background-color: rgba(12, 130, 151, 0.473);" >
                    <div style="  text-align: center; padding: 160px 0;">
                      <v-card-text class="white--text" >
                        <div class="justify-center">
                        <v-img contain max-height="200" src="https://mhrajati.ir/wp-content/uploads/2022/06/Shahrood2-1.png"></v-img>
                        </div>
                        <br/>
                        <br/>
                        <h2 class="text-center ">تا کنون عضو نشده‌اید؟</h2>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark class="rounded-pill" @click="$router.push('/signup')">عضویت</v-btn>
                      </div>
                      </div>
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
    name:'Login',
   data: function(){
    return{
      username:"",
      password:"",
      error:false,
      error_msg:"",
    }
   },
   methods:{
    async loginhandle(){
      let data = {
        "username":this.username,
        "password":this.password
      };
      const response=await axios.post('signin',data);
      

      localStorage.setItem('token',response.data.token);
      console.log(response);
    }
  }
}
</script>
<style scoped>
  .v-application .rounded-xl {
    
    transform: translate(-13px);
    
    border-bottom-left-radius: 200px !important;
    border-bottom-right-radius:100px !important;
    border-top-right-radius:100px !important;
    border-top-left-radius:0px !important;
}
.v-application .rounded-lg{
  border-bottom-left-radius: 200px !important;
    border-bottom-right-radius:100px !important;
    border-top-right-radius:100px !important;
    border-top-left-radius:100px !important;
  /* color: rgba(255, 255, 255, 0.486); */
  
}
.v-application .rounded-pill{
 border-radius: 50px;
}
</style>
