export type BlogReturn = {
    totalPage: number,
    data: Array<BlogList>
}

export type BlogList = {
    id: number
    title: string,
    summary: string,
    img?: string | string[]
    date: number,
    share: ShareInfo
}

export type ShareInfo = {
    like: number
    view: number
    comment: number
}

export type BlogInfo = {
    title: string
    source: string
    time: number
    share: ShareInfo
}

export type User = {
    id: number
    name: string
    email: string
    avatar: string
}

export type CommentInfo = {
    id: number
    fromBlogId: number
    title?: string
    comment: string
    date: number
    user: User
}

export type FriendInfo = {
    id: number
    title: string
    link: string
    description: string
}

export type SummaryInfo = {
    site: {
        view: number,
        comment: number,
    },

    viewHistory: Array<number>
    commentHistory: Array<number>
}