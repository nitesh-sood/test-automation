package com.qa.utils;

import java.util.Properties;

public class TestUtils {

    static Properties props;

    public String getProperty(String name) throws Exception {
        if(props == null){
            props = new PropertyManager().getProps();
        }

        return props.getProperty(name);
    }
}
