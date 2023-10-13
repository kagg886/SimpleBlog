package com.kagg886.simple_blog.model.rtn;

import lombok.Data;

import java.util.List;

/**
 * @author kagg886
 * @date 2023/10/13 20:36
 **/
@Data
public class BlogReturn {
    private Long totalPage;
    private List<Blog> data;

    //    id: number
    //    title: string,
    //    summary: string,
    //    img?: string | string[]
    //    date: number,
    //    share: ShareInfo
    @Data
    public static class Blog {
        private Integer id;
        private String title;
        private String summary;
        private String[] img;
        private Long date;
        private ShareInfo share;
    }

    @Data
    public static class ShareInfo {
        private Integer like;
        private Integer view;
        private Integer comment;
    }
}
