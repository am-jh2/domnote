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
                    <div class="xc-data actions"></div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.google.com</div>
                    <div class="xc-data">3</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'page')">
                    <div class="xc-data">www.dndbeyond.com</div>
                    <div class="xc-data">623</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
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
    .dn-content-wrapper{
        width: 100%;
        box-sizing: border-box;
    }
    .dn-content-wrapper .scrollable-content{
        overflow-y: scroll;
        max-height: 484px;
    }

    .filter{
        background: #e1e1e1;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

        display: grid;
        grid-template-columns: max-content max-content;
        place-items: center;
        place-content: space-between;
    }
    .filter input{
        border: 1px solid #888;
        border-radius: 5px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
</style>

<style scoped>
    /* TABLE */
    .xc-table .xc-row:not(.xc-header):hover .xc-data {
        background: #eee;
        cursor: pointer;
    }
</style>