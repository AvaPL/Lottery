package com.lottery.converters;

import com.lottery.LotteryDraw;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter (autoApply = true)
public class DrawTypeConverter implements AttributeConverter<LotteryDraw.DrawType, String> {

    @Override
    public String convertToDatabaseColumn(LotteryDraw.DrawType drawType) {
        return drawType.toString();
    }

    @Override
    public LotteryDraw.DrawType convertToEntityAttribute(String s) {
        return LotteryDraw.DrawType.valueOf(s);
    }
}
