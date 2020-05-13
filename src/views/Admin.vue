<template>
<v-containter>
    <v-row>
        <v-col offset-md="1" md="5">
                <h1>Menu items</h1>
            <div class="pa-2" id="info">
            
  <v-simple-table id="menu-table">
      <thead>
        <tr>
          <th class="text-left">Name of item
              <v-btn color="green" small text to="/addNew">
                <v-icon>add</v-icon><span style="padding: 0 10px;">Add Item</span>
 </v-btn>
          </th>
          <th class="text-left">Price</th>
          <th class="text-left">edit</th>
          <th class="text-left">remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in menuItems" :key="item.name">
          <td>
              <span id="td_name">{{ item.name }}</span><br>
              <span id="menu_item_description">{{ item.description }}</span>
          </td>
          <td>{{ item.price }}</td>
        <td>
            <v-btn small text @click="deleteItem(item.id)">
                <v-icon color="green">edit</v-icon>
            </v-btn>
        </td>
          <td>
              <v-btn @click="removeItem(item)">
                  <v-icon color="green">delete</v-icon>
              </v-btn>
          </td>
        </tr>
      </tbody>
    
  </v-simple-table>
</div>

        </v-col>
        <v-col offset-md="1" md="4">
                <h1>Basket</h1>
            <div class="pa-2" id="info">
                <v-simple-table id="menu-table" v-if="basket.length > 0">
      <thead>
        <tr>
          <th class="text-left" style="width:30%">Quantity</th>
          <th class="text-left" style="width:50%">Name</th>
          <th class="text-left" style="width:20%">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in basket" :key="item.name">
          <td>
              <v-icon color="green" @click="increaseQtn(item)">add_box</v-icon>
              {{ item.quantity }}
              <v-icon color="green" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
          </td>
          <td>{{ item.name }}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    
  </v-simple-table>
<v-simple-table v-else>
    <p>The Basket is empty</p>
</v-simple-table>

  <v-divider></v-divider>
  <v-row id="basket_checkout" class="mt-4" style="margin:0;">
     <v-col>
         <p>Subtotal:</p>
         <p>Delivery:</p>
         <p>Total Amount:</p>
     </v-col>

     <v-col class="text-right">
           <p>{{subTotal}} DKK</p>
         <p>10 DKK</p>
         <p><b> {{ total }} DKK</b></p>
         </v-col>  
    </v-row>
    <v-row style="margin:0;">
            <v-spacer></v-spacer>
            <v-btn color="green">checkout</v-btn>   
 </v-row>
 </div>
        </v-col>
        </v-row>
</v-containter>
</template>

<script>
import { dbMenuAdd } from '../firebase'
export default {
    data () {
      return {
          basket: [],
        menuItems: [
          
        ],
      }
    },
        created() {
      dbMenuAdd.get().then((querySnapshot) => {
        querySnapshot.forEach((doc => {
         console.log(doc.id, " => ", doc.data());
         var menuItemData = doc.data(); 
         this.menuItems.push({
           id: doc.id,
           name: menuItemData.name,
           description: menuItemData.description,
           price: menuItemData.price
         }) 
        }))
      })
    },
    methods: {
      deleteItem(id) {
        dbMenuAdd.doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
        addToBasket(item) {
            if(this.basket.find(itemInArray => item.name === itemInArray.name)) {
                    item = this.basket.find(itemInArray => item.name === itemInArray.name);
                this.increaseQtn(item);
            }
            else {
                    this.basket.push({
                    name: item.name,
                    price: item.price,
                    quantity: 1
                                     })
                 }
        },
        increaseQtn(item) {
            item.quantity++
        },
         decreaseQtn(item) {
            item.quantity--;

            if (item.quantity === 0 ) {
                this.basket.splice(this.basket.indexOf(item), 1)
            }
        }

    },
    computed: {
        subTotal () {
            var subCost = 0;
            for( var items in this.basket) {
                var individualItem = this.basket[items];
                subCost += individualItem.quantity * individualItem.price;
            }
            return subCost
        },
        total () {
            var deliveryPrice = 10;
            var totalCost = this.subTotal
            return totalCost + deliveryPrice
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