package com.kagg886.simple_blog.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kagg886.simple_blog.model.Share;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author kagg886
 * @date 2023/10/13 21:26
 **/
@Mapper
public interface ShareInfoMapper extends BaseMapper<Share> {
}
