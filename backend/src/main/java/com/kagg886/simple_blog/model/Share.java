package com.kagg886.simple_blog.model;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author kagg886
 * @date 2023/10/13 21:00
 **/
@Data
@TableName("blog-share")
public class Share {
    @TableId("id")
    private int id;
    @TableField("like")
    private int like;
    @TableField("view")
    private int view;
}
