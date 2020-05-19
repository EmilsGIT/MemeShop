import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd } from '../firebase'

//import firebase from 'firebase'
import'firebase/firestore'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [
  /*     {
        Name: 'Chair Meme',
        Description: "Funny meme about chairs",
        Price: 2,
        quantity: 1
      }, */
    ],
    menuItems: [],
    currentUser: null

  },
  mutations: {
    addBasketItems: (state, basketItems) => {
      if(basketItems instanceof Array) {
            basketItems.forEach(item => {
              if(state.basketItems.find(itemInArray => item.Name === itemInArray.Name)) {
                item = state.basketItems.find(itemInArray => item.Name === itemInArray.Name);
                item.quantity++
        }
        else {
          state.basketItems.push({
                Name: item.Name,
                Price: item.Price,
                quantity: 1
                })
              }
      })
    }
    },
    userStatus (state, user) {
      if(user) {
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    },

    setMenuItems: state => {
      let menuItem = []

      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItem = []
        snapshotItems.forEach((doc)  => {
          var menuItemData = doc.data();
          menuItem.push({
            Name: menuItemData.Name,
            Description: menuItemData.Description,
            Price: menuItemData.Price,
            image: menuItemData.image,
            id: doc.id
          })
        })
        state.menuItems = menuItem
      }
      )


    },

 /*    created() {
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
    }, */








  },
  actions: {
    setUser(context, user ) {
      context.commit('userStatus', user)
    },
    setMenuItems: context => {
      context.commit('setMenuItems')
    }
  },
  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser,
    getMenuItems: state => state.menuItems
  }
})
