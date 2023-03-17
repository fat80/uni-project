<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" md="4">
                <v-card class="dcard">
                    
                    <v-card-title>
                        <v-icon class="pa-1" size="36px" color="blue">
                            mdi-account-supervisor-circle-outline
                    </v-icon><h4>
                        تعداد کاربران
                    </h4>
                    </v-card-title>
                    <v-card-text>
                        در حال حاضر کاربر
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card  class="dcard">
                    <v-card-title>
                        <v-icon class="pa-1" size="36px" color="blue">
                            mdi-family-tree
                        </v-icon>
                        <h4>
                        تعداد واحدها
                    </h4>
                    </v-card-title>
                    <v-card-text>
                        هم اکنون واحد پژوهشی واحد دارد
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="dcard">
                    <v-card-title>
                        <v-icon class="pa-1" size="36px" color="blue">
                            mdi-briefcase-clock
                        </v-icon>
                        <h4>
                        زمان آخرین به روزرسانی
                    </h4>
                    </v-card-title>
                    <v-card-text>
                        8:2:41
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" md="4">
                <v-card height="460" align="center" justify="center" class="pt-1 pr-7 pl-7 dcard" >
                    <date-picker inline color="rgb(31, 132, 248)" ></date-picker>
                </v-card>
            </v-col>
            
            <v-col cols="12" md="8">
               <v-card height="460" class="pa-7 dcard">
                <v-card-title>
                    <v-icon class="pa-1" size="36px" color="blue">
                        mdi-comment-multiple
                    </v-icon>
                    <h4>
                    اطلاعیه ها
                </h4>
                </v-card-title>
                <v-card-text>
                    <v-icon>
                        mdi-square-medium-outline
                    </v-icon>
                  در صورت نیاز به راهنمایی با داخلی 3031 تماس بگیرید.
                </v-card-text>
                <v-card-text>
                    <v-icon>
                        mdi-square-medium-outline
                    </v-icon>
                     سامانه در مرحله تست بوده و ممکن است با نواقصی همراه باشد، از صبر و همراهی شما متشکریم.
                </v-card-text>
               </v-card>
            </v-col>
        </v-row>
       
        
    </v-container>
</template>
<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

export default {
    data(){
        return {
           
        }
    },
    components: {
        datePicker: VuePersianDatetimePicker
    }
}
</script>
<style scoped>
.v-application .dcard{
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.938);
   
}
</style>