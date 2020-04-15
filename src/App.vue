<template>
  <div id="app" class="section section-quote">
      <div class="container">
            <div class="row">
                <div class="col-12">
                    <QuoteProgress />
                </div>
                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                    <QuoteForm /> 
                </div>
                <div 
                    class="col-lg-3 col-md-4 col-sm-6"
                    v-for="(quote, index) in quotes" :key="`${index}`"
                >
                    <Quote @onDelete="deleteItem(index)">{{ quote }}</Quote>
                </div>
            </div>
      </div>

      <Modal />
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import { mapGetters, mapActions } from "vuex";
import Quote from './components/Quote.vue';
import QuoteProgress from './components/QuoteProgress.vue';
import QuoteForm from './components/QuoteForm.vue';

export default {
  name: 'App',
  components: { QuoteForm, QuoteProgress, Quote, Modal },
  computed: {
      ...mapGetters({
          quotes: "quotes/quotes",
          quotesCount: "quotes/quotesCount"
      })
  },
  methods: {
        ...mapActions({
            deleteQuote: "quotes/deleteQuote",
            hideAlert: "alert/hideAlert"
        }),
        deleteItem(index) {
            this.deleteQuote(index);
            this.hideAlert();
        }
  }
}
</script>

<style lang="scss">

    .section {
        padding: 100px 0;
    }

</style>
