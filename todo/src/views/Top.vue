<template>
  <div class="top">
    <header>
      <h1 class="heading">くありおんのメモ帳</h1>
      <nav>
        <router-link to="/">ホーム</router-link>
        <router-link to="/AnimeWatch">アニメ鑑賞</router-link>
        <router-link to="/ToDo">タスク管理</router-link>
      </nav>
    </header>
    <main>
      <section>
        <h2 class="heading">
          概要
        </h2>
        <p class="text">
          プライベート用で作成したメモ帳サイトをVue.jsでリニューアル化する目的で作成<br>
          アニメ鑑賞記録をし、おすすめのアニメを決めたいと思ってます。
        </p>
      </section>
    </main>
  </div>
</template>
<script>
  import Vue from 'Vue'
  export default {
    name: 'top',
    component: {},
    data(){
      return {
        //
      }
    }
  }
</script>
<style scoped lang='scss'>
</style>