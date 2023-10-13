package com.kagg886.simple_blog.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kagg886.simple_blog.model.Blog;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author kagg886
 * @date 2023/10/13 20:24
 **/
@Mapper
public interface BlogMapper extends BaseMapper<Blog> {
}
