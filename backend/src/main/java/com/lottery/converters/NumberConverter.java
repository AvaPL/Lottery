package com.lottery.converters;

import java.util.ArrayList;
import java.util.List;

public class NumberConverter {
    public static Integer[] toArray(Long numbers){
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < 64; i++)
            if ((numbers >> i & 1) == 1)
                result.add(i + 1);
        return result.toArray(new Integer[0]);
    }
}
