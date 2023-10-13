CREATE TABLE IF NOT EXISTS blog
(
#     博客的唯一id
    id    int          NOT NULL AUTO_INCREMENT,
#     标题
    title VARCHAR(255) NOT NULL,
#     发布日期，为时间戳形式
    date  bigint       NOT NULL,
#     博客文件夹路径
    file  varchar(255) NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `blog-share`
(
#     博客id
    `id`   int NOT NULL,
#     点赞
    `like` int NOT NULL,
#     浏览
    `view` int NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

create table IF NOT EXISTS `comment-info`
(
#     评论唯一id
    id         int           NOT NULL AUTO_INCREMENT,

#     评论所属博客id
    fromBlogId int           NOT NULL,
#     评论标题
    title      varchar(50),

#     评论本体
    comment    varchar(2048) NOT NULL,

#     日期
    date       bigint        NOT NULL,

    userid     int           NOT NULL,
    primary key (id)
);

create table IF NOT EXISTS `blog-user`
(
#     唯一id
    id     int         NOT NULL AUTO_INCREMENT,

#     用户名
    name   varchar(50) NOT NULL,

#     电子邮件
    email  varchar(50) NOT NULL,

#     头像的file
    avatar varchar(50) NOT NULL,
    primary key (id)
);


insert into blog (title, date, file)
values ('示例博客1', 1696504285584, '示例博客1');

insert into `blog-share` (id, `like`, view) values (1, 114, 514);

insert into `comment-info` (fromBlogId, title, comment, date, userid)
values (1, '草', '摸摸', 1696504285584, 1);

insert into `blog-user` (name, email, avatar)
values ('kagg886', 'iveour@163.com', 'kagg886.png');