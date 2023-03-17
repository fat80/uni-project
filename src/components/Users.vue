<template>
    <v-container>
    <v-card class="ucard" justify="center">
        
    <v-data-table
    
      :headers="headers"
      :items="users"
      :sort-by.sync="sortBy"
      class="elevation-3 pa-6"
      hide-default-footer
      
      
    >
      <template v-slot:top>
        <v-toolbar
          flat

        >
        <v-dialog
            v-model="dialog"
            max-width="400px"
            justify="end"
            
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                left
              >
                افزودن
              </v-btn>
              <v-btn
              class="mb-2 ml-5"
                color="primary"
                @click="unitSort"
                >
                مرتب سازی بر اساس واحدها
                </v-btn>
            </template>
            <v-card style="font-family:'Vazir';">
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-text-field class="pa-5"
                        v-model="editedItem.name"
                        label="نام کاربر"
                      ></v-text-field>
                      <v-text-field class="pa-5"
                        v-model="editedItem.units"
                        label="نام واحد"
                      ></v-text-field>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  انصراف
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  ذخیره
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- --------------------------------------------------------------------- -->
          <v-spacer></v-spacer>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>


          <v-toolbar-title>لیست کاربران</v-toolbar-title>
          
          <!-- ------------------------------------------------------------- -->
          <v-dialog v-model="dialogDelete" max-width="500px" >
            <v-card>
              <v-card-title class="text-h5">آیا مطمئن هستید که میخواهید این مورد را حذف کنید؟</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">انصراف</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">بله</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      
    </v-data-table>

    </v-card>
</v-container>
  </template>
  <script>
  export default {
    data: () => ({
        sortBy: 'units',
       sortDesc: false,
      dialog: false,
      dialogDelete: false,
      headers: [
      { text: 'عملیات', value: 'actions', sortable: false },
      { text: 'نام واحد', value: 'units' },
        {
          text: 'نام کاربر',
          align: 'end',
          sortable: false,
          value: 'name',
        },
       
        
        
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        units: '',
        
      },
      defaultItem: {
        name: '',
        units: '',
       
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'افزودن کاربر به لیست' : 'ویرایش'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.users = [
          {
            units: 'واحد آموزشی',
            name :'فاطمه اسماعیلی'
           
          },
          {
            units: 'واحد پرورشی',
            name :'فاطمه اسماعیلی'
            
          },
          {
            units: 'واحد فرهنگی',
            name :'فاطمه اسماعیلی'
            
          },
          {
            units: 'واحد پژوهشی',
            name :'فاطمه اسماعیلی'
            
          },
          {
            units: 'واحد فرهنگی',
            name :'فاطمه اسماعیلی'
            
          },
          {
            units: 'واحد پژوهشی',
            name :'فاطمه اسماعیلی'
            
          },
         
        ]
      },
      unitSort () {
        let index = this.headers.findIndex(h => h.value === this.sortBy)
        index = (index+1) % this.headers.length
        this.sortBy = this.headers[index].value
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style scoped>
.v-application .ucard{
    border-radius: 15px;

   
}
</style>