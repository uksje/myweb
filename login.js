var user=[{
    "username":"admin",
    "password":"123456"
},
{
    "username":"abc",
    "password":"11111"
}]
function check(username,password){
    for (var i=0;i<user.length;i++){
        if(user[i].username==username&&user[i].password==password){
            return true
        }
    }
    return false
}
function add(username,password){
    user.push({
        "usernsme":username,
        "password":password
    })
}

var login=document.getElementById('login')
login.addEventListener('click',function(){
var username=document.getElementById('username').value
var password=document.getElementById('password').value
if (check(username,password)){
    window.location.href="index.html"
    var token =hex_md5(username+password)
    localStorage.setItem('token',token)
} else {
    alert('用户名或密码错误');
}
})


var register=document.getElementById('register')
register.addEventListener('click',function(){
var username=document.getElementById('username').value
var password=document.getElementById('password').value
if(check(username,password)){
    alert('用户已存在')
}else{
    add(username,password)
    alert('注册成功')
}
})

