<template>
<v-container>
    <v-row>
        <v-col offset-md="1" md="5">
                <h1>Add New Items</h1>
            <div class="pa-2" id="info">           
 <v-text-field
 label="Name of Item"
 required
 v-model="Name"
 >
 </v-text-field>
  <v-text-field
 label="Description"
 required
 v-model="Description"
 >
 </v-text-field>
   <v-text-field
 label="Price"
 required
 type="number"
 v-model="Price"
 >
 </v-text-field>
<v-file-input label="File input" @change="uploadImage"> </v-file-input>


 <v-btn color="green"
 @click="addNewMenuItem()"
 :disabled="btnDisable"
 >
     Add Item
 </v-btn>
 <v-btn color="red">
     Stop
 </v-btn>

</div>

        </v-col>
        <v-col offset-md="1" md="4">
                <h1>Preview</h1>
            <div class="pa-2" id="info">
                <v-simple-table id="menu-table">
                    <thead>
                        <tr>
                            <th class="text-left" style="width: 70%">Name</th>
                            <th class="text-left" style="width: 100%">Price DKK</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span id="td_name">{{Name}}</span><br>
                                <span id="menu_item_description">{{Description}}</span>
                            </td>
                            <td id="preview_menuItem_price"> {{Price}}</td>
                        </tr>
                    </tbody>

                </v-simple-table>


 </div>
        </v-col>
        </v-row>
</v-container>
</template>

<script>
import { dbMenuAdd, fb } from '../../firebase'

export default {
    data () {
        return {
            Name: '',
            Description: '',
            Price: '',
            image: null,
            btnDisable: true

        }
    },
    methods: {
        uploadImage (e) {
            let file = e;
            console.log(file);
            var storageRef = fb.storage().ref('products/'+ file.name);

            let uploadTask = storageRef.put(file);
            console.log(uploadTask)

                uploadTask.on('state_changed', (snapshot) => {
                    console.log(snapshot)
                }, 
                (error) => {
                    console.log(error)
                // Handle unsuccessful uploads
                },  () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.image = downloadURL
                    this.btnDisable = false;
                    console.log('File available at', downloadURL);
                    
                });
                });




        },
        addNewMenuItem() {
            dbMenuAdd.add({
                Name: this.Name,
                Description: this.Description,
                Price: this.Price,
                image: this.image
            })
        }
    }
}
</script>

<style lang="scss" scoped>
   .col h1  {
       //@include infobox_mixin()
       border: solid;
       border-radius: 5px;
        border-color: white;
      padding: 10px;
     margin-bottom: 5px;
      color:white;
      font-weight: bold;
      text-transform: uppercase;
      font-size:16px;
      text-align:left;
    }

       .col:last-child h1 {
       //@include infobox_mixin()
       border: solid;
       border-radius: 5px;
        border-color: white;
      padding: 10px;
     margin-bottom: 5px;
      color:white;
      font-weight: bold;
      text-transform: uppercase;
      font-size:16px;
      text-align:left;
    }

#info {
    background-color: white;
}
tr th {
    font-weight: 300;

}
#td_name {
    font-weight:bold;
}

tr td {
    padding: 10px 10px 16px;
}

#menu_item_description {
    font-style: italic;
    font-weight: 300;
    color: green;
    font-size: 13px;

}

#basket_checkout {
    font-size:13px;
}
#basket_checkout p:first-child {
    line-height: 2px;
}
</style>