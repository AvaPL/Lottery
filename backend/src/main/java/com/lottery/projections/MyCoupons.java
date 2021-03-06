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
//@Subselect("select username\n" +
//           "from ACCOUNT")
public class MyCoupons {
    @Id
    private String username;
    @OneToMany(mappedBy = "myCoupons")
    private List<CouponSummary> couponSummaries;
}
