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
    sd`
  },
  template:`<div>

  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Launch demo modal</b-button>
  
  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title class="modal-header">
      <alert show ><i class="fa fa-fw fa-exclamation-triangle"></i> Claims must be from a single Payor for comment</alert>
    </template>
    <div class="modal-body">
      <p>You can only comment on agreements from a single a payor.</p>
      <p>Select claims from one payor for comment. If necessary you can then select additional claims from different payor for comment.</p>
    </div>
    <div class="modal-footer">
      <b-button class="btn-danger" @click="$bvModal.hide('bv-modal-example')">Cancel</b-button>
    </div>
  </b-modal>

  
</div>`
});


