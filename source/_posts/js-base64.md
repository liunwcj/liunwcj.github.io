---
title: js中base64编码和解码
date: 2023-09-21 15:11:33
tags:
---

##### 什么是 Base64 编码？
&emsp;&emsp;Base64：选出64个字符作为一个基本字符集（A-Z，a-z，0-9，+，/，再加上作为垫字的”=”，实际是65个字符），其它所有符号都转换成这个字符集中的字符。

&emsp;&emsp;Base64 因为能够起到隐藏数据的效果而常常被误认为是一种加密技术。值得强调的是， Base64 不是一种加密或压缩技术。实际上，Base64 编码信息的大小是原始数据实际大小的 1.3333 倍。

	编码规则：
	1.将每三个字节作为一组，一共是24个二进制位。
	2.将这24个二进制位分为四组，每个组有6个二进制位。
	3.在每组前面加两个00，扩展成32个二进制位，即四个字节。
	4.根据下表，得到扩展后的每个字节的对应符号，这就是Base64的编码值。

>理解：假设我们有 6 个 ASCII 字符，那么二进制数据就是 6 * 8 = 48（位）。如果使用 Base64 编码的话，那么就会分成 48 / 6 = 8(组)，每一组就会对应一个 ASCII 字符，也即是说，经过 Base64 编码后，我们会有 8 个 ASCII 字符。因为数据传输的时候都会被转换为电信号（虽然你看到的是字符），所以数据的大小都是按位来算的，8 个 ASCII 字符就是 8 * 8 = 64（位），64 / 48 = 4 / 3  ≈ 1.3333 。 综上所述，Base64 编码信息的大小是原始数据实际大小的 1.3333 倍。

##### 1.Vue 中实现 base64 编码和解码
使用 js-base64 插件实现

```bash
# 安装
$ npm install --save js-base64
```

```javascript
export default {
  data() {
    return {
      encodeTxt:'前端开发',
      decodeTxt:'5YmN56uv5byA5Y+R',
    };
  },
  methods: {
    base64Test(){
      let Base64 = require('js-base64').Base64; // 引入
      console.log('编码：' + Base64.encode(this.encodeTxt))
      console.log('解码：' + Base64.decode(this.decodeTxt))  
    }
  },
  mounted(){
    this.base64Test();
  }
};
```
##### 2. Web 通过 window对象的 btoa 和 atob 函数实现

```javascript
// window.atob() 函数用来解码被 base64 编码过的数据
var encoded_str = "VGhpcyBpcyBhIHN0cmluZw==";
var str = atob(encoded_str);
console.log(str); // This is a string

// window.btoa() 将ascii字符串或二进制数据转换成 base64 编码过的字符串
var str = "This is a string";
var encoded_str = btoa(str);
console.log(encoded_str); // VGhpcyBpcyBhIHN0cmluZw==

```
	注意：不适用于带中文解密，即window.btoa 与 window.atob 不支持中文，且 IE9 以下不支持atob、btoa
	解决：btoa 不支持 Unicode 字符编码的问题
	编码时，先用 encodeURIComponent 对字符串进行编码，再进行 btoa 进行 Base64 编码
	解码时，先用 atob 对 Base64 编码的串进行解码，再用 decodeURIComponent 对字符串进行解码

```javascript
var str = "hello,中国";
var encoded_str = btoa(encodeURIComponent(str));
var decoded_str = decodeURIComponent(atob(encoded_str));
console.log(encoded_str); // aGVsbG8lMkMlRTQlQjglQUQlRTUlOUIlQkQ=
console.log(decoded_str); // hello,中国在这里插入代码片
```

##### 3.node中自带的base64编码与解码方法
```javascript
// 普通字符串

//编码
Buffer.from(String).toString('base64');
//解码
Buffer.from(base64Str, 'base64').toString();

// 十六进制Hex
//编码
Buffer.from(String, 'base64').toString('hex');
//解码
Buffer.from(base64Str, 'hex').toString('utf8');

// 图片
const fs = require('fs');
//编码
function base64_encode(file) {
    let bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}
//解码
function base64_decode(base64str, file) {
    var bitmap = Buffer.from(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
}
```

##### 参考
>https://juejin.cn/post/6976480394002563109
>https://juejin.cn/post/7195757485936803899
>https://juejin.cn/post/7003217250979151885
