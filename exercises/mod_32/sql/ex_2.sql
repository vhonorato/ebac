--Crie uma consulta para cada consulta do exercício anterior que retorne o numero de registros encontrados pela busca

--1
SELECT
  COUNT(*) as number_of_films
from
  (
    SELECT
      f.title,
      c.name
    FROM
      film f
      INNER JOIN film_category fc ON f.film_id = fc.film_id
      INNER JOIN category c ON fc.category_id = c.category_id
  ) as n;
  
--2
SELECT
  COUNT(*) as number_of_actors
from
  (
    SELECT
      a.first_name,
      count(fa.film_id) as number_of_films
    FROM
      actor a
      INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
    GROUP BY
      a.actor_id
    ORDER BY
      number_of_films DESC
  ) as n;

--3
SELECT
  COUNT(*) as number_of_actors
from
  (
    SELECT
      a.first_name,
      count(f.length) as number_of_films
    FROM
      actor a
      INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
      INNER JOIN film f ON fa.film_id = f.film_id
    WHERE
      f.length > 120
    GROUP BY
      a.first_name
    ORDER BY
      number_of_films DESC
  ) as n;