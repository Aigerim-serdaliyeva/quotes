<template>
    <div>
        <form class="form">
            <div class="form-group">
                <label for="quote-text">Quote</label>
                <textarea 
                    class="form-control" id="quote-text" rows="3"
                    v-model.trim="quoteText"
                ></textarea>
            </div>
            <button type="button" class="btn btn-info"
                @click="add()"
            >
                Add Quote
            </button>
        </form>
        <Alert v-if="isAlertOpen">Для добавления новых цитат удалите одну из добавленных</Alert>
    </div>
</template>

<script>
import Alert from './Alert.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { Alert },
    data() {
        return {
            quoteText: ''
        }
    },
    computed: {
        ...mapGetters({
            quotesCount: "quotes/quotesCount",
            isAlertOpen: "alert/isAlertOpen"
        })
    },
    methods: {
        ...mapActions({
            addQuote: "quotes/addQuote",
            showAlert: "alert/showAlert"
        }),
        add() {
            console.log(this.quotesCount)
            if (this.quoteText) {
                if (this.quotesCount >= 10) {
                    return this.showAlert()
                } 

                this.addQuote(this.quoteText);
                this.quoteText = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.form {
    margin: 50px 0;
}

.btn{
    display: block;
    margin: 0 auto;
}
</style>