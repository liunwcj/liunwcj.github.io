console.log('lm_test.js');
$(function () {

    $('.price-btn .left2').click(function (e) {
        e.preventDefault();

        var getAcShopID = function (name) {
            var _url = $('.price-btn .left').attr('href');
            function GetParam(url, id) {
                url = url + "";
                regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
                reg = eval(regstr);
                //eval可以将 regstr字符串转换为 正则表达式
                result = url.match(reg);
                if (result && result[2]) {
                    return +result[2];
                }
            }
            return GetParam(_url, name);
        };

        let layerLoader = layer.load(1, { shade: 0.5 });

        var url = "/xjhome/enroll_verify";
        var _time = new Date().getTime() + 40;
        let params = new URLSearchParams();
        params.append('activity_id', getAcShopID('activity_id'));
        params.append('shop_id', getAcShopID('shop_id'));
        params.append('t', _time);

        axios.post(url, params)
            .then(function (ret) {
                layer.close(layerLoader);
                console.log(ret);
                console.log(ret.data);
                console.log('result', ret.data.result);
                if (ret.data.result == 0) {
                    layer.alert(ret.data.errmsg);
                } else if (ret.data.result == -1) {
                    console.log('跳转', ret.data.data);
                    window.location.href = ret.data.data;
                } else {
                    layer.alert(ret.data.errmsg);
                }
            });
    });

});
