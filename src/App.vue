<template>
  <aside>
    <ul class="cssui-sidebar__ul">
      <RouterLink
        v-for="item in sidebarList"
        :key="item.path"
        :to="item.path"
        custom
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li class="cssui-sidebar__li">
          <a
            :class="[isActive && 'active', isExactActive && 'exact-active']"
            :href="href"
            @click="navigate"
            >{{ item.label }}</a
          >
        </li>
      </RouterLink>
    </ul>
  </aside>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
const sidebarList = [
  {
    path: "/intro",
    label: "介绍",
  },
];
</script>

<style lang="scss" scoped>
aside {
  width: 200px;
  padding: 40px 20px;
  background: rgba(191, 182, 124, 0.5);
  backdrop-filter: blur(8px);
}

.cssui-sidebar {
  &__ul {
    list-style: none;
  }

  &__li {
    a {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      padding: 4px 12px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
      border-radius: 8px;

      &:hover,
      &.active,
      &.exact-active {
        background: rgba(191, 182, 124, 1);
        color: #ffffff;
      }
    }
  }
}
</style>

<style>
#app {
  display: flex;
}
main {
  flex: 1;
  padding: 40px;
}
</style>
