package com.kagg886.simple_blog.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.kagg886.simple_blog.model.Blog;
import com.kagg886.simple_blog.model.Share;
import com.kagg886.simple_blog.model.rtn.BlogReturn;
import com.kagg886.simple_blog.model.rtn.Response;
import com.kagg886.simple_blog.service.BlogService;
import com.kagg886.simple_blog.service.ShareInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author kagg886
 * @date 2023/10/13 20:27
 **/
@Controller
@RequiredArgsConstructor
public class BlogController {

    private final BlogService blogService;
    private final ShareInfoService shareInfoService;

    @PostMapping("/blog/list")
    @ResponseBody
    public Response<?> getBlogsByPage(@RequestParam("page") Integer page, @RequestParam("pageSize") Integer pageSize) {
        if (page == null || pageSize == null) {
            return Response.err(Response.ERR_MISSING_REQUIRED, "缺少page,pageSize参数!");
        }

//        Page<Blog> list = blogService.page(new Page<>(page, pageSize));
//        BlogReturn blogReturn = new BlogReturn();
//        blogReturn.setTotalPage(list.getTotal());
//
//        list.getRecords().forEach((v) -> {
//            BlogReturn.Blog blog = new BlogReturn.Blog();
//
//            blog.setId(v.getId());
//            blog.setTitle(v.getTitle());
//            blog.setSummary(BlogService.getSummary(v));
//            blog.setDate(v.getDate());
//            blog.setImg(null);
//
//            Share i = shareInfoService.getById(v.getId());
//
//            BlogReturn.ShareInfo info = new BlogReturn.ShareInfo();
//
//            info.setView(i.getView());
//            info.setLike(i.getLike());
//
//
//            info.setComment();
//
//            blog.setShare(info);
//        });
//
//        return Response.ok(blogReturn);
    }
}
