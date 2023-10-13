package com.kagg886.simple_blog.conf;

import lombok.Data;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * @author kagg886
 * @date 2023/10/13 17:06
 **/
@Configuration
//这次使用file协议的url路径来解析
@PropertySource(name = "sql",value = "file:${user.home}/simple-blog/application.properties")
@Data
public class DataSourceConfig {
    private String username;
    private String password;
}
