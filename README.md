
# Projeto Trybers and Dragons

Para este projeto foi aplicado os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).


## Instalação

1. Clone o repositório.
```bash
git clone git@github.com:Thromoto/project-trybers-and-dragons.git
```
2. Entre na pasta do repositório que você acabou de clonar.

3. Rode o serviço node e db com o comando.
```bash
docker-compose up -d
```
* Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
* A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.
* Use o comando `docker exec -it trybers_and_dragons bash`.
* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

4. Instale as dependências.
```bash
npm install
```

5. Inicie o servidor de desenvolvimento executando o seguinte comando.
```bash
npm start
```


## Stack utilizada

Typescript, POO, SOLID.