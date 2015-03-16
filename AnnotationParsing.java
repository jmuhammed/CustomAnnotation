package com.prokarma.annotation;
 
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

import com.prokarma.custom.UserStory;
 
public class AnnotationParsing {
 
    public static void main(String[] args) {
        try {
            for (Method method : AnnotationParsing.class
                    .getClassLoader()
                    .loadClass(("com.prokarma.test.SummaryTestClass"))
                    .getMethods()) {
                // checks if UserStory annotation is present for the method
                if (method.isAnnotationPresent(com.prokarma.custom.UserStory.class)) {
                    try {
                        // iterates all the annotations available in the method
                        for (Annotation anno : method.getDeclaredAnnotations()) {
                            System.out.println("Annotation in Method '"
                                    + method + "' : " + anno);
                        }
                        UserStory userStoryAnnotation = method.getAnnotation(UserStory.class);
                        System.out.println(userStoryAnnotation.name());
                       
                    } catch (Throwable ex) {
                        ex.printStackTrace();
                    }
                }
            }
        } catch (SecurityException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
 
}
