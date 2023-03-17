<template>
  <v-container  class="center">
      
            <v-card elevation="24" outlined color="rgba(12, 130, 151, 0.473)" shaped class="mx-auto my-12 rounded-xl pa-10 text-center" max-height="800" max-width="500">
              <v-img src="../assets/img/shlogo.png">
              </v-img>
                <v-row justify="center">
                  <v-col cols="12" md="3">
                    <v-btn class="pa-6 rounded-pill" outlined style="font-family:'Vazir'; font-size:larger; color: white" @click="$router.push('/login')">
                  ورود
                </v-btn>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-btn class="pt-6 pb-6 pr-3 pl-3 rounded-pill" outlined style="font-family:'Vazir'; font-size:larger; color: white" @click="$router.push('/signup')">
                  عضویت
                </v-btn>
                  </v-col>

                </v-row>
                  
                    
                
            </v-card>
    
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>