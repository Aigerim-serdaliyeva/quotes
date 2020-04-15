<template>
    <div>
        <div class="quotes__added">Quotes Added</div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{ width: `${quotesCount * 10}%` }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ displayText }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            quotesCount: "quotes/quotesCount"
        }),
        displayText() {
            return this.quotesCount > 0 ? `${this.quotesCount}/10` : ''
        }
    }
}
</script>

<style lang="scss">
.quotes__added {
    font-weight: bold;
    font-size: 16px;
}
</style>