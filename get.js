import http from "k6/http"

const url = 'http://127.0.0.1:8080/pay/payList';//接口地址


export default function () {
	//数据参数
	//head头参数
    var head = {"TOKEN":"04d844f425bcd51a304f1146614755ff","Content-Type":"application/json"};
	//发起请求
    var res = http.get(url,params , head);
	//控制台输出内容
   // console.log(res.body)
}



