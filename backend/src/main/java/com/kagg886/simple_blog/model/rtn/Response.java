package com.kagg886.simple_blog.model.rtn;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * @author kagg886
 * @date 2023/10/13 20:41
 **/
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Response<T> {
    private final int code;
    private String msg;
    private T data;

    public static Response<Object> ERR_MISSING_REQUIRED = new Response<>(501);


    public static <T> Response<T> ok(T data) {
        return new Response<>(200, "OK", data);
    }

    public static Response<Object> err(Response<Object> base, String msg) {
        return new Response<>(base.getCode(), msg, null);
    }
}
