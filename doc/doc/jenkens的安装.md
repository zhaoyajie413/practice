jenkins的安装
=============

1.安装docker,启动container。

>以下代码依次运行

```
yum install docker
```
```
service docker start
```
```
ps -ef|grep docker
```
```
docker pull jenkins
```

拉取好镜像之后，我们先创建目录，然后启动docker的container

```
mkdir /var/jenkins_home
```
**必须对文件授权**
```
chown 1000:1000 /var/jenkins_home
```
8089端口为任一端口。同时必须在阿里云配置安全组。
```
docker run -d --name myjenkins -p 8089:8080 -v /var/jenkins_home:/var/jenkins_home jenkins
```
打开浏览器。
```
yourIp：8089
```

