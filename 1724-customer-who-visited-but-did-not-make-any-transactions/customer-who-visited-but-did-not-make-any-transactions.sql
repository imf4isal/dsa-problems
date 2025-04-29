# Write your MySQL query statement below

select 
    distinct v.customer_id,
    count(v.customer_id) as count_no_trans
from visits v
where visit_id not in (
        select 
            visits.visit_id
        from visits
        join transactions on visits.visit_id = transactions.visit_id
        )
group by v.customer_id