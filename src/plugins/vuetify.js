import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                
                    primary: '#1976D2',
                    secondary: '#424242',
                    white: '#82B1FF',
                    orange: '#FF5252',
                    darkgrey: '#2196F3',
                    complete: '#4CAF50',
                    inprogress: '#FFC107',
                    incomplete: '#FFC107',
                    lightgrey: '#FFC107'
                  }
            }
        }
    }
);
