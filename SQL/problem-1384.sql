# Write your MySQL query statement below
# Group sold product by the date


select sell_date, count(distinct product) as num_sold, group_concat(distinct product) as products from activities group by sell_date;