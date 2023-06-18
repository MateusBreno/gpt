import requests
from bs4 import BeautifulSoup
import psycopg2

# Conecte-se ao banco de dados PostgreSQL
conn = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_username",
    password="your_password"
)
cur = conn.cursor()

# Faça o web scraping da página
url = 'https://gpte.ai/news/metas-sam-revolutionizes-image-segmentation-with-ai/'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Extraia os dados desejados
title = soup.find('h1', class_='post-title').text
content = soup.find('section', class_='post-content').text

# Insira os dados no banco de dados
cur.execute("INSERT INTO your_table (title, content) VALUES (%s, %s)", (title, content))
conn.commit()

# Feche a conexão com o banco de dados
cur.close()
conn.close()

##############################################################################


##############################################################################



##################################################################

import psycopg2

# Conecta ao banco de dados
conn = psycopg2.connect("dbname=test user=postgres password=secret")
cur = conn.cursor()

# Cria a tabela, se ainda não existir
cur.execute("CREATE TABLE IF NOT EXISTS images (id serial PRIMARY KEY, data bytea)")

# Abre a imagem em modo binário
with open('image.jpg', 'rb') as f:
    data = f.read()

# Insere a imagem na tabela
cur.execute("INSERT INTO images (data) VALUES (%s)", (data,))

# Salva as alterações e fecha a conexão
conn.commit()
cur.close()
conn.close()

