<template>
  <article class="markdown-body">
    <div class="test"> 
      <h2>介绍</h2>
      <p>
        小轮子 UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。
      </p>

      <p>
        这款组件库其实是我为了总结自己的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我自己写的。
      </p>
      <p>
        所以如果强烈不建议你将此 UI库用于生产环境
        ，源码放在了<a href="https://github.com/wdnmd1099/vue3-xiao-lun-zi-wheel">https://github.com/wdnmd1099/vue3-xiao-lun-zi-wheel</a>
        ，你也可以直接查看每个组件的源代码和示例，运行方法见 README.md。
      </p>
      <p>
       下一步：<router-link to="/start/install">安装</router-link> 
      </p>
    </div>

  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.test {
  z-index: 10;
  font-size: 1.1em;
}
</style>