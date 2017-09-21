<template>
    <div class="box" :style="{ 'background-color': color}">
        <div class="wrapper">
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
        <!--<social-chart-box :data="data" :type="type"></social-chart-box>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Loader from './Loader'
//    import SocialChartBox from './SocialChartBox'

    export default {
        name: 'value-box',
        props: ['status', 'title', 'color', 'icon', 'data', 'type'],
        components: {
            Loader,
//            SocialChartBox,
        },
    }
</script>

<style lang="scss">
    .box {
        color: #ffffff;
        margin-bottom: 20px;
        height: 243px;

        .wrapper {
            padding: 10px 20px 0px;
            margin-bottom: -140px;

            .header {

                .title {
                    margin-top: 15px;
                    margin-bottom: 15px;
                    font-size: 1.8vw;
                    opacity: 0.7;
                }

                .icon {
                    font-size: 5vw;
                    position: absolute;
                    top: 15px;
                    right: 25px;
                    line-height: 0;
                    opacity: 0.6;
                }
            }
        }

        .body {
            line-height: 160%;
            font-size: 4.2vw;
        }

    }
</style>
