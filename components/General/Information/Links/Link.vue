<template>
    <a class="link clickable" :href="link.to">
        <Component :is="require(`~/assets/icons/${link.icon}`)" v-if="link.icon" class="link-icon icon" />

        <span class="link-label" v-text="link.label" />
    </a>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.link {
    display: flex;
    align-items: center;
    column-gap: 5px;

    width: max-content;

    &-icon {
        width: 24px;
    }

    &-label {
        color: var(--text);
        font-size: 16px;
    }
}
</style>