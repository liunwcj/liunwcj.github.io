---
title: jQuery 图片加载完成
date: 2020-09-28 18:07
---

##### main:

```javascript
   var imgLoaded = function($imgArr,callback){
        var _length = $imgArr.length;
        if(_length > 0){
            $imgArr.each(function(){
                var img = new Image();
                img.src = $(this).attr("src");
                img.onload = function(){
                    _length--;
                    if(typeof callback === 'function' && _length === 0){
                        callback();
                    }  
                }
            });
        }
    };
```
##### test:

```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>imgs - test</title>
        </head>
        <body>
            <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script charset="utf-8">
                $(function(){
                    var imgLoaded = function($imgArr,callback){
                        var _length = $imgArr.length;
                        if(_length > 0){
                            $imgArr.each(function(){
                                var img = new Image();
                                img.src = $(this).attr("src");
                                img.onload = function(){
                                    _length--;
                                    if(typeof callback === 'function' && _length === 0){
                                        callback();
                                    }  
                                }
                            });
                        }
                    };

                    var tpl = function(data){
                        var str = '';
                        $.each(data,function(index,val){
                            str += '<img src="'+val.image+'" />'
                        });
                        return str;
                    };

                    $.ajax({
                        url: 'https://www.fastmock.site/mock/f4b7c39ca8a0e60b26a72e0912603206/card/test',
                        type: 'POST',
                        dataType: 'JSON',
                        success: function (data, textStatus, jqXHR) {
                            $('body').append(tpl(data.data.list));
                            imgLoaded($('body').find('img'),function(){
                                console.log('--- 图片加载完成 ---');
                            });
                        }
                    });
                });
            </script>
        </body>
    </html>
```

##### 参考
>https://www.cnblogs.com/moqiutao/p/7283129.html
>https://segmentfault.com/q/1010000016260540
