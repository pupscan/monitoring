<template>
    <span>
        <i v-if="status === 'loading'" class="fa fa-circle-o-notch fa-spin fa-fw"></i>
        <i v-if="status === 'error'" class="fa fa-exclamation-triangle fa-fw"></i>
        <div :class="{ 'animated fadeIn': (status === 'loaded')}">
            <slot v-if="status === 'loaded'"></slot>
        </div>
    </span>
</template>

<script>
    export default {
        props: ['status'],
    }
</script>

