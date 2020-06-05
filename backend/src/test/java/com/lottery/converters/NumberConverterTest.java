package com.lottery.converters;

import org.junit.jupiter.api.Test;

import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class NumberConverterTest {

    @Test
    void shouldConvertNumberToArray() {
        Long number = 10L;
        Integer[] expected = {2, 4};
        Integer[] result = NumberConverter.toArray(number);
        assertArrayEquals(expected, result);
    }

    @Test
    void shouldConvertLargeNumberToArray() {
        Long number = 123456789123L;
        Integer[] expected = {1, 2, 8, 10, 12, 13, 17, 20, 21, 24, 26, 27, 28, 29, 30, 32, 35, 36, 37};
        Integer[] result = NumberConverter.toArray(number);
        assertArrayEquals(expected, result);
    }

    @Test
    void shouldConvertZeroToArray() {
        Long number = 0L;
        Integer[] expected = {};
        Integer[] result = NumberConverter.toArray(number);
        assertArrayEquals(expected, result);
    }

    @Test
    void shouldConvertLongMaxValueToArray() {
        Long number = Long.MAX_VALUE;
        Integer[] expected = IntStream.rangeClosed(1, 63).boxed().toArray(Integer[]::new);
        Integer[] result = NumberConverter.toArray(number);
        assertArrayEquals(expected, result);
    }

    @Test
    void shouldConvertNegativeNumberToArray() {
        Long number = -1L;
        Integer[] expected = IntStream.rangeClosed(1, 64).boxed().toArray(Integer[]::new);
        Integer[] result = NumberConverter.toArray(number);
        assertArrayEquals(expected, result);
    }

    @Test
    void shouldThrowExceptionForNull() {
        assertThrows(NullPointerException.class, () -> NumberConverter.toArray(null));
    }
}