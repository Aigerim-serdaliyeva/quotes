<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <slot />
        <button 
            type="button" class="close" aria-label="Close"
            @click="hideAlert()"
        >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    methods: {
        ...mapActions({
            hideAlert: "alert/hideAlert"
        })
    }
}
</script>