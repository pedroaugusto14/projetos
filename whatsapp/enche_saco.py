from selenium import webdriver
import time
from webdriver_manager.chrome import ChromeDriverManager

#para quem ?
site = 'https://web.whatsapp.com/'
vitima = str(input('qual o nome dapessoa :  '))
mensagem = str(input('o que devo enviar :  '))
quant = int(input('quantas veses :  '))
n = 0

# abrir o site
diver = webdriver.Chrome(ChromeDriverManager().install())
diver.get(site)
time.sleep(30)

# fazer login

# achar a vitima

# clicar no contato da vitima

# clicar no campo de escrita

# escrever a mensagem

# enviar a mensagem


# while quant > n :
    # n += 1
    # print( mensagem )
