# Тестовое задание для «Системные технологии»

## Запрос для БД
```sql
SELECT 
docs.date,docTypes.name AS doctype,docs.id,products.name AS product_name,products.image,products.price,rows.quantity,products.removed
FROM docs
LEFT JOIN docTypes ON docTypes.id = docs.typeId
LEFT JOIN rows ON rows.docId = docs.id
LEFT JOIN products ON products.id = rows.productId
WHERE docs.removed != 1 AND docTypes.removed != 1
ORDER BY docs.date DESC;
```

## Стэк
- `Vue` — рендеринг данных
- `Luxon`  — форматирование дат
- `Vite` — бандлер
- `PostCSS` — постпроцессинг `CSS` (утилиты, автопрефиксер, линтинг правил и пр.)

## Старт проекта
`npm run dev` или `yarn dev`
