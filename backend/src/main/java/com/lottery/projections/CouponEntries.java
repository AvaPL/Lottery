package com.lottery.projections;

import lombok.Data;
import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Immutable
@Entity
@Data
//@Subselect("select id\n" +
//           "from COUPON")
public class CouponEntries {
    @Id
    private Long id;
    @OneToMany(mappedBy = "couponEntries")
    private List<EntrySummary> entrySummaries;
}
