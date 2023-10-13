import {BlogInfo, BlogReturn, CommentInfo, FriendInfo, SummaryInfo} from "./model.ts";
import {dataImpl} from "./mock.ts";


export const noBackendMock = true

export interface API {
    'admin/summary': undefined,

    'user/login': {
        name: string
        password: string
        captcha: string
    }

    'blog/list': {
        page?: number
        pageSize?: number
    },

    'blog/info': {
        id: number
    },

    'blog/comment': {
        id: number
        page?: number
        pageSize?: number
    },

    'blog/friends': {}
}

export type APIReturn = {
    'blog/list': BlogReturn
    'blog/info': BlogInfo
    'blog/comment': Array<CommentInfo>
    'blog/friends': Array<FriendInfo>
    'user/login': undefined
    'admin/summary': SummaryInfo
}

export type Response<T> = {
    code: number
    msg: string
    data: T
}

export async function request<T extends keyof API>(url: T, obj: API[T] = {} as API[T]): Promise<Response<APIReturn[T]>> {

    if (noBackendMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Fetch Mock API:', url, '\nData:', obj, '\nCall:',dataImpl[url])
                resolve({
                    code: 200,
                    msg: 'OK!',
                    data: dataImpl[url]
                })
            }, 1000)
        })
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(obj),
    });
    const json = await res.json()


    console.log('Fetch API:', url, '\nData:', obj, '\nCall:',json)
    return JSON.parse(json) as Response<APIReturn[T]>
}

// request('blog/list', {
//     page: 1
// }).then(a => {
//     a.data[0].share.comment
// })