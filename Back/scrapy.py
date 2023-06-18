import requests
from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator

# Faça o web scraping da página
url = 'https://gpte.ai/news/metas-sam-revolutionizes-image-segmentation-with-ai/'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Extraia os dados desejados
title = soup.find('h1', class_='article-title').text
content = soup.find_all('p')
content_text = ' '.join([p.text for p in content])

titulo = GoogleTranslator(source='en', target='pt').translate(title)
texto = GoogleTranslator(source='en', target='pt').translate(content_text)

print(titulo)
print(texto)