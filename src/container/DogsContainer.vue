<template>
    <div class="dogs">
        <p>I am DogsContainer</p>
        <div class="dogs-menu">
            <DogsMenu />
        </div>
        <div class="dogs-viewer">
            <DogsViewer />
        </div>
    </div>
</template>

<script>
import DogsMenu from '@/components/dogs/DogsMenu'
import DogsViewer from '@/components/dogs/DogsViewer'

export default {
  name: 'DogsContainer',
  components: {
    dogsmenu: DogsMenu,
    dogsviewer: DogsViewer
  }
}
</script>

<style scoped>
    .dogs-menu {
        width: 25%;
    }

    .dogs-viewer {
        width: 75%;
    }
</style>



