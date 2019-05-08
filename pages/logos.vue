<template>
  <div class="page-grid">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component | dashify"></component>
  </div>
</template>

<script>

const loadData = function({api, cacheVersion, errorCallback, version, path}) {
  return api.get(`cdn/stories/${path}`, {
    version: version,
    cv: cacheVersion
  }).then((res) => {
    return res.data
  }).catch((res) => {
    if (!res.response) {
      console.error(res)
      errorCallback({ statusCode: 404, message: 'Failed to receive content form api' })
    } else {
      console.error(res.response.data)
      errorCallback({ statusCode: res.response.status, message: res.response.data })
    }
  })
}

export default {
  data () {
    return { story: { content: {} } }
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  asyncData (context) {
    // Check if we are in the editing mode
    let editMode = false

    if (context.query._storyblok || context.isDev || (typeof window !== 'undefined' && window.localStorage.getItem('_storyblok_draft_mode'))) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location == window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }

      editMode = true
    }

    let version = editMode ? 'draft' : 'published'
    let path = context.route.path == '/' ? 'home' : context.route.path

    // Load the JSON from the API
    return loadData({
      version: version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path: path
    })
  }
}
</script>

<style scoped>
.page-grid {
  display: grid;
  grid-gap: 32px;
}

.standard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-auto-rows: 360px;
  grid-gap: 32px;
}

.feature-tile {
  display: flex;
  height: 360px;
  justify-content: center;
  align-items: center;
  background: white;
}

.standard-tile {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
</style>
