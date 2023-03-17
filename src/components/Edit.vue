<template>
  <v-container>
  <v-card class="ucard  mr-13 ml-13" justify="center">
    <v-form class="pa-5">
    <v-container>
      <v-row  justify="end" class="ma-5">
        <h2>
          پروفایل کاربر
        </h2>
      
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            reverse
            v-model="last"
            label="نام خانوادگی"
            shaped
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          reverse
            v-model="first"
            label="نام"
            shaped
            filled
          ></v-text-field>
        </v-col>

        
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="6">
        
      </v-col>
      <v-col cols="12" sm="6">
        
        <v-select
        reverse
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="واحد"
          hide-details
          
          shaped
          filled
        ></v-select>
      </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      first: 'فاطمه',
      last: 'اسماعیلی',
      e1: 'پژوهشی',
      states: [
          'فرهنگی', 'پژوهشی', 'پرورشی', 'آموزشی',
        ],
    }),
  }
</script>
<style scoped>
.v-application .ucard{
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.938);
   
}
</style>