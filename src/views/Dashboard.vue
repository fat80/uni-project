<template>
  <nav style="font-family:'Vazir'">
       
           <v-toolbar color="rgba(12, 130, 151, 0.473)" dark>
               
            <v-btn tile outlined dark class="rounded-pill" @click="$router.push('/login')">خروج از حساب کاربری<v-icon>mdi-account-arrow-right-outline</v-icon></v-btn>
               <v-spacer></v-spacer>
               <v-toolbar-title>پنل ادمین</v-toolbar-title>
               <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           </v-toolbar>
       

 <!-- header finished -->
       <v-navigation-drawer right v-model="drawer" dark app color="rgba(12, 130, 151, 0.473)">
           <v-layout column align-center>
               <v-flex class="mt-5"> 
                   <v-avatar size="100" color="rgb(129, 205, 224)">                        
                       <v-icon dark>
                           mdi-account-circle
                       </v-icon>
                   </v-avatar>
                   <p class="white--text subheading mt-5 text-center">نام کاربری</p>
               </v-flex>
               <v-flex class="mt-4 mb-4"></v-flex>
           </v-layout>
           <!-- <v-list flat>
               <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                   <v-list-item-action>
                       <v-icon >{{link.icon}}</v-icon>
                   </v-list-item-action>
                   <v-list-item-content >
                       <v-list-item-title >{{link.text}}</v-list-item-title>
                   </v-list-item-content>
               </v-list-item>
           </v-list> -->
           <v-tabs v-model="tab" vertical background-color="transparent">
            <v-tab style="font-size:large">
                    داشبورد
                    <v-icon class="pl-3">
                        <!-- mdi-widgets -->
                        mdi-apps
                    </v-icon>
                    </v-tab>
                <v-tab style="font-size:large">
                    واحدها
                    <v-icon class="pl-3">
                        mdi-family-tree
                    </v-icon>
                    
                </v-tab>
                <v-tab style="font-size:large">
                    کاربران
                    <v-icon class="pl-3">
                        mdi-account-supervisor-circle-outline
                    </v-icon>
                   
                </v-tab>
                <v-tab style="font-size:large">
                    ارزیابی
                    <v-icon class="pl-3">
                        mdi-file-chart-check
                    </v-icon>
                    
                </v-tab>
                <v-tab style="font-size:large">
                    پروفایل
                    <v-icon class="pl-3">
                        mdi-cog-outline
                    </v-icon>
                    
                </v-tab>
            
           </v-tabs>

           
          
       </v-navigation-drawer>
       <v-tabs-items v-model="tab" style="background-color:transparent">
        <v-tab-item dir="rtl">
                <Dash />
            </v-tab-item>
            <v-tab-item>
                <Units />
            </v-tab-item>
            <v-tab-item>
                <Users />
            </v-tab-item>
            <v-tab-item>
                <Evalue />
            </v-tab-item>
            <v-tab-item>
                
                <Edit />
            </v-tab-item>
           </v-tabs-items>
       
   </nav>
</template>
<script>
 import axios from "axios";
 import Dash from '../components/Dash.vue';
  import Edit from '../components/Edit.vue';
  import Units from '../components/Units.vue';
import Users from '../components/Users.vue';
import Evalue from '../components/Evalue.vue';
 export default {
    name: 'Dashboard',
    data () {
        return {
          drawer: true,
          user: true,
          tab: null,
        }
    },
    
     components: {
        Dash,
        Units,
       Edit,
        Evalue,
          Users
     },
    async created() {
        const response = await axios.get('signin');

        this.user =response.data;

    }
 }
</script>
<style>
.v-tabs-slider-wrapper {
    left: auto !important ;
  right: 20px ;
  color: rgb(255, 255, 255);
  
}
</style>