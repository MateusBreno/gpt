import requests
import time

url = 'https://www.example.com'
 # URL do site que você deseja monitorar
old_content = ''

while True:
    response = requests.get(url)
    new_content = response.text

    if new_content != old_content:
        print('O site foi atualizado!')
        # Coloque aqui o código do script que você deseja executar quando o site for atualizado
        old_content = new_content

    time.sleep(60) # Verifica o site a cada 60 segundos