--Faça uma consulta que retorne a lista de filmes e suas categorias correspondentes.
SELECT
  f.title,
  c.name
FROM
  film f
  INNER JOIN film_category fc ON f.film_id = fc.film_id
  INNER JOIN category c ON fc.category_id = c.category_id;

--Faça uma consulta que retorne a lista de todos os atores com o número filmes que cada ator participou. Ordene a lista pelo numero de filmes, iniciando pelos atores que mais atuaram.
SELECT
  a.first_name,
  count(fa.film_id) as number_of_films
FROM
  actor a
  INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
  GROUP BY a.actor_id
  ORDER BY number_of_films DESC;

--Faça uma consulta que retorne a lista de atores que atuaram em filmes com mais de duas horas de duração (120min). Ordene a lista pelo numero de filmes que cada ator participou.
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
  number_of_films DESC;