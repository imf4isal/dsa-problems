# Write your MySQL query statement below
select id
from (select
    id,
    temperature,
    recordDate,
    LAG(temperature) over(order by recordDate) as prevTemp,
    LAG(recordDate) over(order by recordDate) as prevDate
from weather
order by recordDate) as main
where main.temperature > main.prevTemp AND DATEDIFF(main.recordDate, main.prevDate) = 1