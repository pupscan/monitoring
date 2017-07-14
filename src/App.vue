<template>

                        <div class="row">
                            <div class="col-sm-6 col-lg-3">
                                <div class="social-box facebook">
                                    <i class="fa fa-facebook"></i>
                                    <div class="chart-wrapper">
                                        <social-box-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" height="90"/>
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
                                </div><!--/.social-box-->
                            </div><!--/.col-->

                            <div class="col-sm-6 col-lg-3">
                                <div class="social-box twitter">
                                    <i class="fa fa-twitter"></i>
                                    <div class="chart-wrapper">
                                        <social-box-chart-example :data="[1, 13, 9, 17, 34, 41, 38]" height="90"/>
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
                                </div><!--/.social-box-->
                            </div><!--/.col-->

                            <div class="col-sm-6 col-lg-3">

                                <div class="social-box linkedin">
                                    <i class="fa fa-linkedin"></i>
                                    <div class="chart-wrapper">
                                        <social-box-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" height="90"/>
                                    </div>
                                    <ul>
                                        <li>
                                            <strong>500+</strong>
                                            <span>contacts</span>
                                        </li>
                                        <li>
                                            <strong>292</strong>
                                            <span>feeds</span>
                                        </li>
                                    </ul>
                                </div><!--/.social-box-->
                            </div><!--/.col-->

                            <div class="col-sm-6 col-lg-3">
                                <div class="social-box google-plus">
                                    <i class="fa fa-google-plus"></i>
                                    <div class="chart-wrapper">
                                        <social-box-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" height="90"/>
                                    </div>
                                    <ul>
                                        <li>
                                            <strong>894</strong>
                                            <span>followers</span>
                                        </li>
                                        <li>
                                            <strong>92</strong>
                                            <span>circles</span>
                                        </li>
                                    </ul>
                                </div><!--/.social-box-->
                            </div><!--/.col-->
                        </div><!--/.row-->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'widgets',
        data () {
            return {
                msg: 'Widgets'
            }
        }
    }
</script>