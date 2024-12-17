        
<script setup>
        defineProps({
            title: {
                type: String,
                default: "NEW NEW"
            },

            bg: {
                type: String,
                default: 'bg-red-100'
            }
        })
</script>
<template>
    <div :class="`${bg} w-1/2 p-6 rounded-lg shadow-md`">
<p class="text-3xl text-blue-300">{{title}}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>