<template>
    <div class="dn-header">
        <h1><span class="domain" @click="$emit('changePage', 'page')">www.dndbeyond.com</span><span class="url">/oota/monster/the-lich-king</span></h1>
        <div class="sub-header">
            <h2>32 notes</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",

    props: {
        page: null
    },

    emits: ['changePage'],

    mounted() {
    },

    computed: {
    },

    methods: {
    }
};
</script>

<style scoped>
    .dn-header{
        width: 100%;
        height: max-content;
        border-bottom: 1px solid #ccc;
        padding: 1rem;
    }
    .dn-header h1{
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 1.25rem;
        font-weight: bold;
    }
    .dn-header h1 span.domain:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    .dn-header h1 span.url{
        color: #666;
    }
    .dn-header h2{
        color: #888;
        margin: 0;
        margin-top: 0.5rem;
        padding: 0;
        font-size: 1rem;
        font-weight: bold;
    }
    .sub-header{
        display: grid;
        grid-template-columns: max-content;
        column-gap: 1rem;
        place-content: center;
    }
</style>
