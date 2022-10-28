<script lang="ts">
export default {
    name: "HeaderComponent",

    props: {
        popupView: null
    },

    emits: ['changePage'],

    mounted() {
    },

    computed: {
    },

    methods: {
        openOptionsPage() {
            browser.runtime.openOptionsPage();
        }
    }
};
</script>

<template>
    <div class="dn-header">
        <button v-if="popupView != 'note'" class="world-button" @click="$emit('changePage', 'note')"><icon-component icon="home" /></button>

        <button class="settings-button" @click="openOptionsPage"><icon-component icon="cog" /></button>
        <h1><span class="domain" @click="$emit('changePage', 'page')">www.dndbeyond.com</span><span class="url">/oota/monster/the-lich-king</span></h1>
        <div class="sub-header">
            <h2>32 notes</h2>
        </div>
    </div>
</template>

<style scoped>
.dn-header {
    width: 100%;
    height: max-content;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
}

.dn-header h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    font-weight: bold;
    width: 100%;
}

.dn-header h1 span.domain:hover {
    cursor: pointer;
    text-decoration: underline;
}

.dn-header h1 span.url {
    color: #666;
}

.dn-header h2 {
    color: #888;
    margin: 0;
    /* margin-top: 0.5rem; */
    padding: 0;
    font-size: 1rem;
    font-weight: bold;
}

.sub-header {
    display: grid;
    grid-template-columns: max-content;
    column-gap: 1rem;
    place-content: center;
}

.world-button{
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0.25rem;
    padding-left: 0.25rem;
}
.settings-button{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.25rem;
    padding-right: 0.25rem;
}
</style>