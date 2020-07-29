// Import stylesheets

import Vue from 'vue';
import { BButton } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'

Vue.use(ModalPlugin)

import './style.css';

Vue.component('b-button', BButton)

const vue = new Vue({
  el: '#app',
  data: {
    title: `Vue JS Template!
    sd`
  },
  template:`<div>

  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Launch demo modal</b-button>
  
  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title class="alert-primary">
      <b-alert show variant="primary" class="alert-primary"><i class="fa fa-fw fa-info-circle"></i> Modal Example</b-alert>
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>

  <div class="alert-primary" style="margin:15px;">
  <b-alert show variant="primary">  <i class="fa fa-fw fa-info-circle"></i> Primary Alert</b-alert>
  </div>
</div>`
});


