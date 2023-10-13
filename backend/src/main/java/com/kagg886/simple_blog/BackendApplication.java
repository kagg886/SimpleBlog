package com.kagg886.simple_blog;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileWriter;
import java.nio.file.Paths;

@Slf4j
@SpringBootApplication
public class BackendApplication {
    @SneakyThrows
    public static void main(String[] args) {
        //获取配置文件
        File f = Paths.get(System.getProperty("user.home"), "simple-blog", "application.properties").toFile();
        if (!f.exists()) {
            f.getParentFile().mkdirs();
            f.createNewFile();
            FileWriter writer = new FileWriter(f);
            writer.append("sql.username=\n" +
                    "sql.password=");
            writer.flush();
            writer.close();
            log.info("第一次运行，配置文件已初始化在:" + f.getAbsolutePath() + "\n请填写两个属性");
            return;
        }
        SpringApplication.run(BackendApplication.class, args);
    }
}
