<template>
    <div class="box" :style="{ 'background-color': color}">
        <div class="header">
            <div class="title">{{ title }}</div>
            <div class="icon"><i class="fa social-icon" :class="['fa-'+icon]"></i></div>
        </div>
        <div class="body">
            <loader :status="status">
                <slot></slot>
            </loader>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Loader from './Loader'

    export default {
        name: 'value-box',
        props: ['status', 'title', 'color', 'icon'],
        components: {
            Loader
        },
    }
</script>

<style lang="scss">
    .box {
        background-color: red;
        color: #ffffff;
        padding: 20px 20px 0px;

        .header {

            .title {
                margin-top: 15px;
                font-size: 1.8vw;
                opacity: 0.7;
            }

            .icon {
                font-size: 6vw;
                position: absolute;
                top: 15px;
                right: 25px;
                line-height: 0;
                opacity: 0.6;
            }
        }

        .body {
            font-size: 6vw;
        }

    }
</style>
