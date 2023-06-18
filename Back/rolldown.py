import time
from deep_translator import GoogleTranslator
from selenium import webdriver
from bs4 import BeautifulSoup
import json

# Configura o driver do navegador
driver = webdriver.Chrome()

# Abre a página no navegador
driver.get("file:///C:/Users/wilqu/OneDrive/Imagens/GPTE.html")
links = set()
# while True:
# Obtém a altura atual da página
# last_height = driver.execute_script("return document.body.scrollHeight")

# Rola a página até o final
# driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

# Aguarda o carregamento do conteúdo adicional
# time.sleep(10)

# Obtém a nova altura da página
# new_height = driver.execute_script("return document.body.scrollHeight")

# Verifica se a área de rolagem foi atingida
# if new_height == last_height:
# break

# Obtém o código-fonte da página
page_source = driver.page_source

# Criar uma lista vazia para armazenar os dados extraídos
dados = []
count = 0
# Criar uma instância da classe BeautifulSoup para analisar a página web
soup = BeautifulSoup(page_source, "html.parser")

# Encontrar todas as tags "a" que contêm os links
for link in soup.find_all("article"):
    a_tag = link.find("a")
    href = a_tag.get("href")
    if href not in links:
        # print(href)
        links.add(href)
        # print(len(links))

        header = link.find("h2", class_="post-card-title")

        categoria = link.find("span", class_="post-card-primary-tag")

        resumo = link.find("div", class_="post-card-excerpt")

        # Verificar se as tags foram encontradas
        if header and categoria and resumo:
            # Extrair o texto das tags
            titulo = header.get_text()
            categoria = categoria.get_text()
            resumo = resumo.get_text()

            # Traduzir o texto para português usando o Google Translator
            resumo_pt = GoogleTranslator(source="auto", target="pt").translate(
                resumo
            )

            # Criar um dicionário com os dados extraídos e traduzidos
            dicionario = {
                "Titulo": titulo,
                "Categoria": categoria,
                "Resumo": resumo_pt,
            }

            # Adicionar o dicionário à lista de dados
            dados.append(dicionario)
            count += 1
            print(count)

# Converter a lista de dados em uma lista json
dados_json = json.dumps(dados)

# Abrir um arquivo para escrita
with open("dados.json", "w") as f:
    # Escrever a lista json no arquivo
    f.write(dados_json)
