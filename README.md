# 红米槽扶贫项目（练手版）

## RN 使用记录

* 新版本和老版本API区别很大
* 版本45+后，需要下载boost、double-conversion、folly、glog这几个第三方库编译。需要翻墙处理，需要下载对应版本的对应文件，因为要验证唯一性。
* 新版开发，最好把RN-cli升级，以及xcode升级（xcode升级完记得重启，麻痹查了一晚上的错误）
* 需要把 `bundle react native code and images` 下的 `Run script only when installing` 勾选上
* 长列表建议 `FlatList` 组件
* 页面跳转使用第三方的 `react-navigation` 