<template>
  <router-view />
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',

  setup() {
    const { t } = useI18n()

    useHead({
      title: t('intro.title'),
      meta: [
        { name: 'description', content: t('intro.desc') },
      ],
    })
  },
})
</script>
