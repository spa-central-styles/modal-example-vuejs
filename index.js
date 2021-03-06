// Import stylesheets

import Vue from 'vue';
import { BButton } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import SPA from 'spa-central-styles-free';
Vue.use(SPA);
Vue.use(ModalPlugin)

import './style.css';

Vue.component('b-button', BButton)

const vue = new Vue({
  el: '#app',
  data: {
    title: `Vue JS Template!
    sd`,
  },
  template:`<div>

  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Alert Modal</b-button>
  
  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title class="h6 modal-header p-0">
      <alert show ><i class="fa fa-fw fa-exclamation-triangle"></i>Claims must be from a single Payor for comment</alert>
    </template>
    <div class="modal-body">
      <p>You can only comment on agreements from a single a payor.</p>
      <p>Select claims from one payor for comment. If necessary you can then select additional claims from different payor for comment.</p>
    </div>
    <div class="modal-footer">
      <b-button class="btn-success" @click="$bvModal.hide('bv-modal-example')">OK</b-button>
    </div>
  </b-modal>

  <b-button v-b-modal.modal-scrollable>Scrolling modal</b-button>

  <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  

</div>`
});


