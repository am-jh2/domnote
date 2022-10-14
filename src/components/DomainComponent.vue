<template>
    <div class="dn-content-wrapper">
        <div class="filter">
            <div class="total">2 websites</div>
            <input type="text" placeholder="Search...">
        </div>
        <div class="scrollable-content">
            <div class="xc-table">
                <div class="xc-row xc-header">
                    <div class="xc-data">
                        Domain
                    </div>
                    <div class="xc-data">
                        Notes
                    </div>
                    <div class="xc-data">
                        Last accessed
                    </div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.google.com</div>
                    <div class="xc-data">3</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.dndbeyond.com</div>
                    <div class="xc-data">623</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

<style scoped>
</style>

<style scoped>
    /* TABLE */
    .xc-table {
        grid-template-columns: repeat(3, minmax(max-content, auto));
    }
    .xc-table .xc-row:not(.xc-header):hover .xc-data {
        background: #eee;
        cursor: pointer;
    }
</style>