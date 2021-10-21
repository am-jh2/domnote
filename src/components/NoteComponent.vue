<template>
    <div class="dn-content-wrapper">
        <div class="filter">
            <div class="total">1337 notes</div>
            <input type="text" placeholder="Search...">
        </div>
        <div class="scrollable-content">
            <div class="xc-table">
                <div class="xc-row xc-header">
                    <div class="xc-data">
                        Keyword
                    </div>
                    <div class="xc-data">
                        Notes
                    </div>
                    <div class="xc-data">
                        Last accessed
                    </div>
                    <div class="xc-data actions"></div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">This is important information that we must keep an eye on...</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">This is important information that we must keep an eye on...</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">This is important information that we must keep an eye on...</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        [E][D]
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">This line is far too long t...</div>
                    <div class="xc-data">So we decided to cut it.</div>
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
    name: "NoteComponent",

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