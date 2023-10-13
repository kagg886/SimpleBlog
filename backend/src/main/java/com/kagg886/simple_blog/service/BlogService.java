package com.kagg886.simple_blog.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kagg886.simple_blog.model.Blog;
import lombok.SneakyThrows;

import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * @author kagg886
 * @date 2023/10/13 20:25
 **/

public interface BlogService extends IService<Blog> {


    @SneakyThrows
    static String getSummary(Blog blog) {
        Path f = Paths.get(System.getProperty("user.home"), "simple-blog", "blogs", blog.getFile(), "index.md");

        try (FileChannel c = FileChannel.open(f)) {
            ByteBuffer buffer = ByteBuffer.allocate(128);
            c.read(buffer);
            buffer.flip();
            return new String(buffer.array(), StandardCharsets.UTF_8);
        }
    }
}
