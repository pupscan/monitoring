<template>
    <div class="row">
        <div class="col-sm-6 col-lg-3">
            <div class="social-box facebook">
                <i class="fa fa-facebook"></i>
                <div class="chart-wrapper">
                    <social-chart :data="[65, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40]"/>
                </div>
                <ul>
                    <li>
                        <strong>89k</strong>
                        <span>friends</span>
                    </li>
                    <li>
                        <strong>459</strong>
                        <span>feeds</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-sm-6 col-lg-3">
            <div class="social-box twitter">
                <i class="fa fa-twitter"></i>
                <div class="chart-wrapper">
                    <social-chart :data="[1, 13, 9, 17, 34, 41, 38, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40]"/>
                </div>
                <ul>
                    <li>
                        <strong>973k</strong>
                        <span>followers</span>
                    </li>
                    <li>
                        <strong>1.792</strong>
                        <span>tweets</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import SocialChart from './component/SocialBox'

    export default {
        name: 'dashboard',
        components: {
            SocialChart
        }
    }
</script>