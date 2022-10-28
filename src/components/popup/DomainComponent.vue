<script setup lang="ts">
// import { storageDemo } from '~/logic/storage'
</script>

<script lang="ts">
export default {
    name: "DomainComponent",

    props: {
    },

    emits: ['changePage'],

    mounted() {
    },

    computed: {
    }
};
</script>

<template>
    <div class="dn-content-wrapper">
        <div class="filter">
            <div class="total">2 websites</div>
            <input type="text" placeholder="Search..." />
        </div>
        <div class="scrollable-content">
            <div class="xc-table">
                <div class="xc-row xc-header">
                    <div class="xc-data">Domain</div>
                    <div class="xc-data">Notes</div>
                    <div class="xc-data">Last updated</div>
                    <div class="xc-data actions"></div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.google.com</div>
                    <div class="xc-data">3</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">[E][D]</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.dndbeyond.com</div>
                    <div class="xc-data">623</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">[E][D]</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* TABLE */
.xc-table .xc-row:not(.xc-header):hover .xc-data {
    background: #eee;
    cursor: pointer;
}
</style>