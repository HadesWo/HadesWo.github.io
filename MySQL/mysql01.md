## 1.新增数据

1. 插入多条数据
``` mysql
create table teacher(
id int(11) not null primary key auto_increment,
name varchar(4) charset utf8 default null,
score int(11) default null
);
insert into teacher values ('','张三',89),('','李四','99');
```
2. 主键重复处理
``` mysql
create table my_student(
stu_id varchar(10) primary key comment '主键，学生ID',
stu_name varchar(10) not null comment '学生姓名'
)charset utf8;
```
``` mysql
insert into my_student values 
('stu001','张三'),
('stu002','张四'),
('stu003','张五'),
('stu004','张六');
```
``` mysql
insert into my_student values('stu001','张大');
insert into my_student values('stu001','张大') on duplicate key update stu_name = '张大';
replace into my_student values('stu003','赵敏');
```
3. 蠕虫复制
``` mysql
create table my_simple(
name varchar(5) not null
)charset utf8;
insert into my_simple values ('good'),('book');
insert into my_simple  (select * from my_simple);
```
**蠕虫复制可以快速增加表的数据，增加表压力，测试表的效率（索引）**

## 2.更新数据
基本语法：update 表名 set 字段名 = 新值 where = 条件
``` mysql
update my_simple set name = '李世明' where name = 'good' limit 5;
```
## 3. 删除数据
delete删除数据的时候无法充值auto_increment;
truncate 表名：可以重置表自增长
## 4. 查询数据
**select 选项 字段列表 from 数据源 where 条件 group by 分组 having 条件 order by 排序 limit 限制;**
``` mysql
select distinct * from my_simple; 
select * from (select * from my_simple) as my_own;
```

1. 分组：group by,是为了分组后进行数据统计的，如果只是想看数据显示，那么group by没什么含义。
2. 利用一些统计函数： count(),avg(),sum(),max(),min()。
``` mysql
select * from my_student group by class_id;
select * from my_student group by class_id;

```

- 多分组：group by 字段1，字段2;
- group concat(字段)，将分组后的字段拼接
- MySQL中，分组默认有排序功能，按照分组字段进行排序，默认是升序（asc）,降序为desc。
- 回溯统计：group by 字段 with rollup; 

### having子句
1. having是在group by 之后，可对分组的数据进行筛选，where不行
2. Having 在group by分组之后，可以使用聚合函数或者字段别名，where是从表中取数据，别名是在数据进入到内存之后才有的。
``` mysql
select class_id,count(*) as number from my_student group by class_id having number >=4;
```
### order by 子句 ：order by 字段[ase|desc];
### limit子句：limit offset length;

## 子查询
``` mysql
select * form XX where (A,B ) = (select A ,B from YYY)
```

