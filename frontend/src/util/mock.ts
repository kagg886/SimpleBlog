import {API, APIReturn} from "./request.ts";

export type data = {
    [a in keyof API]: APIReturn[a]
};

export const dataImpl: data = {
    "admin/summary": {
        site: {
            view: 114,
            comment: 514,
        },

        viewHistory: [
            100, 200, 300, 400, 300, 200, 100
        ],
        commentHistory: [
            1, 2, 3, 4, 5, 6, 7
        ]
    },

    "user/login": undefined,
    "blog/friends": [
        {
            id: 1,
            title: '百度',
            link: 'https://www.baidu.com',
            description: '中文互联网门户1'
        },
        {
            id: 2,
            title: '搜狐',
            link: 'https://www.sohu.com',
            description: '中文互联网门户2'
        },
        {
            id: 3,
            title: 'Vue',
            link: 'https://cn.vuejs.org',
            description: '一个前端框架'
        }
    ],

    'blog/comment': [
        {
            id: 1,
            fromBlogId: 1,
            date: Date.now(),
            title: '好耶',
            comment: '酒肉穿肠过，佛祖心中留',
            user: {
                id: 1,
                name: 'kagg886',
                avatar: 'http://localhost:5173/a.png',
                email: 'iveour@163.com'
            }
        },
        {
            id: 2,
            fromBlogId: 1,
            date: Date.now(),
            comment: 'Mahiro赛高捏',
            user: {
                id: 1,
                name: 'Mahiro',
                avatar: 'a.png',
                email: 'iveour@163.com'
            }
        },
        {
            id: 3,
            fromBlogId: 1,
            date: Date.now(),
            comment: '谁问你了?',
            user: {
                id: 1,
                name: 'you',
                avatar: 'a.png',
                email: '114514@163.com'
            }
        }
    ],

    'blog/list': {
        totalPage: 10,
        data: [
            {
                id: 1,
                date: Date.now(),
                title: '博客1',
                img: 'a.png',
                summary: '测试'.repeat(50),
                share: {
                    like: 114,
                    view: 514,
                    comment: 111
                }
            },
        ]
    },


    "blog/info": {
        title: '博客1',
        time: Date.now(),
        source: `
# 一. 为什么要学习TS？

- 越来越多的人使用ts
- ts在社区的活跃度逐渐上升
- 越来越多的库使用ts编写

## 二.TS vs JS

|TS|JS|
|--|--|
|JS的超集，解决大型项目|创建网页的动态脚本语言|
|强类型|动态弱类型|
|编译期发现错误|运行时发现错误|
|不允许改变变量的数据类型|变量可以被赋值为不同类型|

# 三. TS的特性

- 类型安全
- 下一代JS特性
- 完善的工具链

# 四. ts基础

## 4.1 基础类型：

boolean，number，string

enum

any，unknown，void

never

数组类型[]

元组tuple

## 4.2 函数类型：

输入参数：支持可选参数和默认参数

输出参数：可自动推断，默认为void

函数重载：名称相同参数不同，可通过重载支持多种类型

## 4.3 对象类型和接口

可选属性：?

只读属性：readonly

可以描述函数类型

可以描述自定义属性

## 4.4 类

拥有访问修饰符

抽象类:

- 只能被继承，不能被实现
- 抽象方法被子类实现

使用implements关键词约束类

## 4.5 高阶类型：

1. 联合类型：type C = A | B -> C可能是A也可能是B
2. 交叉类型：type C = A & B -> C既是A也是B
3. 类型断言：A as B
4. 类型别名：type C = B -> 为类型定义别名
5. 泛型：
   1. 为何使用泛型？
      
      创建可重用的组件
   2. 需要泛型的场景？
      \`\`\`typescript
      function print<T>(arg:T):T {
        console.log(arg)
        return arg
      }
      \`\`\`
   3. 泛型的语法是<>内写类型参数，一般用T表示。有用于对类型进行占位

## 4.6 类型操作符

- typeof——获取类型
- keyof——获取键
- in——遍历枚举
- T[K]——索引
- extends——泛型约束

## 4.7 常用工具类型：

Partial——类型属性变为可选

Required——类型属性变为必选

ReadOnly——类型属性变为只读

Pick，Record。。。

# 五. TS实战

## 5.1 声明文件

declare——三方库所需声明文件

.d.ts——声明文件定义

@types——三方库ts类型包

tsconfig.json——ts配置文件

## 5.2 应用

1. 泛型约束后端接口类型：
   \`\`\`typescript
   interface API {
     'book/detail': {
       id: number
     },
     'book/comment': {
       id: number,
       comment: string
     }
   }
   
   function request<T extends keyof API>(url: T,obj: API[T]) {
     //do something...
   }w
   
   request('book/detail',{
     id: 1
   })
   \`\`\`
        `,
        share: {
            like: 114,
            view: 514,
            comment: 111
        }
    }
}