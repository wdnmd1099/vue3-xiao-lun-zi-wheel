# 开始使用
请先[安装](#/start/Install)本组件库。

在你的代码中引入此组件库

```javascript
import {Button, Tabs, Tab, Switch, Dialog } from "lw-ui-1"
import "lw-ui-1/dist/lib/lw-ui.css";
```

现在尝试一下使用下面的Button组件吧

## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <Button type="primary">按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog } from "lw-ui-1"
import "lw-ui-1/dist/lib/lw-ui.css";
export default {
  components: {Button}
}
</script>
```
