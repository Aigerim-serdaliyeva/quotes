<template>
    <div class="card quote">
        <div class="card-body">
            <slot />
            <button 
                type="button" 
                class="btn btn-outline-danger"
                @click="$emit('onDelete')"
            >
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style lang="scss">

.quote {
    font-size: 24px;
    font-family: Arizonia;
    margin-bottom: 20px;
}

.btn {
    display: block;
    margin: 15px auto 0;
    font-family: Arial;
    font-size: 14px;
}

</style>