package com.kagg886.simple_blog.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kagg886.simple_blog.mapper.ShareInfoMapper;
import com.kagg886.simple_blog.model.Share;
import com.kagg886.simple_blog.service.ShareInfoService;
import org.springframework.stereotype.Service;

/**
 * @author kagg886
 * @date 2023/10/13 21:27
 **/
@Service
public class ShareInfoServiceImpl extends ServiceImpl<ShareInfoMapper, Share> implements ShareInfoService {
}
