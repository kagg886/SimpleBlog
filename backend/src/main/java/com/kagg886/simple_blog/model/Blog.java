package com.kagg886.simple_blog.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author kagg886
 * @date 2023/10/13 20:18
 **/
@Data
@TableName("blog")
public class Blog {
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @TableField("title")
    private String title;

    @TableField("date")
    private Long date;

    @TableField("file")
    private String file;
}
