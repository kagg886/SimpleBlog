package com.kagg886.simple_blog.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kagg886.simple_blog.mapper.BlogMapper;
import com.kagg886.simple_blog.model.Blog;
import com.kagg886.simple_blog.service.BlogService;
import org.springframework.stereotype.Service;

/**
 * @author kagg886
 * @date 2023/10/13 20:26
 **/
@Service
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements BlogService {
}
